# Filipe Neres Fernandes - Portfólio de Softwares

[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=flat&logo=vercel)](https://meu-portfolio-eoneres.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-14.2.5-black?style=flat&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-blue?style=flat&logo=tailwindcss)](https://tailwindcss.com/)
[![Licença MIT](https://img.shields.io/badge/Licença-MIT-green)](LICENSE)

> Um portfólio moderno e interativo para apresentar projetos de software, com carrossel animado, suporte a múltiplas imagens e vídeos, modo claro/escuro e deploy automático na Vercel.

🔗 **Acesse o site ao vivo:** [https://meu-portfolio-eoneres.vercel.app](https://meu-portfolio-eoneres.vercel.app)

---

## 📌 Sobre o Projeto

Este portfólio foi desenvolvido para mostrar meus projetos de forma profissional e atraente. Ele inclui:

- **Carrossel com loop infinito e arrastável** – ideal para galerias de imagens e vídeos.
- **Suporte nativo a imagens (JPG/PNG) e vídeos (MP4)** – cada projeto pode ter múltiplas mídias.
- **Menu de abas animado** – troca suave entre projetos.
- **Tema claro/escuro** – com variáveis CSS e transição suave, garantindo legibilidade em ambos os modos.
- **Layout totalmente responsivo** – funciona em desktops, tablets e smartphones.
- **Deploy contínuo na Vercel** – a cada push, o site é atualizado automaticamente.

---

## 🛠️ Tecnologias Utilizadas

| Categoria          | Tecnologias                                                                 |
| ------------------ | --------------------------------------------------------------------------- |
| **Front-End**      | Next.js 14 (App Router), React 18, JavaScript (ES6+)                       |
| **Estilização**    | Tailwind CSS 4, CSS Modules (globals.css), variáveis de tema                |
| **Carrossel**      | Implementado manualmente com hooks (useState, useRef, useEffect)            |
| **Build & Deploy** | Vercel (hospedagem), Git (controle de versão)                               |
| **Gerenciamento**  | npm, GitHub Codespaces                                                      |

---

## ✨ Funcionalidades em Detalhe

### 🖼️ Carrossel de Mídias
- Suporte a **imagens** (via componente `next/image`) e **vídeos** (HTML5 video com autoplay, muted, loop).
- **Loop infinito** – clona primeiro e último slide para transição contínua.
- **Arraste com mouse** (drag-to-slide) – experiência touch e desktop.
- **Autoplay** (5 segundos) com pausa ao passar o mouse.
- **Indicadores (dots)** e **setas de navegação**.

### 🎨 Temas Claro/Escuro
- **Variáveis CSS** definidas em `:root` (light) e `.dark` (dark).
- **Transição suave** entre temas em todos os elementos.
- Overlay do carrossel com gradiente dinâmico (preto no dark, branco no light).

### 📁 Estrutura de Dados
Os projetos são armazenados em `data/projects.json` com o seguinte formato:

```json
{
  "slug": "meu-projeto",
  "title": "Título",
  "shortDescription": "Resumo curto",
  "fullDescription": "Descrição completa",
  "technologies": ["React", "Node.js"],
  "media": [
    { "type": "image", "src": "/images/pasta/imagem.jpg" },
    { "type": "video", "src": "/videos/pasta/video.mp4" }
  ],
  "github": "https://github.com/seuusuario/repo",
  "liveDemo": "https://demo.com" (opcional)
}
