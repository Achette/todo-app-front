import { ReactElement } from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { LuType, LuAlignLeft, LuTag, LuCalendar } from 'react-icons/lu'
import { FormLabelEnum, priorityLabelTab } from '@/constants'
import { normalizeForSave } from '@/utils'

interface FormLabelProps {
  fieldType: keyof typeof FormLabelEnum
}

const FORM_LABEL_DETAIL: Record<string, { text: string; icon: ReactElement }> =
  {
    TITLE: { text: 'Título da Tarefa', icon: <LuType /> },
    DESCRIPTION: { text: 'Descrição', icon: <LuAlignLeft /> },
    PRIORITY: { text: 'Prioridade', icon: <LuTag /> },
    DUE_DATE: { text: 'Data de vencimento', icon: <LuCalendar /> },
  }

export const FormLabel = ({ fieldType }: FormLabelProps) => {
  const { text, icon } = FORM_LABEL_DETAIL[fieldType]

  return (
    <Flex alignItems="center" gap="8px" marginBottom="8px">
      <Text color="indigo800" fontSize="18px">
        {icon}
      </Text>
      <Text color="gray400" fontWeight={700} fontSize="14px">
        {text}
      </Text>
    </Flex>
  )
}

export const matchFormLabel = (isEditMode: boolean, taskData?: TaskProps) => {
  if (!isEditMode) {
    return priorityLabelTab[1]
  }

  let matchingLabel
  if (taskData) {
    matchingLabel = priorityLabelTab.find(
      (label) => normalizeForSave(label) === taskData.priority
    )
  }

  return matchingLabel ?? priorityLabelTab[1]
}
