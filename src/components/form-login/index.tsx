'use client'

import { Box, Button } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FormInput } from '../form-commons/form-input'
import { FormContent } from '@/constants'
import { handleSubmitLoginForm, saveAuthTokenCookie } from './action'
import { useRouter } from 'next/navigation'
import { toaster } from '../ui/toaster'
import { FormCommon } from '../form-commons'
import { authService } from '@/services/auth-service'
import { saveToSessionStorage } from '@/utils/sessionStorage'

export interface FormLoginInput {
  email: string
  password: string
  name: string
}

export const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormLoginInput>()

  const router = useRouter()

  const onSubmit: SubmitHandler<FormLoginInput> = async (data) => {
    const formData = new FormData()

    formData.append(FormContent.LOGIN.EMAIL.inputType, data.email)
    formData.append(FormContent.LOGIN.PASSWORD.inputType, data.password)

    const response: AuthLogin = await handleSubmitLoginForm(formData)

    if (!response.access_token) {
      toaster.create({
        title: `Usuário ou senha incorretos.`,
        type: 'error',
        duration: 4000,
      })
      return
    }

    toaster.create({
      title: `Usuário autenticado!`,
      type: 'success',
      duration: 4000,
    })

    await saveAuthTokenCookie(response.access_token, response.expires_in)

    router.push('/tasks')
  }

  return (
    <FormCommon type="LOGIN">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          formType="LOGIN"
          fieldName="EMAIL"
          register={register}
          errors={errors}
        />
        <FormInput
          formType="LOGIN"
          fieldName="PASSWORD"
          register={register}
          errors={errors}
        />

        <Box p="0 3rem">
          <Button
            type="submit"
            w="full"
            h="56px"
            bg="linear-gradient(to right, #4f46e5, #9333ea)"
            color="white"
            fontWeight="semibold"
            py={4}
            borderRadius="12px"
            boxShadow="2px 2px 8px rgba(0, 0, 0, 0.2)"
            transition="all 0.2s ease"
            my="20px"
            _hover={{
              bg: 'linear-gradient(to right, #4338ca, #7e22ce)',
            }}
          >
            Entrar
          </Button>
        </Box>
      </form>
    </FormCommon>
  )
}
