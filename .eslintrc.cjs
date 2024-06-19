/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    '@vue/typescript/recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier',
    'plugin:vue/vue3-recommended',
    'eslint:recommended'
  ],
  plugins: ['eslint-plugin-vue'],
  parser: 'vue-eslint-parser',
  overrides: [
    {
      files: ['cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}', 'cypress/support/**/*.{js,ts,jsx,tsx}'],
      extends: ['plugin:cypress/recommended']
    }
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 'latest'
  },
  rules: {
    'vue/multi-word-component-names': 0,
    'vue/max-attributes-per-line': 'off',
    'vue/html-self-closing': 'off'
  }
};
