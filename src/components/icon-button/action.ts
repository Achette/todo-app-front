'use server'

import { updateTag } from 'next/cache'
import { redirect } from 'next/navigation'
import { deleteTaskById } from '@/services'

export const deleteTask = async (id: number, isEditMode?: boolean) => {
  await deleteTaskById(id)

  updateTag('tasks')

  if (isEditMode) redirect('/tasks')
}
