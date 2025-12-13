'use client'
import { ChangeEvent, useCallback, useState } from 'react'
import { Field, Flex, Text, Separator } from '@chakra-ui/react'
import { PriorityLabelForm } from '../priorityLabel/priority-label-form'
import { FormLabelEnum, PriorityEnum, priorityLabelTab } from '@/constants'
import { FormLabel } from './form-label'
import { FormField } from './form-input'
import { Calendar } from '../calendar'
import { FormButton } from './form-button'
import { useRouter } from 'next/navigation'

interface TaskFormProps {
  onSubmitForm: (formData: FormData) => Promise<void>
}

export const TaskForm = ({ onSubmitForm }: TaskFormProps) => {
  const router = useRouter()

  const [formInputs, setFormInputs] = useState({
    title: '',
    description: '',
    priority: priorityLabelTab[1],
    dueDate: '',
  })

  const handleGetFormInputs = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormInputs({ ...formInputs, [name]: value })
  }

  const handlePriorityChange = (label: 'Alta' | 'Média' | 'Baixa') => {
    setFormInputs({ ...formInputs, priority: label })
  }

  const handleDateChange = useCallback((date: string) => {
    setFormInputs((prev) => ({ ...prev, dueDate: date }))
  }, [])

  const handleSubmit = async (formData: FormData) => {
    formData.append('priority', formInputs.priority) // adiciona um append ao form e captura o valor do label de prioridade
    await onSubmitForm(formData)
    router.back()
  }

  return (
    <form action={handleSubmit}>
      {/* Titulo */}
      <Field.Root>
        <FormLabel fieldType={FormLabelEnum.TITLE} />
        <FormField
          placeholder="Digite o título da tarefa..."
          value={formInputs.title}
          setValue={handleGetFormInputs}
        />
      </Field.Root>

      {/* Descrição */}
      <Field.Root marginTop="24px">
        <FormLabel fieldType={FormLabelEnum.DESCRIPTION} />
        <FormField
          value={formInputs.description}
          setValue={handleGetFormInputs}
          as="textarea"
          placeholder="Adicione uma descrição detalhada..."
          height="180px"
        />
        <Text color="gray400" fontSize="12px">
          {formInputs.description.length} caracteres
        </Text>
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
              isActive={formInputs.priority === label}
              onClick={() => handlePriorityChange(label)}
            />
          ))}
        </Flex>

        {/* Data Vencimento */}
        <Flex flex={1} flexDirection="column">
          <FormLabel fieldType={FormLabelEnum.DUE_DATE} />
          <Calendar onDateChange={handleDateChange} />
        </Flex>
      </Flex>

      <Flex flexDir="column" mb="1.5rem" alignItems="center">
        <FormButton />
      </Flex>
      <Separator borderColor="gray.100" opacity={1} />

      <Text color="gray400" fontSize="14px" textAlign="center" pt="24px">
        💡 Dica: Adicione uma descrição detalhada para não esquecer nenhum
        detalhe importante!
      </Text>
    </form>
  )
}
