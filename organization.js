const organizationCases = [
  {
    no: '01',
    title: 'AI 赋能设计\n鸿鹄 AI 技术大会专题分享',
    standard: '组织贡献 · AI 应用与方法推广',
    time: '2026.06',
    capability: [
      { title: 'AI 业务应用', copy: '将 AI 工具应用到 UI、演示、视频与海报等具体设计场景，围绕真实任务验证提效路径。' },
      { title: '工具分析与评估', copy: '结合实际任务拆解工具能力、适用边界与操作要点，为团队选择和使用工具提供依据。' },
      { title: '知识沉淀与共享', copy: '沉淀四类场景的实操流程与示例，先后完成互联网内部及鸿鹄技术大会 2 次专题分享，推动经验复用。' }
    ],
    icon: 'ai',
    summary: '围绕 UI 设计、PPT 制作、视频制作及海报设计四类场景，梳理 AI 工具的应用方法与实操流程，形成《AI 赋能设计》方案并在技术大会进行专题分享。',
    s: 'AI 工具快速演进，但团队在 UI、演示、视频与海报场景中的探索较为分散，缺少一套可复用、可落地的实操方法。',
    t: '负责梳理不同设计场景的 AI 应用路径，完成工具分析、流程沉淀与专题分享，推动个人探索转化为团队可参考的方法。',
    a: '聚焦四类高频设计场景，拆分实际任务与关键步骤；对工具能力和适用边界进行评估，沉淀操作流程、示例与优化建议，形成《AI 赋能设计》方案，并先后在互联网内部与鸿鹄技术大会进行专题分享，共完成 2 次分享。',
    r: '沉淀覆盖 UI、演示、视频、海报四类设计场景的 AI 实操流程与工具优化方法，为团队应用 AI 辅助设计提供可复用的实践参考。通过专题培训与技能分享，累计参与培训人数达 500+；其中，面向全体员工开展 PPT 技能分享，围绕内容梳理、版式优化与 AI 辅助制作等环节，帮助员工提升演示文稿制作效率与表达质量，获得广泛认可，并被应用于日常工作。推动实操经验向实际应用转化，助力团队设计效率与业务响应能力提升。',
    resultLayout: 'cards',
    resultDetails: [
      { icon: 'workflow', label: 'ORGANIZATION RESULT', copy: '沉淀覆盖 UI、演示、视频、海报 <b>4 类设计场景</b>的 AI 实操流程与工具优化方案，形成可复用实践参考；推动 UI 设计效率提升至原来的 <b>3 倍</b>；组织专题培训与技能分享，累计参训 <b>500+</b> 人，收获团队认可，带动全员围绕 Codex 交流研讨，促进方法经验在团队沉淀共享。' },
      { icon: 'management', label: 'ORGANIZATION REVIEW', copy: '面向全员开展 PPT 技能分享，聚焦内容梳理、版式优化与 AI 辅助制作，提升演示文稿质量；PPT 制作效率提升至原来的 <b>8 倍</b>，推动经验落地，提升团队设计产出与业务响应效率。' }
    ],
    media: [
      { src: './assets/org-ai-cover.png', title: 'AI 赋能设计 · 四类应用场景' },
      { src: './assets/org-ai-workflow.png', title: 'AI 实操流程 · 整体流程总览' },
      { src: './assets/org-gpt-eval.png', title: '赋能 UI 设计 · 工具实操手册' },
      { type: 'image', src: './assets/additional-materials/org-ai-share-feedback.png', title: 'AI 赋能设计 · 分享评价' },
      { type: 'image', src: './assets/additional-materials/org-ai-share-guide.png', title: 'AI 赋能设计 · GPT Plus 使用分享' },
      { type: 'image', src: './assets/org-ai-tech-share-521.png', title: 'AI 赋能设计 · 鸿鹄 AI 技术分享会参会记录' },
      { type: 'link', href: 'https://tcl-eaglelab.feishu.cn/wiki/Jfygw7dCviHVh6kQAJXcytVKnkb?from=from_copylink', title: 'AI 赋能设计资料' }
    ]
  },
  {
    no: '02',
    title: 'GPT 生图模型测评\n及优化方案输出',
    standard: '组织贡献 · 模型评估与能力建设',
    time: '2026.06',
    capability: [
      { title: '模型评测与问题分析', copy: '后续将深度测评 5 个 AI 生图模型，从画面质量、文字还原、指令遵循、风格表现及场景适配等维度形成评估结论与优化建议，为平台能力优化与后续设计应用提供依据。' },
      { title: '设计资产与结论沉淀', copy: '将测试记录、对比结论与优化建议整理为可查阅的评测资料，为后续模型选择与方案优化提供参考。' },
      { title: '标准化与效率提升', copy: '通过评测方法和结论共享建立共同判断依据，降低重复验证成本，支持团队更高效地应用 AI 工具。' }
    ],
    icon: 'diagnostic',
    summary: '针对 AI 生图模型在设计场景中的画质与文字还原问题，通过实测评估与问题分析，探索更具参考价值的优化方案。',
    s: 'AI 生图模型在设计场景中的应用持续拓展，但生成图像的画质稳定性与文字还原效果仍存在不足，团队需要可靠的实测判断作为工具选择与优化参考。',
    t: '负责 GPT 生图模型的实测评估、问题分析与方案输出，建立可对比的观察维度，为平台能力优化与团队应用提供依据。',
    a: '围绕设计常用的画面、版式与文字需求设定测试任务，记录不同模型与参数组合的输出表现；聚焦画质、文字还原与可控性问题进行归因分析，整理对比结论与优化方向，并同步给相关团队。',
    r: '完成 GPT 生图模型的实测评估与问题归纳，输出画质优化方案，探索提升图像文字还原效果的模型方向；通过专题分享推动评测经验交流，参会人数达 500+。后续将深度测评 5 个 AI 生图模型，从画面质量、文字还原、指令遵循、风格表现及场景适配等维度开展对比分析，形成可参考的评估结论与优化建议，为平台能力优化及后续设计应用提供依据。',
    resultLayout: 'cards',
    resultDetails: [
      { icon: 'diagnostic', label: 'ORGANIZATION RESULT', copy: '完成 GPT 生图模型的实测评估与问题归纳，输出画质优化方案，探索提升图像文字还原效果的模型方向；通过专题分享推动评测经验交流，参会人数达 <b>500+</b>。' },
      { icon: 'workflow', label: 'ORGANIZATION REVIEW', copy: '后续将深度测评 <b>5 个 AI 生图模型</b>，从画面质量、文字还原、指令遵循、风格表现及场景适配等维度形成评估结论与优化建议，为平台能力优化与后续设计应用提供依据。' }
    ],
    media: [
      { src: './assets/org-gpt-eval-conclusion.png', title: 'GPT Image2 · UI 设计实操与评估资料' },
      { type: 'image', src: './assets/additional-materials/org-gpt-eval-feedback.jpg', title: 'GPT 生图模型测评 · 测评反馈' },
      { type: 'image', src: './assets/org-gpt-tech-share-520.png', title: 'GPT 生图模型测评 · 鸿鹄 AI 技术分享会参会记录' },
      { type: 'link', href: 'https://tcl-eaglelab.feishu.cn/wiki/S4ozwzBswisjCekwaSXcdHYunXe?from=from_copylink', title: 'GPT 生图模型测评资料 01' },
      { type: 'link', href: 'https://tcl-eaglelab.feishu.cn/wiki/PJVywojiiibDkNkjjCCcd1THngh?from=from_copylink', title: 'GPT 生图模型测评资料 02' }
    ]
  },
  {
    no: '03',
    title: 'TV 多角色 UI 产品 AI 功能短片制作',
    standard: '组织贡献 · 设计创新探索与应用',
    time: '2026.05',
    capability: [
      { title: 'AI 业务应用', copy: '围绕 TV 多角色 UI 产品功能短片，结合 AI 工具完成脚本、镜头与画面生产，验证 AI 在产品宣传物料场景中的应用。' },
      { title: '知识沉淀与共享', copy: '沉淀短片制作流程与可复用方法，为后续设计创新与 AI 视频生产提供实践参考。' }
    ],
    icon: 'ai',
    summary: '围绕 TV 多角色 UI 产品功能短片制作，探索 AI 视频生成技术，输出匹配产品视觉调性的介绍短片。',
    s: 'TV 端多角色 UI 产品完成文档输出后，需要补充功能介绍短片用于业务汇报；项目周期短，团队缺少 AI 短片制作经验与可复用流程。',
    t: '独立负责 AI 短片制作全链路，探索 AI 视频新技术应用，输出匹配 TV 产品视觉调性、准确传递产品核心卖点的介绍短片。',
    a: '基于产品文档梳理核心卖点，完成脚本与镜头规划；在 3 天内快速调研、摸索 AI 视频生成完整工作流，测试提示词、画面生成、素材迭代与剪辑优化，解决生成画面不稳定、UI 风格不匹配等问题，迭代打磨成片。',
    r: '按期交付产品功能介绍短片，内容贴合产品定位并获得领导认可。本次实践快速掌握 AI 视频制作流程，验证 AI 视频工具在产品宣传物料场景的落地可行性；沉淀 AI 短片制作经验，锻炼新技术快速学习与创新落地能力，为后续设计创新物料产出积累可复用实践方案。',
    resultLayout: 'cards',
    resultDetails: [
      { icon: 'workflow', label: 'ORGANIZATION RESULT', copy: '按期交付 TV 多角色 UI 产品功能介绍短片，完成脚本、镜头规划、画面生成与剪辑迭代全链路制作，输出匹配产品定位的宣传物料。' },
      { icon: 'diagnostic', label: 'ORGANIZATION REVIEW', copy: '在 <b>3 天内</b>快速调研并掌握 AI 视频生成工作流，针对画面稳定性、UI 风格匹配与素材迭代问题持续优化，沉淀可复用的 AI 短片制作方法。' }
    ],
    media: [
      { type: 'image', src: './assets/additional-materials/org-tv-ai-feedback.png', title: 'AI 短片制作 · 项目反馈' },
      { type: 'link', href: 'https://tcl-eaglelab.feishu.cn/wiki/BrHowPFeri1uemkk4EjcfSBTnag?from=from_copylink', title: 'AI 视频制作 · 深度思考' },
      { type: 'link', href: 'https://tcl-eaglelab.feishu.cn/wiki/XRnOwskHQipYSdkKbvqcY98mns7?from=from_copylink', title: 'AI 视频制作 · 视频制作资产库' }
    ]
  },
  {
    no: '04',
    title: '酒店智能化素材工坊\nAI 应用与效率提升',
    standard: '组织贡献 · AI 应用与工具化落地',
    time: '2024.01 — 至今',
    capability: [
      { title: 'AI 应用与场景探索', copy: '能够将 AI 能力嵌入酒店素材制作的真实流程，围绕高频需求验证稳定且可用的解决方案。' },
      { title: '工具化方案落地', copy: '把图片、视频、运营模板、AI 海报与自动成片等需求串联为工具化流程，并完成原型与 Demo 验证。' },
      { title: '方法沉淀与效率提升', copy: '通过标准化处理路径减少重复制作和人工调整，将个人探索沉淀为可复用的团队工作方式。' }
    ],
    icon: 'workflow',
    summary: '将图片、视频、运营模板、AI 海报与自动成片等高频需求串联为工具化流程，探索 AI 在酒店素材制作中的稳定应用。',
    s: '酒店开机素材与运营内容存在制作频次高、格式多样、重复处理成本高的问题，需要通过工具化能力提升产出效率与交付稳定性。',
    t: '负责创新设计与 AI 应用探索，统筹素材工坊的功能方案、原型与 Demo，推动 AI 应用从单点尝试沉淀为可使用的工具流程。',
    a: '围绕图片、视频、运营模板、AI 海报与自动成片等场景梳理处理路径；运用 AI 完成素材工坊、原型及 Demo，并联动技术支持验证高频任务的可用性与效率。',
    r: '完成酒店智能化素材工坊交付并投入技术支持日常使用，覆盖 10+ 名技术支持及设计人员、7 类高频素材处理场景，累计支持 500+ 次素材生成或处理；通过工具化、标准化处理，将单次处理平均耗时由 30 分钟缩短至 3 分钟，效率提升 90%，降低重复性工作的人力投入。',
    resultLayout: 'cards',
    resultDetails: [
      { icon: 'workflow', label: 'ORGANIZATION RESULT', copy: '完成素材工坊交付并投入技术支持日常使用，覆盖 <b>10+ 名技术支持及设计人员</b>、<b>7 类高频素材处理场景</b>，累计支持 <b>500+ 次素材生成或处理</b>。' },
      { icon: 'management', label: 'ORGANIZATION REVIEW', copy: '通过工具化、标准化处理，将单次处理平均耗时由 <b>30 分钟缩短至 3 分钟</b>，效率提升 <b>90%</b>；降低重复性工作的人力投入，释放时间用于复杂问题处理与核心设计任务。' }
    ],
    media: [
      { type: 'image', src: './assets/project2-cover.jpg', title: '酒店智能化素材工坊 · AI 应用场景' },
      { type: 'image', src: './assets/project2-framework.png', title: '素材工坊方法框架' },
      { type: 'video', src: './assets/project2-demo-web.mp4', title: '素材工坊功能演示' },
      { type: 'image', src: './assets/additional-materials/org-workshop-feedback.png', title: '酒店素材工坊 · 项目反馈' },
      { id: 'org-workshop-project-link', type: 'link', href: 'https://tcl-eaglelab.feishu.cn/wiki/E2TXwfIHbii3bkkNHqhcf2W4njV?from=from_copylink', title: '酒店智能化素材工坊项目资料' }
    ]
  }
];

