'use server'
import { updateTask } from '@/services'
import { getFormData } from '@/utils'
import { redirect } from 'next/navigation'

export async function handleUpdateForm(id: number, formData: FormData) {
  const { title, description, normalizedPriority, createdAt, dueDate } =
    getFormData(formData)

  const updatedFields = {
    title,
    description,
    priority: normalizedPriority,
    updatedAt: createdAt,
    dueDate,
  }

  await updateTask(id, updatedFields)

  redirect('/tasks')
}
