// @ts-check
import antfu from "@antfu/eslint-config";

export default antfu({
  type: "lib",
  typescript: true,
  formatters: true,
  lessOpinionated: true,
  stylistic: {
    indent: 2,
    semi: true,
    quotes: "double",
  },
}, {
  rules: {
    "func-style": ["error", "expression"],
    "import/extensions": ["error", "ignorePackages"],
    "ts/explicit-function-return-type": ["off"],
    "perfectionist/sort-imports": ["error", {
      tsconfigRootDir: ".",
    }],
    "unicorn/filename-case": ["error", {
      case: "kebabCase",
      ignore: ["^.*\.md$"],
    }],
  },
});
