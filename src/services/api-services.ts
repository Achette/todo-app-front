'use server'

import { getAuthToken } from '@/utils'
import { HttpClient } from './httpClient'

const url = process.env.BASE_URL
const REQUEST_TIMEOUT = 5000

export const getAllTasks = async (): Promise<TaskResponse[]> => {
  const endpoint = `${url}/tasks`
  const headers = await buildHeaders()

  return HttpClient.request<TaskResponse[]>(
    endpoint,
    {
      headers,
      method: 'GET',
      next: { tags: ['tasks'] },
      cache: 'no-store',
    },
    REQUEST_TIMEOUT
  )
}

export const getTaskById = async (id: number): Promise<TaskResponse> => {
  const endpoint = `${url}/tasks/${id}`
  const headers = await buildHeaders()

  return HttpClient.request<TaskResponse>(
    endpoint,
    {
      headers,
      method: 'GET',
    },
    REQUEST_TIMEOUT
  )
}

export const createNewTask = async (
  title: string,
  description: string,
  priority: string,
  createdAt: string,
  dueDate: string
): Promise<TaskResponse> => {
  const endpoint = `${url}/tasks`
  const headers = await buildHeaders()

  return HttpClient.request<TaskResponse>(
    endpoint,
    {
      headers,
      method: 'POST',
      body: JSON.stringify({
        completed: false,
        title,
        description,
        priority,
        createdAt,
        dueDate,
      }),
    },
    REQUEST_TIMEOUT
  )
}

export const toggleTaskCompletion = async (id: number, completed: boolean) => {
  const endpoint = `${url}/tasks/${id}`
  const headers = await buildHeaders()

  return HttpClient.request<TaskResponse>(
    endpoint,
    {
      headers,
      method: 'PATCH',
      body: JSON.stringify({ completed: !completed }),
    },
    REQUEST_TIMEOUT
  )
}

export const updateTask = async (
  id: number,
  updatedTask: Partial<TaskProps>
) => {
  const endpoint = `${url}/tasks/${id}`
  const headers = await buildHeaders()

  return HttpClient.request<TaskResponse>(
    endpoint,
    {
      headers,
      method: 'PATCH',
      body: JSON.stringify({ ...updatedTask }),
    },
    REQUEST_TIMEOUT
  )
}

export const deleteTaskById = async (id: number) => {
  const endpoint = `${url}/tasks/${id}`
  const headers = await buildHeaders()

  return HttpClient.request<TaskResponse>(
    endpoint,
    { headers, method: 'DELETE' },
    REQUEST_TIMEOUT
  )
}

const buildHeaders = async () => {
  const token = await getAuthToken()
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }

  return headers
}
