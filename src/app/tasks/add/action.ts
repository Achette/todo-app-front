'use server'
import { createNewTask } from '@/services'
import { getFormData } from '@/utils'
import { redirect } from 'next/navigation'

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

  redirect('/tasks')
}
