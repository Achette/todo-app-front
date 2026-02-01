import { HeaderDescription, HeaderTypeEnum } from '@/constants'
import { Box, Text } from '@chakra-ui/react'

interface DescritiveProps {
  type: keyof typeof HeaderTypeEnum
}

export const Descritive = ({ type }: DescritiveProps) => {
  const { title, description } = HeaderDescription[type]
  return (
    <Box>
      <Text
        fontSize="40px"
        fontWeight={800}
        bg="linear-gradient(90deg, #4f46e5, #9333ea)"
        bgClip="text"
      >
        {title}
      </Text>
      <Text color="gray400" fontSize="18px" marginTop="-8px">
        {description}
      </Text>
    </Box>
  )
}
