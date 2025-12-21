'use server'
import { createNewTask } from '@/services'
import { revalidatePath } from 'next/cache'
import { getFormData } from '@/utils'

export async function handleSubmitForm(formData: FormData) {
  const { title, description, normalizedPriority, createdAt, dueDate } =
    getFormData(formData)

  await createNewTask(
    title,
    description,
    normalizedPriority,
    createdAt,
    dueDate
  )

  revalidatePath('/tasks')
}
