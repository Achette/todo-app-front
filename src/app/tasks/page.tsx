import { Dashboard, Header } from '@/components'
import { Box, Text } from '@chakra-ui/react'

const TaskDashboard = () => {
  return (
    <Box
      borderBottom="1px solid #f3f4f6"
      border="1px solid red"
      maxW="4xl"
      height="100vh"
      mx="auto"
      px={6}
      py={8}
    >
    
        <Header />
 

      <Dashboard />
    </Box>
  )
}

export default TaskDashboard