const params = new URLSearchParams(window.location.search);
const caseNo = params.get('case') || '01';
const item = organizationCases.find((organizationCase) => organizationCase.no === caseNo) || organizationCases[0];
const index = organizationCases.findIndex((organizationCase) => organizationCase.no === item.no);

document.title = `${item.title.replace('\n', ' · ')} · 设计晋升报告`;
document.querySelector('#organization-breadcrumb-case').textContent = `CASE / ${item.no}`;
document.querySelector('#organization-number').textContent = item.no;
document.querySelector('#organization-hero-icon').className = 'project-hero-icon icon-' + item.icon;
document.querySelector('#organization-title').innerHTML = item.title.replace('\n', '<br />');
document.querySelector('#organization-standard').textContent = item.standard;
document.querySelector('#organization-summary').textContent = item.summary;
document.querySelector('#organization-time').textContent = item.time;
const organizationCapability = document.querySelector('#organization-capability');
organizationCapability.classList.toggle('is-two-row', item.capability.length === 2);
organizationCapability.innerHTML = item.capability.map((detail, detailIndex) => [
  '<article class="project-capability-detail">',
  '<span>' + String(detailIndex + 1).padStart(2, '0') + ' / CAPABILITY</span>',
  '<p><b>' + detail.title + '</b>：' + detail.copy + '</p>',
  '</article>'
].join('')).join('');
document.querySelector('#organization-contribution').textContent = item.t;

