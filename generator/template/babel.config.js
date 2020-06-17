---
extend: '@vue/cli-service/generator/template/babel.config.js'
replace:
  - !!js/regexp /presets: \[.*\]/
---

<%# REPLACE %>
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: ["@babel/plugin-proposal-optional-chaining", "transform-decorators"]
<%# END_REPLACE %>