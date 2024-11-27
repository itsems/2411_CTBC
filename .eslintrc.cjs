/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    './.eslintrc-auto-import.json',
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'vue/space-in-parens': 'off',
    "vue/multi-word-component-names": "off",
    "semi": [ "error", "never" ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 3,
        },
        multiline: {
          max: 1,
        },
      },
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'comma-spacing': [2, {
      before: false,
      after: true
    }],
    'key-spacing': [1, {
      beforeColon: false,
      afterColon: true
    }],
    // https://eslint.vuejs.org/rules/html-indent.html
    'vue/html-indent': ["error", 2, {
      attribute: 1,
      baseIndent: 1,
      closeBracket: 0,
      alignAttributesVertically: true,
      ignores: []
    }],
    // https://eslint.vuejs.org/rules/first-attribute-linebreak.html
    "vue/first-attribute-linebreak": ["error", {
      "singleline": "ignore",
      "multiline": "below"
    }],
    'vue/arrow-spacing': ["error",  {
			before: true,
			after: true,
    }],
    'arrow-parens': ['error', 'as-needed',],
  }
}
