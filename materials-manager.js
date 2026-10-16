(() => {
  const databaseName = 'promotion-report-materials';
  const databaseStore = 'uploads';
  let databasePromise;

  const escapeHtml = (value = '') => String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

  const makeId = () => (window.crypto?.randomUUID?.() || `material-${Date.now()}-${Math.random().toString(16).slice(2)}`);
  const titleFromFile = (name) => name.replace(/\.[^/.]+$/, '').replace(/[-_]+/g, ' ').trim() || '未命名资料';

  const openDatabase = () => {
    if (databasePromise) return databasePromise;
    databasePromise = new Promise((resolve, reject) => {
      const request = window.indexedDB.open(databaseName, 1);
      request.onupgradeneeded = () => {
        if (!request.result.objectStoreNames.contains(databaseStore)) request.result.createObjectStore(databaseStore);
      };
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
    return databasePromise;
  };

  const putBlob = async (id, blob) => {
    const database = await openDatabase();
    await new Promise((resolve, reject) => {
      const transaction = database.transaction(databaseStore, 'readwrite');
      transaction.objectStore(databaseStore).put(blob, id);
      transaction.oncomplete = resolve;
      transaction.onerror = () => reject(transaction.error);
    });
  };

  const getBlob = async (id) => {
    const database = await openDatabase();
    return new Promise((resolve, reject) => {
      const transaction = database.transaction(databaseStore, 'readonly');
      const request = transaction.objectStore(databaseStore).get(id);
      request.onsuccess = () => resolve(request.result || null);
      request.onerror = () => reject(request.error);
    });
  };

  const deleteBlob = async (id) => {
    const database = await openDatabase();
    await new Promise((resolve, reject) => {
      const transaction = database.transaction(databaseStore, 'readwrite');
      transaction.objectStore(databaseStore).delete(id);
      transaction.oncomplete = resolve;
      transaction.onerror = () => reject(transaction.error);
    });
  };

  const readAsDataUrl = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });

  const getState = (key) => {
    try {
      const stored = JSON.parse(localStorage.getItem(key));
      return {
        additions: Array.isArray(stored?.additions) ? stored.additions : [],
        deleted: Array.isArray(stored?.deleted) ? stored.deleted : []
      };
    } catch (_) {
      return { additions: [], deleted: [] };
    }
  };

  const validExternalUrl = (value) => {
    try {
      const parsed = new URL(value);
      return parsed.protocol === 'https:' || parsed.protocol === 'http:' ? parsed.href : null;
    } catch (_) {
      return null;
    }
  };

  const mediaCard = (asset, position, featured) => {
    const type = asset.type || 'image';
    const title = escapeHtml(asset.title);
    const source = escapeHtml(asset.src || '');
    const sourceAttribute = source ? ` src="${source}"` : '';
    const blobAttribute = asset.blobId ? ` data-material-blob-id="${escapeHtml(asset.blobId)}"` : '';
    const documentClass = asset.layout === 'document' ? ' is-document' : '';
    const visual = type === 'video'
      ? `<video${blobAttribute}${sourceAttribute} muted playsinline preload="metadata"></video><span class="project-gallery-play" aria-hidden="true">▶</span>`
      : `<img${blobAttribute}${sourceAttribute} alt="${title}" loading="lazy" />`;

    return `
      <article class="project-gallery-item project-gallery-item-${type}${featured ? ' is-featured' : ''}${documentClass}">
        <button class="project-gallery-preview" type="button" data-material-preview data-material-type="${type}" data-material-src="${source}" data-material-title="${title}" aria-label="${type === 'video' ? '播放' : '放大查看'}：${title}">
          <span class="project-gallery-visual">${visual}</span>
          <span class="project-gallery-caption"><span>${type === 'video' ? 'VIDEO' : 'IMAGE'} / ${String(position).padStart(2, '0')}</span><b>${title}</b><i>↗</i></span>
        </button>
        <button class="project-material-delete" type="button" data-material-delete="${escapeHtml(asset.id)}" aria-label="删除资料：${title}">删除</button>
      </article>
    `;
  };

  const linkCard = (asset, position) => {
    const title = escapeHtml(asset.title);
    const href = escapeHtml(asset.href || '#');
    return `
      <article class="project-gallery-item project-gallery-item-link project-link-row">
        <a class="project-gallery-preview project-link-row-target" href="${href}" target="_blank" rel="noreferrer" aria-label="在新标签页打开：${title}" title="${title}">
          <span class="project-link-meta">LINK / ${String(position).padStart(2, '0')}</span>
          <span class="project-link-address">${href}</span>
          <i class="project-link-arrow" aria-hidden="true">↗</i>
        </a>
        <button class="project-material-delete" type="button" data-material-delete="${escapeHtml(asset.id)}" aria-label="删除链接：${title}">删除</button>
      </article>
    `;
  };

  const emptyState = (copy) => `<div class="project-material-empty"><span>暂无资料</span><p>${copy}</p></div>`;

  window.PromotionMaterialManager = ({ scope, caseNo, defaults, gallery, section, onPreview }) => {
    const storageKey = `promotion-materials:${scope}:${caseNo}`;
    const manager = section.querySelector('[data-material-manager]');
    const toggle = section.querySelector('[data-material-manager-toggle]');
    const toggleLabel = toggle.querySelector('[data-material-manager-label]');
    const fileForm = manager.querySelector('[data-material-file-form]');
    const fileInput = manager.querySelector('[data-material-file-input]');
    const fileTitle = manager.querySelector('[data-material-file-title]');
    const linkForm = manager.querySelector('[data-material-link-form]');
    const linkTitle = manager.querySelector('[data-material-link-title]');
    const linkUrl = manager.querySelector('[data-material-link-url]');
    const resetButton = manager.querySelector('[data-material-reset]');
    const message = manager.querySelector('[data-material-message]');
    const mediaCount = section.querySelector('[data-material-media-count]');
    const linkCount = section.querySelector('[data-material-link-count]');
    const defaultAssets = defaults.map((asset, index) => ({ ...asset, id: `default-${index}`, origin: 'default' }));
    let state = getState(storageKey);
    let objectUrls = [];

    const saveState = () => localStorage.setItem(storageKey, JSON.stringify(state));
    const setMessage = (text, type = 'neutral') => {
      message.textContent = text;
      message.dataset.state = type;
    };
    const assets = () => defaultAssets
      .filter((asset) => !state.deleted.includes(asset.id))
      .concat(state.additions.filter((asset) => !state.deleted.includes(asset.id)));
    const releaseObjectUrls = () => {
      objectUrls.forEach((url) => URL.revokeObjectURL(url));
      objectUrls = [];
    };

    const hydrateUploads = async () => {
      const pending = [...gallery.querySelectorAll('[data-material-blob-id]')];
      const missingIds = new Set();
      await Promise.all(pending.map(async (node) => {
        try {
          const blob = await getBlob(node.dataset.materialBlobId);
          if (!blob) throw new Error('missing blob');
          const objectUrl = URL.createObjectURL(blob);
          objectUrls.push(objectUrl);
          node.src = objectUrl;
          node.closest('[data-material-preview]').dataset.materialSrc = objectUrl;
        } catch (_) {
          const asset = state.additions.find((item) => item.blobId === node.dataset.materialBlobId);
          if (asset) missingIds.add(asset.id);
        }
      }));
      if (missingIds.size) {
        state.additions = state.additions.filter((asset) => !missingIds.has(asset.id));
        saveState();
        render();
        setMessage(`已清理 ${missingIds.size} 个无法读取的资料。`, 'success');
      }
    };

    const render = () => {
      releaseObjectUrls();
      const all = assets();
      const mediaAssets = all.filter((asset) => (asset.type || 'image') !== 'link');
      const linkAssets = all.filter((asset) => asset.type === 'link');
      mediaCount.textContent = mediaAssets.length;
      linkCount.textContent = linkAssets.length;
      gallery.innerHTML = `
        <section class="project-material-group" aria-labelledby="${scope}-media-title">
          <div class="project-material-group-head"><span id="${scope}-media-title">图片与视频</span><small>MEDIA / ${String(mediaAssets.length).padStart(2, '0')}</small></div>
          <div class="project-gallery-grid project-gallery-grid-media">
            ${mediaAssets.length ? mediaAssets.map((asset, index) => mediaCard(asset, index + 1, index === 0)).join('') : emptyState('可在“管理资料”中上传图片或视频。')}
          </div>
        </section>
        <section class="project-material-group" aria-labelledby="${scope}-link-title">
          <div class="project-material-group-head"><span id="${scope}-link-title">文档链接</span><small>LINKS / ${String(linkAssets.length).padStart(2, '0')}</small></div>
          <div class="project-gallery-grid project-gallery-grid-links">
            ${linkAssets.length ? linkAssets.map((asset, index) => linkCard(asset, index + 1)).join('') : emptyState('可在“管理资料”中添加文档或协作链接。')}
          </div>
        </section>
      `;
      hydrateUploads();
    };

    const removeAsset = async (id) => {
      const custom = state.additions.find((asset) => asset.id === id);
      if (custom) {
        state.additions = state.additions.filter((asset) => asset.id !== id);
        if (custom.blobId) deleteBlob(custom.blobId).catch(() => {});
      } else if (!state.deleted.includes(id)) {
        state.deleted.push(id);
      }
      saveState();
      render();
      setMessage('已移除该资料；可通过“恢复预设资料”撤销删除。', 'success');
    };

    gallery.addEventListener('click', (event) => {
      const deleteButton = event.target.closest('[data-material-delete]');
      if (deleteButton) {
        event.preventDefault();
        event.stopPropagation();
        removeAsset(deleteButton.dataset.materialDelete);
        return;
      }
      const preview = event.target.closest('[data-material-preview]');
      if (!preview || preview.tagName === 'A') return;
      const src = preview.dataset.materialSrc;
      if (!src) {
        setMessage('该上传文件暂时无法读取，请重新上传。', 'error');
        return;
      }
      onPreview({ type: preview.dataset.materialType, src, title: preview.dataset.materialTitle });
    });

    toggle.addEventListener('click', () => {
      const willOpen = manager.hidden;
      manager.hidden = !willOpen;
      section.classList.toggle('is-materials-editing', willOpen);
      toggle.setAttribute('aria-expanded', String(willOpen));
      toggleLabel.textContent = willOpen ? '完成管理' : '管理资料';
      toggle.querySelector('b').textContent = willOpen ? '×' : '+';
      if (willOpen) fileInput.focus();
    });

    fileForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const file = fileInput.files[0];
      if (!file) {
        setMessage('请选择一张图片或一个视频文件。', 'error');
        return;
      }
      const type = file.type.startsWith('image/') ? 'image' : file.type.startsWith('video/') ? 'video' : null;
      if (!type) {
        setMessage('仅支持图片或视频文件。', 'error');
        return;
      }
      const id = makeId();
      const asset = { id, type, title: fileTitle.value.trim() || titleFromFile(file.name), origin: 'custom' };
      try {
        await putBlob(id, file);
        asset.blobId = id;
      } catch (_) {
        try {
          asset.src = await readAsDataUrl(file);
        } catch (error) {
          setMessage('文件无法保存，请换用更小的文件后重试。', 'error');
          return;
        }
      }
      state.additions.push(asset);
      saveState();
      fileForm.reset();
      render();
      setMessage(`已添加${type === 'video' ? '视频' : '图片'}资料。`, 'success');
    });

    linkForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const href = validExternalUrl(linkUrl.value.trim());
      if (!href) {
        setMessage('请输入以 http:// 或 https:// 开头的有效链接。', 'error');
        return;
      }
      state.additions.push({ id: makeId(), type: 'link', href, title: linkTitle.value.trim() || '文档链接', origin: 'custom' });
      saveState();
      linkForm.reset();
      render();
      setMessage('已添加文档链接。', 'success');
    });

    resetButton.addEventListener('click', () => {
      state.additions.filter((asset) => asset.blobId).forEach((asset) => deleteBlob(asset.blobId).catch(() => {}));
      state = { additions: [], deleted: [] };
      saveState();
      render();
      setMessage('已恢复此项目的预设资料。', 'success');
    });

    render();
  };
})();
