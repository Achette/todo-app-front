'use server'
import { updateTag } from 'next/cache'
import { redirect } from 'next/navigation'
import { updateTask } from '@/services'
import { getFormData } from '@/utils'

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

  updateTag('tasks')

  redirect('/tasks')
}
