import { Link as ChackraLink } from '@chakra-ui/react'
import { LuPlus } from 'react-icons/lu'

interface ButtonProps {
  isVisible?: boolean
}

export const AddButton = ({ isVisible }: ButtonProps) => {
  if (!isVisible) return null

  return (
    <ChackraLink
      href="/tasks/add"
      bg="linear-gradient(to right, #4f46e5, #9333ea)"
      height="60px"
      color="white200"
      fontSize="20px"
      padding="16px 24px"
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
      <LuPlus />
      Criar Tarefa
    </ChackraLink>
  )
}
