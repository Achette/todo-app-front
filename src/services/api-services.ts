import { HttpClient } from './httpClient'

const url = process.env.BASE_URL

export const getAllTasks = async (): Promise<TaskResponse> => {
  const endpoint = `${url}/tasks`

  return HttpClient.request<TaskResponse>(endpoint, { method: 'GET' })
}
