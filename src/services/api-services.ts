'use server'

import { HttpClient } from './httpClient'
import { cookies } from 'next/headers'

const url = process.env.BASE_URL

const getAuthToken = async (): Promise<string | undefined> => {
  const cookieStore = await cookies()
  return cookieStore.get('authToken')?.value
}

export const getAllTasks = async (): Promise<TaskResponse[]> => {
  const endpoint = `${url}/tasks`
  const token = await getAuthToken()

  return HttpClient.request<TaskResponse[]>(endpoint, {
    method: 'GET',
    next: { tags: ['tasks'] },
    cache: 'no-store'
  }, 5000, token)
}

export const getTaskById = async (id: number): Promise<TaskResponse> => {
  const endpoint = `${url}/tasks/${id}`
  const token = await getAuthToken()

  return HttpClient.request<TaskResponse>(endpoint, { method: 'GET' }, 5000, token)
}

export const createNewTask = async (
  title: string,
  description: string,
  priority: string,
  createdAt: string,
  dueDate: string
): Promise<TaskResponse> => {
  const endpoint = `${url}/tasks`
  const token = await getAuthToken()

  return HttpClient.request<TaskResponse>(endpoint, {
    method: 'POST',
    body: JSON.stringify({
      userId: 5,
      completed: false,
      title,
      description,
      priority,
      createdAt: createdAt,
      dueDate: dueDate,
    }),
  }, 5000, token)
}

export const toggleTaskCompletion = async (id: number, completed: boolean) => {
  const endpoint = `${url}/tasks/${id}`
  const token = await getAuthToken()

  return HttpClient.request<TaskResponse>(endpoint, {
    method: 'PATCH',
    body: JSON.stringify({ completed: !completed, userId: 5 }),
  }, 5000, token)
}

export const updateTask = async (
  id: number,
  updatedTask: Partial<TaskProps>
) => {
  const endpoint = `${url}/tasks/${id}`
  const token = await getAuthToken()

  return HttpClient.request<TaskResponse>(endpoint, {
    method: 'PATCH',
    body: JSON.stringify({ ...updatedTask, userId: 5 }),
  }, 5000, token)
}

export const deleteTaskById = async (id: number) => {
  const endpoint = `${url}/tasks/${id}`
  const token = await getAuthToken()

  return HttpClient.request<TaskResponse>(endpoint, { method: 'DELETE' }, 5000, token)
}
