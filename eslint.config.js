import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended', 'eslint:recommended', 'plugin:prettier/recommended'],
    languageOptions: {
      globals: {
        ...globals.browser, // Браузерные глобалы
        ...globals.node, // Node.js глобалы (если нужно)
      },
      parserOptions: {
        ecmaVersion: 'latest', // Поддержка современного JS
        sourceType: 'module', // Использование ES-модулей
      },
    },
    rules: {
      semi: ['error', 'always'], // Точка с запятой обязательна
      quotes: ['error', 'single'], // Одинарные кавычки
      indent: ['error', 2], // Отступы: 2 пробела
      'no-console': 'warn', // Предупреждение для console.log
    },
  },
]);