const starCards = [
  ['S', '背景', item.s],
  ['T', '角色与职责', item.t],
  ['A', '关键行动', item.a]
];
document.querySelector('#organization-star-cards').innerHTML = starCards.map(([letter, title, copy]) => `
  <article class="star-card star-card-${letter.toLowerCase()}">
    <div class="star-card-topline"><span class="star-card-symbol" aria-hidden="true">${letter}</span><span class="star-card-code">STAR / ${letter}</span></div>
    <div><span class="star-card-label">${letter} / ${title}</span><h3>${title}</h3><p>${copy}</p></div>
    <span class="star-card-link">VIEW EVIDENCE <b>↗</b></span>
  </article>
`).join('');

const gallery = document.querySelector('#organization-gallery');
const organizationResultCopy = document.querySelector('#organization-result-copy');
const organizationGalleryResult = document.querySelector('#organization-gallery-result');
organizationGalleryResult.classList.toggle('is-card-layout', item.resultLayout === 'cards');
organizationResultCopy.innerHTML = item.resultDetails
  ? item.resultDetails.map((detail, detailIndex) => `
    <article class="project-result-detail project-result-detail-card">
      <div class="project-result-detail-marker" aria-label="${detail.label}">
        <i class="project-result-detail-icon icon-${detail.icon || 'workflow'}" aria-hidden="true"></i>
        <b>${String(detailIndex + 1).padStart(2, '0')}</b>
        <small>${detail.label}</small>
      </div>
      <p>${detail.copy}</p>
    </article>
  `).join('')
  : `<p>${item.r}</p>`;

