module.exports = {
  extends: [
    'next/core-web-vitals',
    'plugin:storybook/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',

    'prettier',
  ],
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'jsx-a11y',
    'simple-import-sort',
    'prettier',
  ],
};
