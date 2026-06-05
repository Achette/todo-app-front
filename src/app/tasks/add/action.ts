'use server'
import { updateTag, revalidatePath } from 'next/cache'
// import { redirect } from 'next/navigation'
import { createNewTask } from '@/services'
import { getFormData } from '@/utils'

export async function handleSubmitForm(
  formData: FormData
): Promise<ServerActionResult> {
  try {
    const { title, description, normalizedPriority, createdAt, dueDate } =
      getFormData(formData)

    await createNewTask(
      title,
      description,
      normalizedPriority,
      createdAt,
      dueDate
    )

    revalidatePath('/tasks') // Garante que a lista seja atualizada

    return { success: true, title }
  } catch (error) {
    return { success: false, error: 'Erro ao criar tarefa' }
  }
}
