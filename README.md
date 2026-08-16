# ⏱ Relógio Digital Material Design

> Relógio digital online com design Material Design, modo escuro/claro, saudação inteligente e exibição em tempo real.

---

## 🌟 Funcionalidades

- ⏰ **Horário em tempo real** — Atualização a cada segundo
- 📅 **Data completa** — Dia da semana, dia, mês e ano
- 👋 **Saudação inteligente** — Bom dia, Boa tarde, Boa noite
- 🌙 **Modo escuro/claro** — Alternância suave entre temas
- 🎨 **Material Design** — Interface moderna com sombras e elevação
- 📱 **100% responsivo** — Funciona em desktop, tablet e mobile

---

## 🚀 Como Usar

1. Baixe ou clone este repositório
2. Abra o arquivo `index.html` no navegador
3. Pronto! O relógio já está funcionando

```bash
# Clonando o repositório
git clone https://github.com/seu-usuario/relogio-digital.git
cd relogio-digital

# Abrindo no navegador (Linux)
xdg-open index.html

# Ou simplesmente dê duplo clique no index.html
```

> 💡 **Dica**: Para publicar online, faça upload dos arquivos em qualquer hospedagem estática (GitHub Pages, Netlify, Vercel, etc.).

---

## 📁 Estrutura do Projeto

```
Relogio-SEO/
├── index.html          # Página principal (HTML semântico + SEO)
├── style.css           # Estilos Material Design + acessibilidade
├── script.js           # Lógica do relógio e modo escuro/claro
├── robots.txt          # Instruções para crawlers
├── sitemap.xml         # Mapa do site para motores de busca
├── site.webmanifest    # Manifesto PWA (Progressive Web App)
├── CHECKLIST-SEO.md    # Documentação detalhada das otimizações SEO
└── README.md           # Este arquivo
```

---

## 🔍 Otimizações SEO Incluídas

Este projeto já vem com SEO completo pronto para indexação:

| Otimização | Status |
|-----------|--------|
| Meta tags (title, description, keywords) | ✅ |
| Open Graph (Facebook, LinkedIn) | ✅ |
| Twitter Card | ✅ |
| Schema.org JSON-LD (WebApplication + BreadcrumbList) | ✅ |
| Canonical URL + hreflang | ✅ |
| HTML semântico (header, main, article, footer) | ✅ |
| Acessibilidade ARIA (aria-live, role="timer", skip-link) | ✅ |
| Performance (preconnect, preload de fonts) | ✅ |
| Favicon + App Icons + Web Manifest | ✅ |
| robots.txt | ✅ |
| sitemap.xml | ✅ |

> 📋 Para detalhes completos, consulte o arquivo `CHECKLIST-SEO.md`.

---

## ⚠️ Configuração Necessária Antes de Publicar

Antes de colocar o site no ar, você **precisa** fazer as substituições abaixo:

### 1. Substituir a URL placeholder

Todas as ocorrências de `https://www.seudominio.com/` devem ser trocadas pela URL real do seu site.

No `index.html`, procure e substitua:
- `<link rel="canonical" href="...">`
- Tags `hreflang`
- Tags `og:url`, `og:image`
- Tags `twitter:image`
- Schema.org JSON-LD (propriedade `url`)

No `sitemap.xml`:
- Tag `<loc>`

No `site.webmanifest`:
- Propriedade `start_url`

### 2. Gerar favicon e ícones reais

O projeto inclui um favicon SVG placeholder. Para ícones reais:

1. Acesse [realfavicongenerator.net](https://realfavicongenerator.net)
2. Envie uma imagem do seu logo/ícone
3. Baixe o pacote gerado
4. Substitua os arquivos e os links no `index.html`

### 3. Criar imagem OG (Open Graph)

Para compartilhamentos bonitos em redes sociais:

- Tamanho: **1200×630px**
- Pode ser um screenshot do relógio em modo escuro
- Salve como `og-image.jpg` na raiz do site
- Atualize as tags `og:image` e `twitter:image` no HTML

### 4. Publicar com HTTPS

HTTPS é obrigatório para:
- PWA funcionar corretamente
- Melhor ranking no Google
- Segurança dos visitantes

### 5. Submeter ao Google Search Console

1. Acesse [Google Search Console](https://search.google.com/search-console)
2. Adicione seu domínio
3. Verifique a propriedade
4. Envie o `sitemap.xml`
5. Solicite indexação do `index.html`

---

## 🧰 Tecnologias Utilizadas

| Tecnologia | Uso |
|-----------|------|
| HTML5 | Estrutura semântica |
| CSS3 | Estilização Material Design |
| JavaScript | Lógica do relógio |
| Bootstrap 5.3 | Grid e utilidades |
| Google Fonts (Montserrat + Roboto Mono) | Tipografia |
| Bootstrap Icons | Ícones |
| Schema.org / JSON-LD | Dados estruturados |
| Open Graph + Twitter Cards | Compartilhamento social |

---

## 🧪 Testes Recomendados

Antes de publicar, teste em:

- [Google Rich Results Test](https://search.google.com/test/rich-results) — Valida Schema.org
- [PageSpeed Insights](https://pagespeed.web.dev/) — Performance
- [Schema Markup Validator](https://validator.schema.org/) — Dados estruturados
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) — Open Graph
- [Twitter Card Validator](https://cards-dev.twitter.com/validator) — Twitter Card
- [WAVE Accessibility](https://wave.webaim.org/) — Acessibilidade
- **Lighthouse** (Chrome DevTools > Lighthouse) — Auditoria completa

---

## 📄 Licença

Este projeto é de uso livre. Modifique e publique como desejar.

---

## 🤝 Créditos

- Otimização SEO por **OreateAI**
- Design Material inspirado no [Material Design 3](https://m3.material.io/)

---

> ⏱ Feito com ❤️ e Material Design