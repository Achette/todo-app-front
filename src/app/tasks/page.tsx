import { Box } from '@chakra-ui/react'
import { Dashboard, Header } from '@/components'
import { getAllTasks } from '@/services'

const TaskDashboard = async () => {
  const tasks = await getAllTasks()

  return (
    <Box>
      <Box bg="white200" borderBottom="1px solid #f3f4f6" height="auto">
        <Box maxW="5xl" px={6} py={8} mx="auto">
          <Header tasks={tasks} />
        </Box>
      </Box>

      <Box maxW="5xl" px={6} py={8} mx="auto">
        <Dashboard />
      </Box>
    </Box>
  )
}

export default TaskDashboard
