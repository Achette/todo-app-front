import { Container, Header } from '@/components'
import { HeaderTypeEnum } from '@/constants'
import { Box, Text } from '@chakra-ui/react'
import { LuType } from 'react-icons/lu'

const AddTask = () => {
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
        >
          <LuType color="indigo800" />
          <Text></Text>
        </Box>
      </Container>
    </>
  )
}

export default AddTask
