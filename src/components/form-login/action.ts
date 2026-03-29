'use server'

import { getLoginFormData } from "@/utils"

export async function handleSubmitLoginForm(formData: FormData): Promise<any> {
    try {
        const { email, password} = getLoginFormData(formData)

        console.log('email', email, 'password', password)

    } catch (e) {
        return { success: false, error: 'Erro ao autenticar usuário' }
    }
}