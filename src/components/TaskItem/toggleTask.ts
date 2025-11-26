'use server'

import { onChangeCheckbox } from '@/services'
import { revalidatePath } from 'next/cache'

export const toggleTask = async (id: number, completed: boolean) => {
  await onChangeCheckbox(id, completed)

  revalidatePath('/tasks')  // função do Nextjs, após a requisição, atualiza a rota '/tasks'
}
