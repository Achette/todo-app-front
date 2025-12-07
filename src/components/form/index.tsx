'use client'
import { useState } from 'react'
import { Box, Field, Flex, Text, Separator } from '@chakra-ui/react'
import { PriorityLabelForm } from '../priorityLabel/priority-label-form'
import { FormLabelEnum, priorityLabelTab } from '@/constants'
import { FormLabel } from './form-label'
import { FormField } from './form-input'
import { Calendar } from '../calendar'

export const TaskForm = () => {
  const [activePriorityLabel, setActivePriorityLabel] = useState(
    priorityLabelTab[1]
  )

  return (
    <Box as="form">
      {/* Titulo */}
      <Field.Root>
        <FormLabel fieldType={FormLabelEnum.TITLE} />
        <FormField placeholder="Digite o título da tarefa..." />
      </Field.Root>

      {/* Descrição */}
      <Field.Root marginTop="24px">
        <FormLabel fieldType={FormLabelEnum.DESCRIPTION} />
        <FormField
          as="textarea"
          placeholder="Adicione uma descrição detalhada..."
          height="180px"
        />
        <Text color="gray400" fontSize="12px">
          0 caracteres
        </Text>{' '}
        {/* TODO: deixar dinâmico */}
      </Field.Root>

      <Flex m="24px 0" gap={6}>
        {/* Prioridade */}
        <Flex flex={1} flexDirection="column">
          <FormLabel fieldType={FormLabelEnum.PRIORITY} />

          {priorityLabelTab.map((label) => (
            <PriorityLabelForm
              key={label}
              name={label}
              isActive={activePriorityLabel === label}
              onClick={() => setActivePriorityLabel(label)}
            />
          ))}
        </Flex>

        {/* Data Vencimento */}
        <Flex flex={1} flexDirection="column">
          <FormLabel fieldType={FormLabelEnum.DUE_DATE} />
          <Calendar />
        </Flex>
      </Flex>

      <Separator borderColor="gray.100" opacity={1} />

      <Text color="gray400" fontSize="14px" textAlign="center" pt="24px">
        💡 Dica: Adicione uma descrição detalhada para não esquecer nenhum
        detalhe importante!
      </Text>
    </Box>
  )
}
