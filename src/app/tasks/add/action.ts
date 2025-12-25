'use server'
import { updateTag } from 'next/cache'
import { redirect } from 'next/navigation'
import { createNewTask } from '@/services'
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

  updateTag('tasks')

  redirect('/tasks')
}
