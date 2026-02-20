# Alura Books

Aplicacao web de livraria online desenvolvida com **React** e **Vite**, voltada para livros de tecnologia e programacao.

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.3.1-646CFF?logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

---

## Sobre o Projeto

O Alura Books simula uma plataforma de e-commerce de livros com interface moderna e responsiva. A aplicacao conta com:

- Header fixo com navegacao, barra de busca e icones de acao
- Banner principal com destaque para lancamentos
- Filtro interativo por categorias
- Grid de livros com cards contendo informacoes de preco, autor e tags
- Secao editorial com livro em destaque
- Formulario de newsletter
- Footer com links institucionais

---

## Tecnologias

| Tecnologia                                               | Versao | Finalidade                          |
| -------------------------------------------------------- | ------ | ----------------------------------- |
| [React](https://react.dev/)                              | 19.2.0 | Construcao de interfaces            |
| [Vite](https://vite.dev/)                                | 7.3.1  | Build e servidor de desenvolvimento |
| [React Compiler](https://react.dev/learn/react-compiler) | -      | Otimizacao automatica de renders    |
| [ESLint](https://eslint.org/)                            | 9.25.0 | Padronizacao e qualidade de codigo  |

---

## Estrutura do Projeto

```
alura-books/
├── public/
├── src/
│   ├── componentes/
│   │   ├── card-livro/
│   │   ├── categorias/
│   │   ├── destaque/
│   │   ├── footer/
│   │   ├── header/
│   │   ├── hero/
│   │   ├── logo/
│   │   ├── newsletter/
│   │   ├── secao-livros/
│   │   └── estilo.css
│   ├── dados/
│   ├── image/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── eslint.config.js
└── package.json
```

---

## Pre-requisitos

- [Node.js](https://nodejs.org/) versao 18 ou superior
- npm ou yarn

---

## Instalacao

```bash
git clone https://github.com/SaraOliveiraa/Alura.git
cd Alura/alura-books
npm install
```

## Execucao

```bash
npm run dev
```

Acesse `http://localhost:5173` no navegador.

---

## Scripts

| Comando           | Descricao                             |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Servidor de desenvolvimento           |
| `npm run build`   | Build de producao (pasta `dist`)      |
| `npm run preview` | Pre-visualizacao da build de producao |
| `npm run lint`    | Verificacao de codigo com ESLint      |

---

## Design System

Variaveis CSS utilizadas para consistencia visual:

| Variavel           | Valor     | Aplicacao          |
| ------------------ | --------- | ------------------ |
| `--cor-primaria`   | `#002f52` | Cor principal      |
| `--cor-secundaria` | `#33a8db` | Cor de apoio       |
| `--cor-destaque`   | `#eb9b00` | Botoes e destaques |
| `--cor-fundo`      | `#f5f5f5` | Fundo geral        |
| `--cor-texto`      | `#333333` | Texto principal    |

Tipografia: **Poppins** (corpo) e **Playfair Display** (titulos).

---

## Responsividade

| Breakpoint | Adaptacao                                        |
| ---------- | ------------------------------------------------ |
| 900px      | Hero e destaque reorganizados em coluna          |
| 600px      | Grid simplificado, busca e formularios adaptados |

---

## Autora

**Sara Oliveira** — [github.com/SaraOliveiraa](https://github.com/SaraOliveiraa)

---

## Licenca

Projeto desenvolvido como parte dos estudos na [Alura](https://www.alura.com.br/).
