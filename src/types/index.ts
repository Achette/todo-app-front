type Priority = 'ALTA' | 'MEDIA' | 'BAIXA'

type TaskResponse = {
  id: number
  title: string
  description: string
  completed: boolean
  createdAt: string
  dueDate: string
  updatedAt?: string
  priority: Priority
  userId: number
}

interface TaskProps {
  id: number
  title: string
  description: string
  priority: string
  createdAt: string
  dueDate: string
  updatedAt?: string
}

interface ServerActionResult {
  success: boolean
  title?: string
  error?: string
}

interface AuthLogin {
  token: string
  username: string
  roles: string[]
}
