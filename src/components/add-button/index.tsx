import { Link as ChackraLink } from '@chakra-ui/react'
import { ReactElement } from 'react'
import { LuPlus, LuSave } from 'react-icons/lu'

interface ButtonProps {
  type: string
}

const BUTTON_TYPE: Record<string, { name: string; icon: ReactElement }> = {
  ADD: { name: 'Adicionar', icon: <LuPlus /> },
  SAVE: { name: 'Criar Tarefa', icon: <LuSave /> },
}

export const AddButton = ({ type }: ButtonProps) => {
  const { name, icon } = BUTTON_TYPE[type]

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
      {icon}
      {name}
    </ChackraLink>
  )
}
