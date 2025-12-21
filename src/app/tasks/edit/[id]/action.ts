'use server'
import { createNewTask, updateTask } from '@/services'
import { revalidatePath } from 'next/cache'
import { getFormData } from '@/utils'

export async function handleUpdateForm(id: number, formData: FormData) {
  const { title, description, normalizedPriority, createdAt, dueDate } =
    getFormData(formData)

  const updatedFields = {
    title,
    description,
    priority: normalizedPriority,
    createdAt,
    dueDate,
  }

  await updateTask(id, updatedFields)

  revalidatePath('/tasks')
}
