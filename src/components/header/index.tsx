import { Box, Flex, Text } from '@chakra-ui/react'
import { ResumeCard } from '../card'
import { AddButton } from '../add-button'

interface HeaderProps {
  counters: { active: number; done: number }
}
export const Header = ({ counters }: HeaderProps) => {
  const { active, done } = counters

  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Box>
        <Text
          fontSize="40px"
          fontWeight={800}
          bg="linear-gradient(90deg, #4f46e5, #9333ea)"
          bgClip="text"
        >
          Minhas Tarefas
        </Text>
        <Text color="gray400" fontSize="18px" marginTop="-8px">
          Organize seu dia de forma inteligente
        </Text>
      </Box>

      <Flex gap="20px">
        <ResumeCard taskCount={active} taskStatus="active" />
        <ResumeCard taskCount={done} taskStatus="done" />
      </Flex>

      <AddButton />
    </Flex>
  )
}
