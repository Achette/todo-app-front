import { Box, Flex, Text } from '@chakra-ui/react'
import { PriorityLabel } from '../priorityLabel'
import { LuCalendar } from 'react-icons/lu'
import { FORM_CONTAINER_STYLES } from '@/constants'

interface TaskPreviewProps {
  task: {
    title: string
    description: string
    priority: Priority
    timestamp: string
  }
}
export const TaskPreview = ({ task }: TaskPreviewProps) => {
  const formatDate = () => {
    if (!task.timestamp) {
      const tomorrow = new Date()
      tomorrow.setDate(tomorrow.getDate() + 1)
      return tomorrow.toLocaleDateString('pt-BR')
    }

    const [year, month, day] = task.timestamp.split('-')
    return `${day}/${month}/${year}`
  }

  return (
    <Box mt="1.25rem">
      <Text color="black600" fontSize="16px" fontWeight={700}>
        Preview da Tarefa
      </Text>

      <Flex style={FORM_CONTAINER_STYLES} flexDir="column" mt="1rem" gap="12px">
        <Text color="gray800" fontWeight={700} fontSize="1rem">
          {task.title || 'Titulo da Tarefa'}
        </Text>

        <Text color="gray400">
          {task.description || 'Descrição da tarefa...'}
        </Text>

        <Flex gap="12px">
          <Flex
            as="p"
            alignItems="center"
            gap="4px"
            color="gray400"
            fontSize="12px"
          >
            <LuCalendar />
            {formatDate()}
          </Flex>

          <PriorityLabel priority={task.priority} />
        </Flex>
      </Flex>
    </Box>
  )
}
