import { normalizeForSave } from './normalize'

export const getFormData = (formData: FormData) => {
  const title = formData.get('title') as string
  const description = formData.get('description') as string

  const priority = formData.get('priority') as string
  const normalizedPriority = normalizeForSave(priority)

  const createdAt = new Date().toISOString()

  const date = formData.get('dueDate') as string
  const dueDate = new Date(date + 'T00:00:00').toISOString()

  return { title, description, normalizedPriority, createdAt, dueDate }
}
