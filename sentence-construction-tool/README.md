# 🧠 Sentence Construction Tool

An interactive web application built with React, Tailwind CSS, and JSON Server that helps users improve their sentence construction skills through timed quizzes.

## 🚀 Features

- 📝 Fill-in-the-blank sentence questions
- 🔢 10 dynamically loaded questions from a JSON API
- 🧠 4 selectable options per sentence
- 🔁 Unselect words by clicking on the filled blank
- ⏱️ 30-second timer per question
- ➡️ Auto-advances when timer ends
- ✅ "Next" button enabled only when all blanks are filled
- 📊 Results screen with:
  - Correct vs incorrect answers
  - Correct answers for mistakes
  - Final score out of 10

---

## 🛠️ Tech Stack

| Frontend          | Backend           | Tools                |
| ----------------- | ----------------- | -------------------- |
| Vite + React + TS | JSON Server       | Tailwind CSS         |
| Context API       | REST API (mocked) | shadcn/ui (optional) |

---

## 📸 Screenshots

![Quiz Screen](./public/screenshot-quiz.png)  
![Results Screen](./public/screenshot-results.png)

---

## 📁 Project Structure

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
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```
