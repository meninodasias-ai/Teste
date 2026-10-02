/**
 * Portal AcessiTech - JavaScript Puro (Vanilla JS)
 * Totalmente Acessível, Sem dependências externas de framework.
 */

// 1. Dados Iniciais de Notícias por Limitação Sensorial
const INITIAL_ARTICLES = [
  {
    id: 'art-visual-1',
    title: 'Monitores Braille Multilinha revolucionam o aprendizado de matemática e gráficos para estudantes cegos',
    summary: 'Nova geração de displays táteis dinâmicos permite sentir não apenas textos em Braille, mas curvas de funções, diagramas anatômicos e mapas de relevo de forma instantânea.',
    content: [
      'Durante décadas, os usuários de telas Braille eletrônicas estiveram limitados a uma única linha de 40 ou 80 caracteres. Essa limitação tornava o aprendizado de matemática e gráficos uma tarefa lenta dependente de papel especial.',
      'A chegada de dispositivos multilinhas baseados em micropistões eletromagnéticos rompe esse paradigma. O dispositivo atua como uma tela de toque em relevo dinâmico de 300 a 2.400 pontos táteis.',
      'Em sala de aula, o professor desenha um triângulo ou um gráfico no tablet e, em milissegundos, os pinos se elevam sob as pontas dos dedos do aluno cego para exploração autônoma.',
      'A tecnologia acompanha algoritmos de simplificação tátil para garantir ergonomia conforme as diretrizes do Conselho Brasileiro do Braille.'
    ],
    category: 'visual',
    author: 'Mariana Drummond (Tiflotecnologia)',
    publishedAt: '2026-03-28',
    readTime: '5 min',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80',
    imageAlt: 'Mãos de uma pessoa explorando um display tátil eletrônico com pinos elevados formando padrões táteis de relevo.',
    audioDescription: 'Fotografia com foco em duas mãos adultas tocando delicadamente uma matriz retangular de pequenos pinos plásticos que se elevam dinamicamente em diferentes alturas para formar linhas e caracteres táteis.',
    wcag: 'AAA',
    availability: 'Comercial',
    tags: ['Braille', 'Educação Inclusiva', 'Matemática Acessível']
  },
  {
    id: 'art-auditiva-1',
    title: 'Óculos com legendas inteligentes em realidade aumentada auxiliam conversas de pessoas surdas',
    summary: 'Dispositivos vestíveis leves capturam a fala de interlocutores e projetam legendas em tempo real flutuando no campo de visão, reduzindo a fadiga de leitura labial.',
    content: [
      'A leitura labial contínua exige um esforço cognitivo extenuante para indivíduos com deficiência auditiva, especialmente em reuniões com múltiplos participantes ou ambientes ruidosos.',
      'Novos óculos inteligentes de peso reduzido integram microfones direcionais de alta sensibilidade com cancelamento de ruído baseado em aprendizado de máquina.',
      'O sistema identifica quem está falando e projeta a transcrição em português com alto contraste logo abaixo do rosto da pessoa que fala, mantendo o contato visual natural.',
      'A tecnologia funciona offline em smartphones pareados, preservando a privacidade das conversas sem necessidade de conexão contínua com a nuvem.'
    ],
    category: 'auditiva',
    author: 'Dr. Lucas Viana (Linguística & IA)',
    publishedAt: '2026-03-25',
    readTime: '4 min',
    imageUrl: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&auto=format&fit=crop&q=80',
    imageAlt: 'Close-up de uma pessoa jovem utilizando óculos leves de armação preta com microvisores embutidos.',
    audioDescription: 'Foto de perfil lateral de uma pessoa usando óculos discretos de aro escuro. Na lente direita, há uma pequena indicação de projeção de texto translúcido com legendas nítidas.',
    wcag: 'AA',
    availability: 'Comercial',
    tags: ['Legendas em Tempo Real', 'Surdez', 'Acessibilidade Auditiva']
  },
  {
    id: 'art-motora-1',
    title: 'Rastreamento ocular de alta precisão permite autonomia total em computadores para pessoas com ELA',
    summary: 'Câmeras infravermelhas com calibração adaptativa viabilizam digitação veloz, controle de domótica e trabalho profissional apenas com o movimento das pupilas.',
    content: [
      'Para pessoas com Esclerose Lateral Amiotrófica (ELA) ou tetraplegia severa, o controle dos músculos oculares é a via motora mais preservada ao longo do tempo.',
      'As barras de eye tracking atuais utilizam iluminação infravermelha imperceptível e sensores biométricos de 120Hz que calculam com exatidão onde o usuário está fixando o olhar.',
      'Com recursos de clique por fixação (dwell click) e teclados com predição contextual, a velocidade de digitação de usuários avançados ultrapassa 35 palavras por minuto.',
      'Além de navegar na web e programar softwares, os usuários podem comandar luzes, climatização e televisores por protocolos de casa inteligente.'
    ],
    category: 'motora',
    author: 'Renata Albuquerque (Terapeuta Ocupacional)',
    publishedAt: '2026-03-20',
    readTime: '6 min',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=80',
    imageAlt: 'Monitor de computador exibindo um teclado virtual na tela e uma barra de sensores infravermelhos na base.',
    audioDescription: 'Visão frontal de um ambiente de trabalho acessível: monitor exibindo interface de teclado com teclas grandes iluminadas conforme o olhar do operador se fixa em cada letra.',
    wcag: 'AAA',
    availability: 'SUS / Público',
    tags: ['Eye Tracking', 'ELA', 'Controle Motor', 'Autonomia']
  },
  {
    id: 'art-cognitiva-1',
    title: 'Assistentes de Linguagem Simples com IA transformam editais e serviços em textos compreensíveis',
    summary: 'Ferramentas de tradução intralinguística convertem vocabulário rebuscado em redações claras para pessoas com deficiência intelectual, dislexia e TDAH.',
    content: [
      'A barreira cognitiva gerada pela burocracia textual afasta milhões de cidadãos do acesso pleno aos seus direitos sociais, auxílios previdenciários e serviços de saúde.',
      'Novos algoritmos especializados na norma internacional de Linguagem Simples processam documentos complexos e geram resumos organizados em tópicos objetivos de até 15 palavras na ordem direta.',
      'O sistema inclui glossários visuais interativos: ao repousar o cursor ou focar em um termo técnico, um pictograma explicativo e um áudio são apresentados.',
      'A iniciativa já está em homologação em portais de tribunais de justiça e prefeituras, garantindo inclusão sem desvirtuar o rigor jurídico dos atos públicos.'
    ],
    category: 'cognitiva',
    author: 'Prof. Cláudio Mendonça (Design Inclusivo)',
    publishedAt: '2026-03-18',
    readTime: '4 min',
    imageUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format&fit=crop&q=80',
    imageAlt: 'Pessoa lendo um tablet que exibe um texto com layout arejado, tópicos destacados e ilustrações conceituais claras.',
    audioDescription: 'Foto de uma mesa de estudos com iluminação suave, exibindo uma tela de leitura com parágrafos curtos, espaçamento generoso entre linhas e ícones explicativos.',
    wcag: 'AAA',
    availability: 'Open Source',
    tags: ['Linguagem Simples', 'Dislexia', 'TDAH', 'Neurodiversidade']
  },
  {
    id: 'art-fala-1',
    title: 'Preservação Vocal Digital: Clonagem ética de voz garante identidade sonora a pacientes com ELA',
    summary: 'Gravação precoce de apenas 15 minutos de leitura permite sintetizar uma voz personalizada fiel ao tom de origem para uso futuro em comunicadores e tablets.',
    content: [
      'Perder a capacidade da fala oral costuma ser um dos impactos mais dolorosos para indivíduos diagnosticados com doenças neuromusculares degenerativas.',
      'A tecnologia de Preservação Vocal (Voice Banking) agora requer apenas a leitura de sentenças foneticamente balanceadas gravadas em casa com microfones comuns.',
      'A rede neural processa a curva entonacional, o timbre e os fonemas característicos da pessoa, gerando um modelo de voz protegido para uso em Comunicação Aumentativa e Alternativa (CAA).',
      'Quando o paciente necessita utilizar um comunicador de prancha ou acionador ocular, as frases soam exatamente com a sua voz autêntica, preservando sua individualidade e laços familiares.'
    ],
    category: 'fala',
    author: 'Beatriz Fonseca (Fonoaudióloga em CAA)',
    publishedAt: '2026-03-14',
    readTime: '5 min',
    imageUrl: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&auto=format&fit=crop&q=80',
    imageAlt: 'Microfone de estúdio em suporte articulado ao lado de um tablet que exibe uma forma de onda sonora de voz humana.',
    audioDescription: 'Foto focada em um microfone profissional sobre pedestal de mesa. Em segundo plano, uma tela plana com gráficos espectrais de áudio em tons quentes.',
    wcag: 'AAA',
    availability: 'Gratuito',
    tags: ['Comunicação Alternativa', 'CAA', 'Voice Banking', 'Identidade Vocal']
  }
];

