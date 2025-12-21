'use server'
import { createNewTask } from '@/services'
import { revalidatePath } from 'next/cache'
import { normalizeForSave } from '@/utils'

export async function handleSubmitForm(formData: FormData) {
  const title = formData.get('title') as string
  const description = formData.get('description') as string

  const priority = formData.get('priority') as string
  const normalizedPriority = normalizeForSave(priority)

  const date = formData.get('dueDate') as string
  const dueDate = new Date(date + 'T00:00:00').toISOString()

  const createdAd = new Date().toISOString()

  await createNewTask(
    title,
    description,
    normalizedPriority,
    createdAd,
    dueDate
  )

  revalidatePath('/tasks')
}