const dialog = document.querySelector('#organization-media-dialog');
const dialogMedia = dialog.querySelector('.dialog-media');
const dialogCaption = dialog.querySelector('.dialog-caption');
const openOrganizationMedia = ({ type, src, title }) => {
  const isVideo = type === 'video';
  dialogMedia.innerHTML = isVideo
    ? '<video src="' + src + '" controls autoplay playsinline></video>'
    : '<img class="dialog-zoomable" src="' + src + '" alt="' + title + '" title="点击继续放大" />';
  dialogCaption.textContent = isVideo ? title : title + ' · 点击图片可继续放大';
  dialog.showModal();
  dialogMedia.scrollTo({ top: 0, left: 0 });
};

window.PromotionMaterialManager({
  scope: 'organization',
  caseNo: item.no,
  defaults: item.media,
  gallery,
  section: document.querySelector('.project-gallery'),
  onPreview: openOrganizationMedia
});
dialogMedia.addEventListener('click', (event) => {
  if (event.target.matches('.dialog-zoomable')) event.target.classList.toggle('is-zoomed');
});
const closeDialog = () => dialog.close();
document.querySelector('#organization-media-close').addEventListener('click', closeDialog);
dialog.addEventListener('click', (event) => { if (event.target === dialog) closeDialog(); });

const previous = organizationCases[(index - 1 + organizationCases.length) % organizationCases.length];
const next = organizationCases[(index + 1) % organizationCases.length];
const previousLink = document.querySelector('#organization-prev');
const nextLink = document.querySelector('#organization-next');
previousLink.href = `./organization.html?case=${previous.no}`;
nextLink.href = `./organization.html?case=${next.no}`;
previousLink.querySelector('strong').textContent = previous.title.replace('\n', ' · ');
nextLink.querySelector('strong').textContent = next.title.replace('\n', ' · ');

const progressBar = document.querySelector('#progress-bar');
const updateProgress = () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.width = `${max ? (window.scrollY / max) * 100 : 0}%`;
};
window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();