// Categorias e Nomes Amigáveis
const CATEGORIES_INFO = {
  all: 'Todas as Áreas Sensoriais',
  visual: 'Deficiência Visual e Baixa Visão',
  auditiva: 'Deficiência Auditiva e Surdez',
  motora: 'Limitação Motora e Física',
  cognitiva: 'Cognitiva e Neurodivergência',
  fala: 'Fala e Comunicação (CAA)'
};

// 2. Estado da Aplicação (com LocalStorage)
let appState = {
  articles: JSON.parse(localStorage.getItem('acessitech_articles')) || INITIAL_ARTICLES,
  savedIds: JSON.parse(localStorage.getItem('acessitech_saved')) || ['art-visual-1', 'art-fala-1'],
  userRole: localStorage.getItem('acessitech_role') || 'reader', // 'reader' ou 'admin'
  userName: localStorage.getItem('acessitech_user_name') || 'Beatriz Silva (Leitora)',
  activeCategory: 'all',
  searchQuery: '',
  showingSavedOnly: false,
  
  // Preferências de Acessibilidade
  fontSizeLevel: 1, // 0: sm (14px), 1: base (16px), 2: lg (18px), 3: xl (20px), 4: 2xl (22px)
  theme: 'default', // 'default', 'high-contrast', 'dark'
  fontDyslexia: false,
  relaxedSpacing: false,
  readingRuler: false,
  colorblindFilter: 'none',
  speechRate: 1.0
};

