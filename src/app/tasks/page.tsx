import { Box, Text } from '@chakra-ui/react'
import { Container, Dashboard, Header } from '@/components'
import { getAllTasks } from '@/services'
import { filterTasks } from '@/utils'

const TaskDashboard = async () => {
  let tasks: TaskResponse

  try {
    tasks = await getAllTasks()
  } catch (error: any) {
    tasks = []
    const errorMessage =
      error instanceof Error ? error.message : 'Erro desconhecido'
    console.error('Erro ao buscar tarefas:', errorMessage)
  }

  const { activeTasks, doneTasks } = filterTasks(tasks)

  return (
    <Box>
      <Header
        counters={{ active: activeTasks.length, done: doneTasks.length }}
      />

      <Dashboard tasks={tasks} />

      <Text color="gray400" textAlign="center" marginTop="-0.5rem">
        {doneTasks.length} de {tasks.length} tarefas concluídas
      </Text>
    </Box>
  )
}

export default TaskDashboard
