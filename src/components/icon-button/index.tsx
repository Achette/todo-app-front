import { Button } from '@chakra-ui/react'
import { ReactElement } from 'react'
import { IconType } from 'react-icons'
import { LuPencilLine, LuTrash2 } from 'react-icons/lu'

interface ButtonProps {
  type: string
}

const BUTTON_TYPE: Record<
  string,
  { name: string; icon: ReactElement; color: string; bg: string }
> = {
  EDIT: {
    name: 'Editar',
    icon: <LuPencilLine />,
    color: 'blue.500',
    bg: 'blue.50',
  },
  DELETE: {
    name: 'Deletar',
    icon: <LuTrash2 />,
    color: 'red.500',
    bg: 'red.50',
  },
}

export const IconButton = ({ type }: ButtonProps) => {
  const { bg, color, icon, name } = BUTTON_TYPE[type]

  return (
    <Button
      flexShrink={0}
      color="gray.400"
      transition="colors 0.2s"
      padding="8px"
      borderRadius="8px"
      cursor="pointer"
      _hover={{
        color: color,
        bg: bg,
      }}
      title={name}
    >
      {icon}
    </Button>
  )
}
