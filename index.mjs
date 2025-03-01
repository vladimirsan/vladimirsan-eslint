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
        settings: {
            react: {
                version: 'detect'
            },
        },
    }
);