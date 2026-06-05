'use client'
import { Box, Button, Spinner } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FormInput } from '../form-commons/form-input'
import { FormCommon } from '../form-commons'
import { FormContent } from '@/constants'
import { handleSubmitRegister } from './action'
import { useRouter } from 'next/navigation'
import { toaster } from '../ui/toaster'

export interface FormRegisterInput {
  username: string
  email: string
  password: string
  confirmPassword: string
  acceptTerms: boolean
}

export const FormRegister = () => {
  const {
    register: registerForm,
    handleSubmit: handleSubmit,
    formState: { errors },
  } = useForm<FormRegisterInput>()

  const router = useRouter()

  const onSubmit: SubmitHandler<FormRegisterInput> = async (data) => {
    const formData = new FormData()

    formData.append(FormContent.REGISTER.USERNAME.inputType, data.username)
    formData.append(FormContent.REGISTER.EMAIL.inputType, data.email)
    formData.append(FormContent.REGISTER.PASSWORD.inputType, data.password)
    formData.append(
      FormContent.REGISTER.CONFIRM_PASSWORD.inputType,
      data.confirmPassword
    )

    try {
      const response = await handleSubmitRegister(formData)

      toaster.create({
        title: `Usuário ${response.name} criado com sucesso.`,
        type: 'success',
        duration: 4000,
      })

      router.push('/')
    } catch (e: unknown) {
      if (e instanceof Error) {
        toaster.create({
          title: e.message,
          type: 'error',
          duration: 4000,
        })
      }
    }
  }

  return (
    <FormCommon type="REGISTER">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          formType="REGISTER"
          fieldName="USERNAME"
          register={registerForm}
          errors={errors}
        />
        <FormInput
          formType="REGISTER"
          fieldName="EMAIL"
          register={registerForm}
          errors={errors}
        />
        <FormInput
          formType="REGISTER"
          fieldName="PASSWORD"
          register={registerForm}
          errors={errors}
        />
        <FormInput
          formType="REGISTER"
          fieldName="CONFIRM_PASSWORD"
          register={registerForm}
          errors={errors}
        />

        <Box p="0 2.5rem">
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
            Criar conta
          </Button>
        </Box>
      </form>
    </FormCommon>
  )
}
