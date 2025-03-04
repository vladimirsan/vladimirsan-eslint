import js from '@eslint/js'
import react from 'eslint-plugin-react'
import tseslint from 'typescript-eslint'

export default tseslint.config(
    js.configs.all,
    tseslint.configs.strictTypeChecked,
    react.configs.flat.recommended,
    react.configs.flat.all,
    react.configs.flat['jsx-runtime'],
    {
        languageOptions:{
            parserOptions: {
                projectService: true,
            },
        },
        settings: {
            react: {
                version: 'detect'
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
            "react/jsx-no-bind": ["error9", {
                "allowArrowFunctions": "true"
            }],
        },
    }
);