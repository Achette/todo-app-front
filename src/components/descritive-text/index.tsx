import { CheckIcon } from '@/assets'
import { HeaderDescription, HeaderTypeEnum } from '@/constants'
import { Box, Flex, Text } from '@chakra-ui/react'

interface DescritiveProps {
  type: keyof typeof HeaderTypeEnum
}

export const Descritive = ({ type }: DescritiveProps) => {
  const { title, description } = HeaderDescription[type]
  return (
    <Box>
      <Flex alignItems="center" gap="1rem">
        <CheckIcon />
        <Text
          fontSize="32px"
          fontWeight={800}
          bg="linear-gradient(90deg, #4f46e5, #9333ea)"
          bgClip="text"
        >
          {title}
        </Text>
      </Flex>
      <Text color="gray400" fontSize="14px" textAlign="center">
        {description}
      </Text>
    </Box>
  )
}
