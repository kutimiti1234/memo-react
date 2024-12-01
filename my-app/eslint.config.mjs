import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import eslintConfigPrettier from "eslint-config-prettier";
import hooksPlugin from "eslint-plugin-react-hooks";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    plugins: {
      "react-hooks": hooksPlugin,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: hooksPlugin.configs.recommended.rules,
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat["jsx-runtime"],
  eslintConfigPrettier,
];
