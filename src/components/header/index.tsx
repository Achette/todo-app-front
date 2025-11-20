import { Box, Flex, Heading, Text } from '@chakra-ui/react'

export const Header = () => {
  return (
    <Flex>
      <Box>
        <Heading
          fontSize="40px"
          fontWeight={700}
          bg="linear-gradient(90deg, #4f46e5, #9333ea)"
          bgClip="text"

        >
          Minhas Tarefas
        </Heading>
        <Text color="gray400" marginTop="8px">Organize seu dia de forma inteligente</Text>
      </Box>
    </Flex>
  )
}
