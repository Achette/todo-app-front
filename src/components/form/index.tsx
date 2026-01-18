'use client'
import { useCallback, useMemo, useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { Field, Flex, Text, Separator } from '@chakra-ui/react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { PriorityLabelForm } from '../priorityLabel/priority-label-form'
import { FormElements } from '@/constants'
import { normalizeForSave } from '@/utils'
import { FormLabel, matchFormLabel } from './form-label'
import { FormField } from './form-input'
import { Calendar } from '../calendar'
import { FormButton } from './form-button'
import { TaskPreview } from '../task-preview'
import { FormTips } from './form-tips'
import {
  FORM_CONTAINER_STYLES,
  FormLabelEnum,
  priorityLabelTab,
} from '@/constants'
import { DeleteModal } from '../modal'
import { toaster } from '../ui/toaster'

type TaskFormProps =
  | {
      mode: 'create'
      onSubmitForm: (formData: FormData) => Promise<ServerActionResult>
      taskData?: never
      onUpdateSubmitForm?: never
    }
  | {
      mode: 'edit'
      onUpdateSubmitForm: (id: number, formData: FormData) => Promise<void>
      taskData: TaskProps
      onSubmitForm?: never
    }

interface FormInputs {
  title: string
  description: string
}

export const TaskForm = ({
  mode,
  onSubmitForm,
  onUpdateSubmitForm,
  taskData,
}: TaskFormProps) => {
  const isEditMode = mode === FormElements.editMode
  const router = useRouter()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInputs>({
    defaultValues: {
      title: isEditMode ? taskData.title : '',
      description: isEditMode ? taskData.description : '',
    },
  })

  const [activePriorityLabel, setActivePriorityLabel] = useState(
    matchFormLabel(isEditMode, taskData)
  )

  const [dateInput, setDateInput] = useState('')

  // Observa os valores dos campos em tempo real
  const titleValue = watch(FormElements.title)
  const descriptionValue = watch(FormElements.description)

  const handleDateChange = useCallback((date: string) => {
    setDateInput(date)
  }, [])

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    const formData = new FormData()

    formData.append(FormElements.title, data.title)
    formData.append(FormElements.description, data.description)
    formData.append(FormElements.priority, activePriorityLabel)
    formData.append(FormElements.dueDate, dateInput)

    if (isEditMode) {
      await onUpdateSubmitForm(taskData.id, formData)
      toaster.create({
        title: 'Tarefa salva com sucesso!',
        description: titleValue,
        type: 'success',
        duration: 5000,
      })
      router.push('/tasks')
    } else {
      const result = await onSubmitForm(formData)

      if (result.success) {
        toaster.create({
          title: 'Tarefa criada com sucesso!',
          description: result.title,
          type: 'success',
          duration: 5000,
        })
        router.push('/tasks')
      } else {
        toaster.create({
          title: 'Erro ao criar tarefa',
          description: result.error,
          type: 'error',
          duration: 5000,
        })
      }
    }
  }

  const dataTaskPreview = useMemo(
    () => ({
      title: titleValue || '',
      description: descriptionValue || '',
      priority: normalizeForSave(activePriorityLabel) as Priority,
      timestamp: dateInput,
    }),
    [titleValue, descriptionValue, activePriorityLabel, dateInput]
  )

  return (
    <>
      <div style={FORM_CONTAINER_STYLES}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          aria-label={FormElements.ariaLabel}
        >
          {/* Titulo */}
          <Field.Root required invalid={!!errors.title}>
            <FormLabel fieldType={FormLabelEnum.TITLE} />
            <FormField
              placeholder={FormElements.titlePlaceholder}
              register={register(FormElements.title, {
                required: FormElements.titleRequired,
                minLength: {
                  value: 3,
                  message: FormElements.titleErrorMessage,
                },
              })}
            />
            <Field.ErrorText>{errors.title?.message}</Field.ErrorText>
          </Field.Root>

          {/* Descrição */}
          <Field.Root marginTop="24px" required invalid={!!errors.description}>
            <FormLabel fieldType={FormLabelEnum.DESCRIPTION} />
            <FormField
              register={register(FormElements.description, {
                required: FormElements.descriptionRequired,
                minLength: {
                  value: 10,
                  message: FormElements.descriptionErrorMessage,
                },
              })}
              as="textarea"
              placeholder={FormElements.descriptionPlaceholder}
              height="180px"
            />
            <Text color="gray400" fontSize="12px">
              {descriptionValue?.length || 0} caracteres
            </Text>
            <Field.ErrorText>{errors.description?.message}</Field.ErrorText>
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
            <FormButton isEditMode={isEditMode} />
          </Flex>

          <Separator borderColor="gray.100" opacity={1} mb="24px" />

          <FormTips
            isEditMode={isEditMode}
            createdData={taskData?.createdAt}
            updatedData={taskData?.updatedAt}
            id={taskData?.id}
            title={taskData?.title}
          />
        </form>
      </div>

      <TaskPreview task={dataTaskPreview} />
      <DeleteModal.Viewport />
    </>
  )
}
