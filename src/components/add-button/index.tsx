import { Link as ChackraLink, Container } from '@chakra-ui/react'
import { MdFormatListBulletedAdd } from "react-icons/md";



export const AddButton = () => {


  return (
    <Container display="flex" justifyContent="flex-end" position="absolute" bottom="50px" padding="0 24px" >
      <ChackraLink
        href="/tasks/add"
        bg="linear-gradient(to right, #4f46e5, #9333ea)"
        width="fit-content"
        color="white200"
        fontSize="20px"
        padding="10px"
        borderRadius="100px"
        fontWeight="500"
        boxShadow="sm"
        transition="all 0.2s ease-in-out"
        textDecoration="none"
        title="Adicionar nova tarefa"
        _hover={{
          bg: 'linear-gradient(to right, #4338ca, #7e22ce)',
        }}
        zIndex={100}
      >
        <MdFormatListBulletedAdd size="32px" />
      </ChackraLink>
    </Container>
  )
}