// 3. Motor de Narração de Voz (Web Speech API)
const TTS = {
  synth: window.speechSynthesis,
  isSpeaking: false,

  speak(text) {
    if (!this.synth) return;
    this.stop();
    if (!text || !text.trim()) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'pt-BR';
    utterance.rate = appState.speechRate;

    // Buscar voz em português se disponível
    const voices = this.synth.getVoices();
    const ptVoice = voices.find(v => v.lang.startsWith('pt'));
    if (ptVoice) utterance.voice = ptVoice;

    utterance.onstart = () => {
      this.isSpeaking = true;
      document.getElementById('btn-stop-speech').style.display = 'inline-flex';
    };

    utterance.onend = utterance.onerror = () => {
      this.isSpeaking = false;
      document.getElementById('btn-stop-speech').style.display = 'none';
    };

    this.synth.speak(utterance);
  },

  stop() {
    if (this.synth) {
      this.synth.cancel();
      this.isSpeaking = false;
      document.getElementById('btn-stop-speech').style.display = 'none';
    }
  }
};

// Salvar Estado
function saveState() {
  localStorage.setItem('acessitech_articles', JSON.stringify(appState.articles));
  localStorage.setItem('acessitech_saved', JSON.stringify(appState.savedIds));
  localStorage.setItem('acessitech_role', appState.userRole);
  localStorage.setItem('acessitech_user_name', appState.userName);
}

