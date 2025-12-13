import { Box } from '@chakra-ui/react'
import { Container, Header, TaskForm } from '@/components'
import { HeaderTypeEnum } from '@/constants'
import { handleSubmitForm } from './action'

const AddTask = async () => {
  return (
    <>
      <Header type={HeaderTypeEnum.ADD} />
      <Container>
        <Box
          bg="white"
          borderRadius="2xl"
          shadow="2px 2px 8px rgba(0, 0, 0, 0.2)"
          border="2px"
          borderColor="gray.100"
          overflow="hidden"
          p="32px"
        >
          <TaskForm onSubmitForm={handleSubmitForm} />
        </Box>
      </Container>
    </>
  )
}

export default AddTask
