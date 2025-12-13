'use client'
import { ChangeEvent, useCallback, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Field, Flex, Text, Separator } from '@chakra-ui/react'
import { PriorityLabelForm } from '../priorityLabel/priority-label-form'
import { FormLabel } from './form-label'
import { FormField } from './form-input'
import { Calendar } from '../calendar'
import { FormButton } from './form-button'
import { TaskPreview } from '../task-preview'
import { normalizeForSave } from '@/utils'
import {
  FORM_CONTAINER_STYLES,
  FormLabelEnum,
  priorityLabelTab,
} from '@/constants'

interface TaskFormProps {
  onSubmitForm: (formData: FormData) => Promise<void>
}

export const TaskForm = ({ onSubmitForm }: TaskFormProps) => {
  const router = useRouter()

  const [activePriorityLabel, setActivePriorityLabel] = useState(
    priorityLabelTab[1]
  )
  const [dateInput, setDateInput] = useState('')

  const [formInputs, setFormInputs] = useState({
    title: '',
    description: '',
  })

  type FormInputEvent = HTMLInputElement | HTMLTextAreaElement

  const handleInputChange = (e: ChangeEvent<FormInputEvent>) => {
    const { name, value } = e.target
    setFormInputs({ ...formInputs, [name]: value })
  }

  const handleDateChange = useCallback((date: string) => {
    setDateInput(date)
  }, [])

  const handleSubmit = async (formData: FormData) => {
    formData.append('priority', activePriorityLabel) // adiciona um append ao form e captura o valor do label de prioridade
    await onSubmitForm(formData)
    router.back()
  }

  const dataTaskPreview = useMemo(
    () => ({
      title: formInputs.title,
      description: formInputs.description,
      priority: normalizeForSave(activePriorityLabel) as Priority,
      timestamp: dateInput,
    }),
    [formInputs.title, formInputs.description, activePriorityLabel, dateInput]
  )

  return (
    <>
      <div style={FORM_CONTAINER_STYLES}>
        <form
          action={handleSubmit}
          aria-label="Formulário de criação de tarefa"
        >
          {/* Titulo */}
          <Field.Root>
            <FormLabel fieldType={FormLabelEnum.TITLE} />
            <FormField
              placeholder="Digite o título da tarefa..."
              value={formInputs.title}
              setValue={handleInputChange}
            />
          </Field.Root>
          {/* Descrição */}
          <Field.Root marginTop="24px">
            <FormLabel fieldType={FormLabelEnum.DESCRIPTION} />
            <FormField
              value={formInputs.description}
              setValue={handleInputChange}
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
                  isActive={activePriorityLabel === label}
                  onClick={() => setActivePriorityLabel(label)}
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
      </div>

      <TaskPreview task={dataTaskPreview} />
    </>
  )
}
