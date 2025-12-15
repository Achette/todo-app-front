import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        bgActive: { value: '#EEF2FF' },
        bgDone: { value: '#F0FDF4' },
        bgBlue50: { value: '#EFF6FF' },
        bgBray50: { value: '#F9FAFB' },
        bgOrange50: { value: '#FFF7ED' },
        bgRed50: { value: '#FEF2F2' },
        bgYellow50: { value: '#FEFCE8' },
        black600: { value: '#1F2937' },
        blue600: { value: '#2563EB' },
        emerald500: { value: '#10B981' },
        gray400: { value: '#6B7280' },
        gray600: { value: '#4B5563' },
        gray800: { value: '#4B5563' },
        green400: { value: '#16A34A' },
        green500: { value: '#22C552' },
        indigo100: { value: '#E0E7FF' },
        indigo800: { value: '#4F46E5' },
        orange600: { value: '#EA580C' },
        purple600: { value: '#9333EA' },
        red500: { value: '#EF4444' },
        red600: { value: '#DC2626' },
        white200: { value: '#F9F9F9' },
        white1000: { value: '#FFFFFF' },
        yellow500: { value: '#EAB308' },
        yellow600: { value: '#CA8A04' },
      },
      fonts: {
        body: { value: 'Elms Sans, sans-serif' },
      },
    },
  },
})

export const system = createSystem(defaultConfig, config)
