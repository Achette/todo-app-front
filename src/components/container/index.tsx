import { Box, BoxProps } from '@chakra-ui/react'

export const Container = ({ children, ...props }: BoxProps) => (
  <Box maxW="5xl" px={6} py={8} mx="auto" {...props}>
    {children}
  </Box>
)
