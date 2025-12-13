'use server'

import { toggleTaskCompletion  } from '@/services'
import { revalidatePath } from 'next/cache'

export const toggleTask = async (id: number, completed: boolean) => {
  await toggleTaskCompletion (id, completed)

  revalidatePath('/tasks')  // função do Nextjs, após a requisição, atualiza a rota '/tasks'
}
