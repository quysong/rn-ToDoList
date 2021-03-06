module.exports = {
  "parser": "babel-eslint",
  "extends": ["standard", "standard-react", "prettier"],
  "plugins": ["babel", "import", "node", "react", "promise", "prettier", "standard"],
  "globals": {
    "__DEV__": true,
    "cordova": true
  },
  "env": {
    "jest": true
  },
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "trailingComma": true,
        "bracketSpacing": true,
        "jsxBracketSameLine": true,
        "parser": "flow",
        "semi": false
      }
    ],
    "key-spacing": "off",
    "max-len": [2, 120, 2],
    "object-curly-spacing": [2, "always"],
    "no-undef": 1,
    "camelcase": "off",
    "radix": "off"
  }
}
