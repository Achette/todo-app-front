import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { LuTrash2 } from 'react-icons/lu'
import { ISODateFormatter } from '@/utils'
import { deleteTask } from '../icon-button/action'

interface FormTipsProps {
  isEditMode: boolean
  createdData?: string
  updatedData?: string
  id?: number
}

export const FormTips = ({
  isEditMode,
  createdData,
  updatedData,
  id,
}: FormTipsProps) => {
  if (isEditMode) {
    const dateInfo = [
      {
        title: 'Criada em: ',
        date: ISODateFormatter(createdData),
      },
      {
        title: 'Última edição: ',
        date: ISODateFormatter(updatedData),
      },
    ]

    const handleDeleteTask = async (id?: number) => {
      if (id && isEditMode) await deleteTask(id, isEditMode)

      return
    }

    return (
      <Box>
        <Flex justifyContent="space-between" alignItems="center">
          <Box color="gray400" fontSize="14px">
            {dateInfo.map((info) => (
              <Text key={info.title}>
                {info.title}
                <strong>{info.date}</strong>
              </Text>
            ))}
          </Box>
          <Button color="red.500" onClick={() => handleDeleteTask(id)}>
            <LuTrash2 /> Excluir tarefa
          </Button>
        </Flex>
      </Box>
    )
  }

  return (
    <Text color="gray400" fontSize="14px" textAlign="center">
      💡 Dica: Adicione uma descrição detalhada para não esquecer nenhum detalhe
      importante!
    </Text>
  )
}
