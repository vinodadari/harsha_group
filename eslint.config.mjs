import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ["**/*.{js,ts,jsx,tsx}"],
    rules: {
      "@typescript-eslint/no-this-alias": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-require-imports": "off",
      "no-unused-expressions": "off"
    }
  },
  {
    files: ["**/src/app/**/*.{js,ts,jsx,tsx}"],
    rules: {
      "@next/next/no-img-element": "off",
      "jsx-a11y/alt-text": "off"
    }
  },
  {
    ignores: [
      "**/public/**",
      "**/vendor/**",
      "**/src/assets/vendor/**",
      "**/node_modules/**"
    ]
  }
];

export default eslintConfig;
