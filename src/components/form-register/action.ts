'use server'

import { authService } from '@/services/auth-service'
import { getRegisterFormData } from '@/utils'

export async function handleSubmitRegister(
  formData: FormData
): Promise<Register> {
  try {
    const { username, password, confirmPassword, email } =
      getRegisterFormData(formData)

    /*     if (!acceptTerms) {
      return { success: false, error: 'Você deve aceitar os termos para continuar' }
    } */

    if (password !== confirmPassword) {
      throw new Error('As senhas não coincidem')
    }

    const response = await authService.register(username, email, password)

    return response
  } catch (e) {
    throw new Error('Erro ao cadastrar novo usuário')
  }
}
