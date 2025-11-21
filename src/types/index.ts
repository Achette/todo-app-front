type Priority = 'HIGH' | 'MEDIUM' | 'LOW'

type TaskResponse = {
  id: number
  title: string
  description: string
  completed: boolean
  createdAt: string
  priority: Priority
  userId: number
}[]