import { Button } from '@chakra-ui/react'
import { LuSave } from 'react-icons/lu'

export const FormButton = () => {
  return (
    <Button
      type="submit"
      bg="linear-gradient(to right, #4f46e5, #9333ea)"
      height="60px"
      width="16rem"
      color="white200"
      fontSize="20px"
      padding="1rem 0"
      borderRadius="xl"
      fontWeight="500"
      display="flex"
      alignItems="center"
      gap="8px"
      boxShadow="sm"
      transition="all 0.2s ease-in-out"
      textDecoration="none"
      _hover={{
        bg: 'linear-gradient(to right, #4338ca, #7e22ce)',
      }}
    >
      <LuSave />
      Criar Tarefa
    </Button>
  )
}
