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
  completed: boolean
  updatedAt?: string
}

interface ServerActionResult {
  success: boolean
  title?: string
  error?: string
}

interface AuthLogin {
  access_token: string
  token_type: string
  expires_in: number
}

interface Register {
  name: string
  username: string
  password: string
}

interface LoggedUser {
  created_at: string
  email: string
  id: number
  name: string
  roles: Array<'ROLE_ADMIN' | 'ROLE_CLIENT'>
}