// 4. Renderização dos Artigos na Tela
function renderArticles() {
  const container = document.getElementById('articles-container');
  const countEl = document.getElementById('filtered-count');
  
  // Filtragem
  const filtered = appState.articles.filter(art => {
    if (appState.activeCategory !== 'all' && art.category !== appState.activeCategory) return false;
    if (appState.showingSavedOnly && !appState.savedIds.includes(art.id)) return false;
    if (appState.searchQuery) {
      const q = appState.searchQuery.toLowerCase();
      const matchTitle = art.title.toLowerCase().includes(q);
      const matchSummary = art.summary.toLowerCase().includes(q);
      const matchTag = art.tags.some(t => t.toLowerCase().includes(q));
      return matchTitle || matchSummary || matchTag;
    }
    return true;
  });

  countEl.textContent = `${filtered.length} ${filtered.length === 1 ? 'matéria encontrada' : 'matérias encontradas'}`;
  
  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; background: var(--bg-surface); border-radius: var(--radius-md); border: 1px solid var(--border-color);">
        <p style="font-weight: 700; font-size: 1.1rem;">Nenhuma matéria encontrada com os filtros atuais.</p>
        <p style="color: var(--text-muted); font-size: 0.85rem; margin-top: 0.5rem;">Tente buscar por outro termo ou selecione "Todas as Áreas".</p>
        <button class="btn btn-primary" style="margin-top: 1rem;" onclick="resetFilters()">Limpar Filtros</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(art => {
    const isSaved = appState.savedIds.includes(art.id);
    const categoryName = CATEGORIES_INFO[art.category] || art.category;

    return `
      <article class="article-card" aria-labelledby="title-${art.id}">
        <div>
          <!-- Metadados Limpos sem Cápsulas de Pílula -->
          <div class="card-meta">
            <span class="meta-category">${categoryName.split(' e ')[0]}</span>
            <span class="meta-dot">·</span>
            <span>${art.readTime} de leitura</span>
            <span class="meta-dot">·</span>
            <span>WCAG ${art.wcag}</span>
            <span class="meta-dot">·</span>
            <span>${art.availability}</span>
          </div>

          <!-- Imagem com Audiodescrição -->
          <div class="card-image-wrap">
            <img src="${art.imageUrl}" alt="${art.imageAlt}" loading="lazy" />
            <button 
              class="btn-audio-desc" 
              onclick="event.stopPropagation(); TTS.speak('Audiodescrição da imagem: ${art.audioDescription.replace(/'/g, "\\'")}')"
              title="Ouvir audiodescrição da imagem"
              aria-label="Ouvir audiodescrição da imagem em voz alta"
            >
              🎧 Audiodescrição
            </button>
          </div>

          <!-- Título -->
          <h3 id="title-${art.id}" class="article-title" onclick="openArticleModal('${art.id}')">
            ${art.title}
          </h3>

          <!-- Resumo -->
          <p class="article-summary">${art.summary}</p>

          <!-- Tags -->
          <div class="card-tags">
            ${art.tags.map(t => `<span>#${t}</span>`).join(' ')}
          </div>
        </div>

        <!-- Ações do Card -->
        <div class="card-footer">
          <button 
            class="btn btn-secondary" 
            onclick="TTS.speak('${art.title.replace(/'/g, "\\'")}. ${art.summary.replace(/'/g, "\\'")}')"
            aria-label="Ouvir resumo em voz alta"
          >
            🔊 Ouvir Resumo
          </button>

          <div style="display: flex; gap: 0.35rem; align-items: center;">
            <button 
              class="btn ${isSaved ? 'btn-primary' : 'btn-secondary'}" 
              onclick="toggleSaveArticle('${art.id}')"
              title="${isSaved ? 'Remover dos salvos' : 'Salvar artigo'}"
              aria-pressed="${isSaved}"
            >
              ${isSaved ? '★ Salvo' : '☆ Salvar'}
            </button>

            <button class="btn btn-primary" onclick="openArticleModal('${art.id}')">
              Ler Matéria →
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');

  updateSavedCount();
  updateCategoryCounts();
}

// 5. Atualizar Contadores
function updateSavedCount() {
  document.getElementById('saved-count-badge').textContent = appState.savedIds.length;
}

function updateCategoryCounts() {
  const counts = { all: appState.articles.length, visual: 0, auditiva: 0, motora: 0, cognitiva: 0, fala: 0 };
  appState.articles.forEach(a => {
    if (counts[a.category] !== undefined) counts[a.category]++;
  });

  document.querySelectorAll('[data-cat-badge]').forEach(el => {
    const cat = el.getAttribute('data-cat-badge');
    if (counts[cat] !== undefined) el.textContent = counts[cat];
  });
}

