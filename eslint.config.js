// @ts-check
import antfu from "@antfu/eslint-config";

export default antfu({
  type: "lib",
  typescript: true,
  formatters: true,
  stylistic: {
    indent: 2,
    semi: true,
    quotes: "double",
  },
}, {
  rules: {
    "ts/explicit-function-return-type": ["off"],
    "perfectionist/sort-imports": ["error", {
      internalPattern: ["@/**"],
    }],
    "unicorn/filename-case": ["error", {
      case: "kebabCase",
      ignore: ["^.*\.md$"],
    }],
  },
});
