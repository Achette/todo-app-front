import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { LuTrash2 } from 'react-icons/lu'
import { ISODateFormatter } from '@/utils'

interface FormTipsProps {
  isEditMode: boolean
  createdData?: string
  updatedData?: string
}

export const FormTips = ({
  isEditMode,
  createdData,
  updatedData,
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
          <Button color="red.500">
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
