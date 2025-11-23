// theme.ts
import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        indigo600: { value: '#4f46e5' },
        indigo800: { value: '#4f46e5' },
        purple600: { value: '#9333ea' },
        gray400: { value: '#6b7280' },
        gray800: { value: '#4b5563'},
        white200: { value: '#f9f9f9' },
        white1000: { value: '#FFF' },
        green400: { value: '#16a34a' },
        bgActive: { value: '#eef2ff' },
        bgDone: { value: '#f0fdf4' },
      },
      fonts: {
        body: { value: 'Elms Sans, sans-serif' },
      },
    },
  },
})

export const system = createSystem(defaultConfig, config)
