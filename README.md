# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
# 📌 To-Do List App

Uma aplicação web simples de lista de tarefas (To-Do List) desenvolvida com foco na praticidade e organização do usuário.

## 🚀 Objetivo

Criar uma aplicação funcional que permita aos usuários gerenciar suas tarefas diárias de forma intuitiva e eficiente.

## ✨ Funcionalidades

- ✅ Adicionar novas tarefas (campo de input + botão).
- ✅ Listar tarefas com a opção de marcar como concluídas (estilo riscado).
- ✅ Excluir tarefas individualmente.
- ✅ Filtrar tarefas por status: "Todas", "Ativas" e "Concluídas" (botões).

## 🎯 Funcionalidades Opcionais (Bônus)

- 🔹 Persistência dos dados no localStorage para manter as tarefas salvas mesmo após recarregar a página.
- 🔹 Animações ao adicionar/remover itens para melhorar a experiência do usuário.
- 🔹 Testes simples utilizando Jest e React Testing Library.

## 🛠️ Tecnologias Utilizadas

- HTML5, CSS3 e JavaScript
- React.js (caso utilize)
- Jest + React Testing Library (para testes, se aplicável)