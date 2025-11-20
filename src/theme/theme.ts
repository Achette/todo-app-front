// theme.ts
import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        indigo600: { value: '#4f46e5' },
        purple600: { value: '#9333ea' },
        gray400: { value: '#6b7280' },
      },
      fonts: {
        body: { value: 'Elms Sans, sans-serif' },
      },
    },
  },
})

export const system = createSystem(defaultConfig, config)