// 6. Manipulação de Filtros e Categorias
function selectCategory(category) {
  appState.activeCategory = category;
  
  document.querySelectorAll('.category-tab').forEach(tab => {
    const isCurrent = tab.getAttribute('data-cat') === category;
    tab.classList.toggle('active', isCurrent);
    tab.setAttribute('aria-selected', isCurrent ? 'true' : 'false');
  });

  const banner = document.getElementById('category-banner');
  if (category !== 'all') {
    banner.classList.add('active');
    banner.innerHTML = `<strong>Área selecionada:</strong> ${CATEGORIES_INFO[category]}. Notícias filtradas para este perfil sensorial.`;
  } else {
    banner.classList.remove('active');
  }

  renderArticles();
}

function resetFilters() {
  appState.activeCategory = 'all';
  appState.searchQuery = '';
  appState.showingSavedOnly = false;
  document.getElementById('search-input').value = '';
  document.getElementById('btn-filter-saved').classList.remove('active');
  selectCategory('all');
}

function toggleSaveArticle(id) {
  if (appState.savedIds.includes(id)) {
    appState.savedIds = appState.savedIds.filter(item => item !== id);
  } else {
    appState.savedIds.push(id);
  }
  saveState();
  renderArticles();
}

// 7. Modais
function openArticleModal(id) {
  const art = appState.articles.find(a => a.id === id);
  if (!art) return;

  const modal = document.getElementById('modal-article');
  document.getElementById('modal-article-title').textContent = art.title;
  document.getElementById('modal-article-meta').innerHTML = `
    <strong>${CATEGORIES_INFO[art.category] || art.category}</strong> · 
    Publicado em ${art.publishedAt} · 
    Por ${art.author} · 
    Padrão WCAG ${art.wcag} · 
    Acesso ${art.availability}
  `;
  document.getElementById('modal-article-lead').textContent = art.summary;
  
  const imgWrap = document.getElementById('modal-article-image-wrap');
  imgWrap.innerHTML = `
    <img src="${art.imageUrl}" alt="${art.imageAlt}" style="width: 100%; max-height: 360px; object-fit: cover; border-radius: var(--radius-sm);" />
    <div style="background: var(--bg-surface-alt); padding: 0.75rem; border-top: 1px solid var(--border-light); font-size: 0.8rem; font-style: italic;">
      <strong>Audiodescrição:</strong> ${art.audioDescription}
      <button class="btn btn-secondary" style="margin-left: 0.5rem; font-size: 0.75rem;" onclick="TTS.speak('Audiodescrição: ${art.audioDescription.replace(/'/g, "\\'")}')">
        🔊 Ouvir Audiodescrição
      </button>
    </div>
  `;

  document.getElementById('modal-article-body').innerHTML = art.content.map(p => `<p style="margin-bottom: 1rem;">${p}</p>`).join('');

  document.getElementById('btn-modal-speak-all').onclick = () => {
    TTS.speak(`${art.title}. ${art.summary}. ${art.content.join(' ')}`);
  };

  modal.showModal();
}

function closeModal(modalId) {
  TTS.stop();
  const modal = document.getElementById(modalId);
  if (modal) modal.close();
}

// 8. Autenticação e Perfis (Leitor vs Administrador)
function updateAuthUI() {
  const userBtn = document.getElementById('btn-user-role');
  const adminBtn = document.getElementById('btn-open-admin');
  
  userBtn.innerHTML = `
    <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: ${appState.userRole === 'admin' ? '#10b981' : '#3b82f6'};"></span>
    <span>${appState.userName}</span>
  `;

  if (appState.userRole === 'admin') {
    adminBtn.style.display = 'inline-flex';
  } else {
    adminBtn.style.display = 'none';
  }
}

function switchUserRole(role, name) {
  appState.userRole = role;
  appState.userName = name;
  saveState();
  updateAuthUI();
  closeModal('modal-auth');
  renderArticles();
}

// 9. Operações Administrativas (CRUD de Notícias)
function renderAdminTable() {
  const tbody = document.getElementById('admin-articles-tbody');
  tbody.innerHTML = appState.articles.map(art => `
    <tr style="border-bottom: 1px solid var(--border-light);">
      <td style="padding: 0.65rem; font-weight: 600;">${art.title}</td>
      <td style="padding: 0.65rem; text-transform: capitalize;">${art.category}</td>
      <td style="padding: 0.65rem;">${art.availability}</td>
      <td style="padding: 0.65rem;">${art.publishedAt}</td>
      <td style="padding: 0.65rem; text-align: right;">
        <button class="btn btn-secondary" style="padding: 0.25rem 0.5rem; font-size: 0.75rem;" onclick="deleteArticle('${art.id}')">Excluir</button>
      </td>
    </tr>
  `).join('');
}

