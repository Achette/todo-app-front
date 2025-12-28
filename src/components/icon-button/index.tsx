import { ReactElement } from 'react'
import { Button } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { LuPencilLine, LuTrash2 } from 'react-icons/lu'
import { deleteTask } from './action'
import { FormElements } from '@/constants'

interface ButtonProps {
  type: string
  id: number
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

export const IconButton = ({ type, id }: ButtonProps) => {
  const { bg, color, icon, name } = BUTTON_TYPE[type]
  const router = useRouter()

  const handleEditTask = (id: number) => {
    router.push(`/tasks/edit/${id}`)
  }

  const handleDeleteTask = async (id: number) => {
    await deleteTask(id)
  }

  const selectedButtonAction =
    type === FormElements.editMode.toLocaleUpperCase()
      ? handleEditTask
      : handleDeleteTask

  return (
    <Button
      onClick={() => selectedButtonAction(id)}
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
