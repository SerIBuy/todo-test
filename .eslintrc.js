module.exports = {
  root: true,
  parser: "@babel/eslint-parser",
  env: {
    browser: true,
    es6: true,
  },
  extends: ["airbnb", "plugin:react/recommended"],
  plugins: ["react", "react-hooks"],
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "no-console": "warn",
  },
  settings: {
    react: {
      version: "16.9",
    },
    "import/resolver": {
      alias: {
        map: [["@", "./src"]],
        extensions: [".js", ".jsx", ".json"],
      },
    },
  },
};
