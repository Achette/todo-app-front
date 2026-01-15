import { Box, Flex, Text } from '@chakra-ui/react'
import { Dashboard, Header } from '@/components'
import { getAllTasks } from '@/services'
import { filterTasks } from '@/utils'

export const dynamic = 'force-dynamic'

const TaskDashboard = async () => {
  let tasks: TaskResponse[]

  try {
    tasks = await getAllTasks()
  } catch (error: unknown) {
    tasks = []
    const errorMessage =
      error instanceof Error ? error.message : 'Erro desconhecido'
    console.error('Erro ao buscar tarefas:', errorMessage)
  }
  const hasTasks = tasks.length > 0

  const { activeTasks, doneTasks } = filterTasks(tasks)

  return (
    <Box height="100vh">
      <Header
        counters={{ active: activeTasks.length, done: doneTasks.length }}
      />

      {hasTasks ? (
        <>
          <Dashboard tasks={tasks} />

          <Text color="gray400" textAlign="center" marginTop="-0.5rem">
            {doneTasks.length} de {tasks.length} tarefas concluídas
          </Text>
        </>
      ) : (
        <Flex h="70%" justifyContent="center" alignItems="center">
          <Text fontSize="xl" color="gray400" fontWeight={600}>
            Não há tarefas no seu board 😔
          </Text>
        </Flex>
      )}
    </Box>
  )
}

export default TaskDashboard
