module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true,
    "jest": true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:storybook/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": ["react", "prettier"],
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "rules": {
    // Add custom rules here
  }
};
