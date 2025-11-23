import { Box } from '@chakra-ui/react'
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
      <Box bg="white200" borderBottom="2px solid #f3f4f6" height="auto">
        <Container>
          <Header
            counters={{ active: activeTasks.length, done: doneTasks.length }}
          />
        </Container>
      </Box>

      <Container>
        <Dashboard tasks={tasks} />
      </Container>
    </Box>
  )
}

export default TaskDashboard
