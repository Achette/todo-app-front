// theme.ts
import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        bgActive: { value: '#EEF2FF' },
        bgDone: { value: '#F0FDF4' },
        black600: { value: '#1F2937' },
        emerald500: { value: '#10B981' },
        gray400: { value: '#6B7280' },
        gray800: { value: '#4B5563' },
        green400: { value: '#16A34A' },
        green500: { value: '#22C552' },
        indigo100: { value: '#E0E7FF' },
        indigo800: { value: '#4F46E5' },
        purple600: { value: '#9333EA' },
        red500: { value: '#EF4444' },
        white200: { value: '#F9F9F9' },
        white1000: { value: '#FFFFFF' },
        yellow500: { value: '#EAB308' },
      },
      fonts: {
        body: { value: 'Elms Sans, sans-serif' },
      },
    },
  },
})

export const system = createSystem(defaultConfig, config)
