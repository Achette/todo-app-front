'use server'

import { authService } from '@/services/auth-service'
import { getLoginFormData } from '@/utils'
import { cookies } from 'next/headers'

export async function handleSubmitLoginForm(formData: FormData): Promise<any> {
  try {
    const { email, password } = getLoginFormData(formData)

    const data = await authService.userLogin(email, password)

    return data
  } catch (e) {
    return { success: false, error: 'Erro ao autenticar usuário' }
  }
}

export async function saveAuthTokenCookie(token: string, expires: number) {
  const cookieStore = await cookies()
  cookieStore.set('authToken', token, {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    maxAge: expires
  })
}