function deleteArticle(id) {
  if (confirm('Tem certeza que deseja excluir esta notícia?')) {
    appState.articles = appState.articles.filter(a => a.id !== id);
    saveState();
    renderAdminTable();
    renderArticles();
  }
}

function handlePublishArticle(e) {
  e.preventDefault();
  
  const title = document.getElementById('new-art-title').value.trim();
  const category = document.getElementById('new-art-category').value;
  const summary = document.getElementById('new-art-summary').value.trim();
  const contentRaw = document.getElementById('new-art-content').value.trim();
  const imageUrl = document.getElementById('new-art-img').value.trim() || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80';
  const imageAlt = document.getElementById('new-art-alt').value.trim();
  const audioDescription = document.getElementById('new-art-audiodesc').value.trim();
  const wcag = document.getElementById('new-art-wcag').value;
  const availability = document.getElementById('new-art-avail').value;
  const tagsRaw = document.getElementById('new-art-tags').value.trim();

  if (!title || !summary || !contentRaw || !imageAlt || !audioDescription) {
    alert('Por favor, preencha todos os campos obrigatórios (incluindo texto alternativo e audiodescrição para acessibilidade).');
    return;
  }

  const newArticle = {
    id: `art-${category}-${Date.now()}`,
    title,
    summary,
    content: contentRaw.split('\n\n').filter(p => p.trim().length > 0),
    category,
    author: `${appState.userName} (Editorial)`,
    publishedAt: new Date().toISOString().split('T')[0],
    readTime: '4 min',
    imageUrl,
    imageAlt,
    audioDescription,
    wcag,
    availability,
    tags: tagsRaw.split(',').map(t => t.trim()).filter(Boolean)
  };

  appState.articles.unshift(newArticle);
  saveState();
  renderArticles();
  renderAdminTable();
  e.target.reset();
  alert('Notícia publicada com sucesso no Portal AcessiTech!');
}

function exportArticlesJson() {
  const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(appState.articles, null, 2));
  const a = document.createElement('a');
  a.setAttribute('href', dataStr);
  a.setAttribute('download', `acessitech-noticias-${new Date().toISOString().split('T')[0]}.json`);
  document.body.appendChild(a);
  a.click();
  a.remove();
}

// 10. Controles da Barra de Acessibilidade
function updateA11yStyles() {
  const body = document.body;
  
  // Font Size
  const fontSizes = ['14px', '16px', '18px', '20px', '22px'];
  document.documentElement.style.setProperty('--base-font-size', fontSizes[appState.fontSizeLevel]);
  document.getElementById('a11y-font-indicator').textContent = ['A-', 'A', 'A+', 'A++', 'A+++'][appState.fontSizeLevel];

  // Theme
  body.classList.remove('theme-high-contrast', 'theme-dark');
  if (appState.theme === 'high-contrast') body.classList.add('theme-high-contrast');
  else if (appState.theme === 'dark') body.classList.add('theme-dark');

  // Dyslexia Font
  body.classList.toggle('font-dyslexia', appState.fontDyslexia);
  document.getElementById('btn-a11y-dyslexia').classList.toggle('active', appState.fontDyslexia);

  // Relaxed Spacing
  body.classList.toggle('spacing-relaxed', appState.relaxedSpacing);
  document.getElementById('btn-a11y-spacing').classList.toggle('active', appState.relaxedSpacing);

  // Reading Ruler
  const ruler = document.getElementById('reading-ruler');
  ruler.classList.toggle('active', appState.readingRuler);
  document.getElementById('btn-a11y-ruler').classList.toggle('active', appState.readingRuler);

  // Daltonism Filter
  body.classList.remove('filter-protanopia', 'filter-deuteranopia', 'filter-tritanopia', 'filter-achromatopsia');
  if (appState.colorblindFilter !== 'none') {
    body.classList.add(`filter-${appState.colorblindFilter}`);
  }
  document.getElementById('select-daltonismo').value = appState.colorblindFilter;
}

