# Alura Books

Aplicação web de livraria online desenvolvida com **React** e **Vite**, voltada para livros de tecnologia e programação.

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.3.1-646CFF?logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

---

## Sobre o Projeto

O Alura Books simula uma plataforma de e-commerce de livros com interface moderna e responsiva. A aplicação conta com:

- Header fixo com navegação, barra de busca e ícones de ação
- Banner principal com destaque para lançamentos
- Filtro interativo por categorias
- Grid de livros com cards contendo informações de preço, autor e tags
- Seção editorial com livro em destaque
- Formulário de newsletter
- Footer com links institucionais

---

## Tecnologias

| Tecnologia                                               | Versão | Finalidade                          |
| -------------------------------------------------------- | ------ | ----------------------------------- |
| [React](https://react.dev/)                              | 19.2.0 | Construção de interfaces            |
| [Vite](https://vite.dev/)                                | 7.3.1  | Build e servidor de desenvolvimento |
| [React Compiler](https://react.dev/learn/react-compiler) | -      | Otimização automática de renders    |
| [ESLint](https://eslint.org/)                            | 9.25.0 | Padronização e qualidade de código  |

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

## Pré-requisitos

- [Node.js](https://nodejs.org/) versão 18 ou superior
- npm ou yarn

---

## Instalação

```bash
git clone https://github.com/SaraOliveiraa/Alura.git
cd Alura/alura-books
npm install
```

## Execução

```bash
npm run dev
```

Acesse `http://localhost:5173` no navegador.

---

## Scripts

| Comando           | Descrição                             |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Servidor de desenvolvimento           |
| `npm run build`   | Build de produção (pasta `dist`)      |
| `npm run preview` | Pré-visualização da build de produção |
| `npm run lint`    | Verificação de código com ESLint      |

---

## Design System

Variáveis CSS utilizadas para consistência visual:

| Variável           | Valor     | Aplicação          |
| ------------------ | --------- | ------------------ |
| `--cor-primaria`   | `#002f52` | Cor principal      |
| `--cor-secundaria` | `#33a8db` | Cor de apoio       |
| `--cor-destaque`   | `#eb9b00` | Botões e destaques |
| `--cor-fundo`      | `#f5f5f5` | Fundo geral        |
| `--cor-texto`      | `#333333` | Texto principal    |

Tipografia: **Poppins** (corpo) e **Playfair Display** (títulos).

---

## Responsividade

| Breakpoint | Adaptação                                        |
| ---------- | ------------------------------------------------ |
| 900px      | Hero e destaque reorganizados em coluna          |
| 600px      | Grid simplificado, busca e formulários adaptados |

---

## Autora

**Sara Oliveira** — [github.com/SaraOliveiraa](https://github.com/SaraOliveiraa)

---

## Licença

Projeto desenvolvido como parte dos estudos na [Alura](https://www.alura.com.br/).
