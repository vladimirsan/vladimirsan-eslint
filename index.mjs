import js from '@eslint/js'
import react from 'eslint-plugin-react'
import tseslint from 'typescript-eslint'
import pluginPrettier from "eslint-plugin-prettier";
import pluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import pluginUnusedImports from "eslint-plugin-unused-imports";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginImport from "eslint-plugin-import";
import reactRefresh from "eslint-plugin-react-refresh";

export default tseslint.config(
    js.configs.recommended,
    tseslint.configs.strictTypeChecked,
    react.configs.flat.recommended,
    react.configs.flat['jsx-runtime'],
    pluginPrettierRecommended,
    pluginImport.flatConfigs.recommended,
    pluginImport.flatConfigs.typescript,
    pluginReactHooks.configs["recommended-latest"],
    reactRefresh.configs.vite,
    {
        plugins: {
            "prettier": pluginPrettier,
            "unused-imports": pluginUnusedImports,
        },
        languageOptions:{
            parserOptions: {
                projectService: true,
            },
        },
        settings: {
            react: {
                version: 'detect'
            },
            "import/parsers": {
                "@typescript-eslint/parser": [".ts", ".tsx"],
            },

            "import/resolver": {
                typescript: {
                    alwaysTryTypes: true,
                },
            },
        },
        rules: {
            'react/function-component-definition': "off",
            'react/jsx-filename-extension': [
                'error',
                {
                    extensions: ['.jsx', '.tsx'],
                },
            ],
            "react/jsx-curly-brace-presence": [
                "error",
                {
                    props: "never",
                    children: "ignore",
                    propElementValues: "always",
                },
            ],
            "react/jsx-no-literals": "off", // I can enable this when I want to translate the app
            "react/jsx-no-bind": ["error", {
                "allowArrowFunctions": true,
            }],
            "one-var": ["error", {
                "var": "never",
                "let": "never",
                "const": "never",
            }],
            "react/jsx-max-depth": ["error", { "max": 5 }],
            "react/jsx-one-expression-per-line": "off",
            "no-ternary": "off",
            "react/forbid-component-props": ["error", {"forbid": ["style"]}],
            "capitalized-comments": "off",
            "react/jsx-child-element-spacing": "off",
            "unused-imports/no-unused-imports": "error",
            "unused-imports/no-unused-vars": [
                "warn",
                {
                    "vars": "all",
                    "varsIgnorePattern": "^_",
                    "args": "after-used",
                    "argsIgnorePattern": "^_",
                },
            ],
            "import/first": "error",
            "import/no-absolute-path": "error",
            "import/no-amd": "error",
            "import/no-anonymous-default-export": ["error", {
                allowArray: false,
                allowArrowFunction: false,
                allowAnonymousClass: false,
                allowAnonymousFunction: false,
                allowCallExpression: false,
                allowLiteral: false,
                allowObject: false,
            }],
            "import/no-cycle": ["error", {
                ignoreExternal: true,
                maxDepth: 2,
            }],
            "import/no-extraneous-dependencies": "error",
            "import/no-duplicates": "error",
            "import/no-mutable-exports": "error",
            "import/no-named-as-default": "error",
            "import/no-named-as-default-member": "error",
            "import/no-named-default": "error",
            "import/no-self-import": "error",
            "import/no-unassigned-import": ["error",{
                allow: [
                    "**/*.css",
                ],
            }],
            "import/no-useless-path-segments": ["error", {
                noUselessIndex: true,
            }],
            "sort-imports": "off",
            "import/order": ["error", {
                alphabetize: {
                    order: "asc",
                    caseInsensitive: true,
                },
                groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
                "newlines-between": "always",
            }],
            "react-hooks/exhaustive-deps": "error",
        },
    }
);