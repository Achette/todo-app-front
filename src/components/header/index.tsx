import { Box, Flex, Text } from '@chakra-ui/react'
import { ResumeCard } from '../card'
import { filterTasks } from '@/utils'
import { AddButton } from '../add-button'

interface HeaderProps {
  tasks: TaskResponse
}
export const Header = ({ tasks }: HeaderProps) => {
  const { activeTasks, doneTasks } = filterTasks(tasks)

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
        <ResumeCard taskCount={activeTasks.length} taskStatus="active" />
        <ResumeCard taskCount={doneTasks.length} taskStatus="done" />
      </Flex>

      <AddButton />
    </Flex>
  )
}
