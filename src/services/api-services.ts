import { HttpClient } from './httpClient'

const url = process.env.BASE_URL

export const getAllTasks = async (): Promise<TaskResponse> => {
  const endpoint = `${url}/tasks`

  return HttpClient.request<TaskResponse>(endpoint, { method: 'GET' })
}

export const createNewTask = async (
  title: string,
  description: string,
  priority: string,
  createdAt: string,
  dueDate: string
): Promise<TaskResponse> => {
  const endpoint = `${url}/tasks`

  return HttpClient.request<TaskResponse>(endpoint, {
    method: 'POST',
    body: JSON.stringify({
      userId: 5,
      completed: false,
      title,
      description,
      priority,
      createdAt: createdAt,
      dueDate: dueDate
    }),
  })
}

export const toggleTaskCompletion = async (id: number, completed: boolean) => {
  const endpoint = `${url}/tasks/${id}`

  return HttpClient.request<TaskResponse>(endpoint, {
    method: 'PATCH',
    body: JSON.stringify({ completed: !completed, userId: 5 }),
  })
}