// Inicialização de Eventos
window.addEventListener('DOMContentLoaded', () => {
  renderArticles();
  updateAuthUI();
  updateA11yStyles();

  // Busca em tempo real
  const searchInput = document.getElementById('search-input');
  searchInput.addEventListener('input', (e) => {
    appState.searchQuery = e.target.value.trim();
    renderArticles();
  });

  // Alternar apenas favoritos
  const btnSaved = document.getElementById('btn-filter-saved');
  btnSaved.addEventListener('click', () => {
    appState.showingSavedOnly = !appState.showingSavedOnly;
    btnSaved.classList.toggle('active', appState.showingSavedOnly);
    renderArticles();
  });

  // Botões de Acessibilidade
  document.getElementById('btn-font-dec').addEventListener('click', () => {
    if (appState.fontSizeLevel > 0) {
      appState.fontSizeLevel--;
      updateA11yStyles();
    }
  });

  document.getElementById('btn-font-inc').addEventListener('click', () => {
    if (appState.fontSizeLevel < 4) {
      appState.fontSizeLevel++;
      updateA11yStyles();
    }
  });

  document.getElementById('btn-a11y-contrast').addEventListener('click', () => {
    if (appState.theme === 'default') appState.theme = 'high-contrast';
    else if (appState.theme === 'high-contrast') appState.theme = 'dark';
    else appState.theme = 'default';
    updateA11yStyles();
  });

  document.getElementById('btn-a11y-dyslexia').addEventListener('click', () => {
    appState.fontDyslexia = !appState.fontDyslexia;
    updateA11yStyles();
  });

  document.getElementById('btn-a11y-ruler').addEventListener('click', () => {
    appState.readingRuler = !appState.readingRuler;
    updateA11yStyles();
  });

  document.getElementById('btn-a11y-spacing').addEventListener('click', () => {
    appState.relaxedSpacing = !appState.relaxedSpacing;
    updateA11yStyles();
  });

  document.getElementById('select-daltonismo').addEventListener('change', (e) => {
    appState.colorblindFilter = e.target.value;
    updateA11yStyles();
  });

  document.getElementById('speech-rate-range').addEventListener('input', (e) => {
    appState.speechRate = parseFloat(e.target.value);
    document.getElementById('speech-rate-val').textContent = `${appState.speechRate}x`;
  });

  document.getElementById('btn-toggle-a11y-drawer').addEventListener('click', () => {
    const drawer = document.getElementById('a11y-drawer');
    drawer.classList.toggle('open');
  });

  document.getElementById('btn-reset-a11y').addEventListener('click', () => {
    appState.fontSizeLevel = 1;
    appState.theme = 'default';
    appState.fontDyslexia = false;
    appState.relaxedSpacing = false;
    appState.readingRuler = false;
    appState.colorblindFilter = 'none';
    appState.speechRate = 1.0;
    TTS.stop();
    updateA11yStyles();
  });

  document.getElementById('btn-stop-speech').addEventListener('click', () => {
    TTS.stop();
  });

  // Movimento da Régua de Leitura
  window.addEventListener('mousemove', (e) => {
    if (appState.readingRuler) {
      const ruler = document.getElementById('reading-ruler');
      ruler.style.top = `${e.clientY}px`;
    }
  });

  // Formulário de Nova Notícia no Admin
  const formNewArticle = document.getElementById('form-new-article');
  if (formNewArticle) formNewArticle.addEventListener('submit', handlePublishArticle);

  // Teclas de Atalho (WCAG 2.1)
  window.addEventListener('keydown', (e) => {
    if (e.altKey && e.key === '1') {
      e.preventDefault();
      document.getElementById('conteudo-principal').focus();
    } else if (e.altKey && e.key === '2') {
      e.preventDefault();
      document.querySelector('.category-tab').focus();
    } else if (e.altKey && e.key === '3') {
      e.preventDefault();
      document.getElementById('barra-acessibilidade').focus();
    }
  });
});

// Tornar funções globais para chamadas nos onclick
window.selectCategory = selectCategory;
window.resetFilters = resetFilters;
window.toggleSaveArticle = toggleSaveArticle;
window.openArticleModal = openArticleModal;
window.closeModal = closeModal;
window.switchUserRole = switchUserRole;
window.deleteArticle = deleteArticle;
window.exportArticlesJson = exportArticlesJson;
window.renderAdminTable = renderAdminTable;
window.TTS = TTS;
