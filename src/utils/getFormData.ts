import { FormContent, FormElements } from '@/constants'
import { normalizeForSave } from './normalize'

export const getFormData = (formData: FormData) => {
  const title = formData.get(FormElements.title) as string
  const description = formData.get(FormElements.description) as string

  const priority = formData.get(FormElements.priority) as string
  const normalizedPriority = normalizeForSave(priority)

  const createdAtDate = new Date()
  const createdAt = createdAtDate.toISOString()

  const date = formData.get(FormElements.dueDate) as string
  const dueDate = date
    ? new Date(date + 'T00:00:00').toISOString()
    : new Date(createdAtDate.setDate(createdAtDate.getDate() + 1)).toISOString()

  return { title, description, normalizedPriority, createdAt, dueDate }
}

export const getLoginFormData = (formData: FormData) => {
  const email = formData.get(FormContent.LOGIN.EMAIL.inputType) as string
  const password = formData.get(FormContent.LOGIN.PASSWORD.inputType) as string

  return { email, password }
}

export const getRegisterFormData = (formData: FormData) => {
  const username = formData.get(
    FormContent.REGISTER.USERNAME.inputType
  ) as string

  const email = formData.get(FormContent.REGISTER.EMAIL.inputType) as string

  const password = formData.get(
    FormContent.REGISTER.PASSWORD.inputType
  ) as string

  const confirmPassword = formData.get(
    FormContent.REGISTER.CONFIRM_PASSWORD.inputType
  ) as string

/*   const acceptTerms =
    formData.get(FormContent.REGISTER.CONFIRM_PASSWORD.inputType) === 'on' */

  return { username, email, password, confirmPassword }
}
