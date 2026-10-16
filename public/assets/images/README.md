# Catálogo de Assets Visuais Oficiais — CodeStashe

Este diretório contém os assets gráficos oficiais de identidade visual da **CodeStache**, estruturados para consumo em aplicações web, móveis, documentos e canais de comunicação institucional.

---

## 1. Mapeamento de Assets Oficiais

| Asset | Arquivo | Formato / Resolução | Uso Padrão no Sistema |
| :--- | :--- | :--- | :--- |
| **Favicon & App Icon (Dark)** | [`avatar-dark.svg`](./avatar-dark.svg) | Vetorial ($512\times512\text{ px}$) | Favicon padrão, PWA icon, avatar de bots e ícone de perfil no Dark Mode. |
| **Favicon & App Icon (Light)** | [`avatar-light.svg`](./avatar-light.svg) | Vetorial ($512\times512\text{ px}$) | Favicon alternativo para modo claro, exportações em PDF e relatórios impressos. |
| **Logo Navbar/Sidebar (Dark)** | [`Logo neon CodeStache em fundo escuro.png`](./Logo%20neon%20CodeStache%20em%20fundo%20escuro.png) | PNG HD | Logo oficial para Navbar, Sidebar e splash screens em **Dark Mode** (`#0B0F19`). |
| **Logo Navbar/Sidebar (Light)** | [`Logo minimalista CodeStache.png`](./Logo%20minimalista%20CodeStache.png) | PNG HD | Logo oficial para Navbar, Sidebar e cabeçalhos em **Light Mode** (`#F8FAFC`). |
| **Banner Hero & Tela de Login** | [`CodeStache_ Ideias, Código e Impacto.png`](./CodeStache_%20Ideias,%20Código%20e%20Impacto.png) | PNG Widescreen | Banner principal para tela de Login, páginas institucionais e headers de documentação. |
| **Banner Widescreen Vetorial** | [`banner-dark.svg`](./banner-dark.svg) | Vetorial ($1200\times400\text{ px}$) | Banner vetorial para README do repositório, apresentações e dashboards. |
| **Estados Vazios (Empty States)** | [`Logo minimalista CodeStache.png`](./Logo%20minimalista%20CodeStache.png) ou [`avatar-dark.svg`](./avatar-dark.svg) | Vetorial / PNG | Ilustração central atenuada (opacidade 40-50%) acompanhada de microcopy técnico e botão de ação. |

---

## 2. Padrões de Implementação por Componente

### 2.1. Favicon (`<head>`)
```html
<link rel="icon" type="image/svg+xml" href="/assets/images/avatar-dark.svg" media="(prefers-color-scheme: dark)" />
<link rel="icon" type="image/svg+xml" href="/assets/images/avatar-light.svg" media="(prefers-color-scheme: light)" />
```

### 2.2. Navbar / Sidebar (Alternância Dinâmica de Tema)
```tsx
import logoDark from '@/assets/images/Logo neon CodeStache em fundo escuro.png';
import logoLight from '@/assets/images/Logo minimalista CodeStache.png';

export function BrandLogo({ theme }: { theme: 'dark' | 'light' }) {
  return (
    <img
      src={theme === 'dark' ? logoDark : logoLight}
      alt="CodeStache"
      className="h-8 w-auto transition-opacity duration-200"
    />
  );
}
```

### 2.3. Tela de Login (Split Hero)
* **Lado Esquerdo / Topo:** Formulário com cores de superfície (`#151C2C` Dark / `#FFFFFF` Light).
* **Lado Direito / Fundo:** Destaque visual usando [`CodeStache_ Ideias, Código e Impacto.png`](./CodeStache_%20Ideias,%20Código%20e%20Impacto.png) ou [`banner-dark.svg`](./banner-dark.svg) com overlay gradiente `linear-gradient(135deg, rgba(11,15,25,0.85) 0%, rgba(21,28,44,0.95) 100%)`.

### 2.4. Estados Vazios (Empty States)
* Ícone centralizado utilizando [`avatar-dark.svg`](./avatar-dark.svg) com escala reduzida e opacidade `opacity-40`.
* Tipografia de apoio em `Inter` e título em `Space Grotesk`.
* Microcopy técnico encorajador (ex: *"Nenhum ticket encontrado. Pronto para iniciar um novo chamado?"*).
