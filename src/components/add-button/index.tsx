import { Button } from '@chakra-ui/react'
import { LuPlus } from 'react-icons/lu'

export const AddButton = () => {
  return (
    <Button
      bg="linear-gradient(to right, #4f46e5, #9333ea)"
      height="60px"
      color="white200"
      fontSize="24px"
      padding="16px 24px"
      borderRadius="xl"
      fontWeight="500"
      display="flex"
      alignItems="center"
      gap="8px"
      boxShadow="sm"
      transition="all 0.2s ease-in-out"
      _hover={{
        bg: 'linear-gradient(to right, #4338ca, #7e22ce)',
      }}
    >
      <LuPlus />
      Adicionar
    </Button>
  )
}
