import { HttpClient } from './httpClient'

const url = process.env.BASE_URL

export const getAllTasks = async (): Promise<TaskResponse> => {
  const endpoint = `${url}/tasks`

  return HttpClient.request<TaskResponse>(endpoint, { method: 'GET' })
}

export const toggleTaskCompletion  = async (id: number, completed: boolean) => {
  const endpoint = `http://localhost:8080/tasks/${id}`

  return HttpClient.request<TaskResponse>(endpoint, {
    method: 'PATCH',
    body: JSON.stringify({ completed: !completed, userId: 5 }),
  })
}
