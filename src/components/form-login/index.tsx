'use client'

import {
  Box,
  Flex,
  Text,
  Link as ChackraLink,
  Button,
  Separator,
} from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FormInputLogin } from './form-input-login'
import { RememberMe } from './checkbox-login'
import { Descritive } from '../descritive-text'
import { FormElementsLogin, HeaderTypeEnum } from '@/constants'
import { handleSubmitLoginForm } from './action'

export interface FormLoginInput {
  email: string
  password: string
}

export const FormLogin = ({
  elementsType,
}: {
  elementsType: keyof typeof HeaderTypeEnum
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormLoginInput>()

  const onSubmit: SubmitHandler<FormLoginInput> = async (data) => {
    const formData = new FormData()

    formData.append(FormElementsLogin.EMAIL.inputType, data.email)
    formData.append(FormElementsLogin.PASSWORD.inputType, data.password)

    handleSubmitLoginForm(formData)
  }

  return (
    <Flex
      maxWidth="444px"
      w="100%"
      h="auto"
      bg="gray.100"
      borderRadius="24px"
      boxShadow="4px 4px 8px rgba(0, 0, 0, 0.2)"
      border="4px solid gray.300"
      overflow="hidden"
      flexDir="column"
      zIndex={100}
    >
      <Flex flexDir="column" alignItems="center" pt="1rem" mb="0.5rem">
        <Descritive type={elementsType} />
      </Flex>

      <Separator width="100%" borderWidth="1px" borderColor="gray.200" />

      <Box bg="white" p="1.25rem 2rem 0 2rem">
        <Box mb="2rem">
          <Text
            color="gray800"
            fontWeight={800}
            fontSize="1.5rem"
            textAlign="center"
          >
            Bem-vindo de volta!
          </Text>
          <Text color="gray400" textAlign="center">
            Entre com sua conta para continuar
          </Text>
        </Box>

        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInputLogin type="EMAIL" register={register} errors={errors} />
          <FormInputLogin type="PASSWORD" register={register} errors={errors} />
          <Flex justify="space-between">
            <RememberMe />
            <ChackraLink
              variant="plain"
              fontSize="sm"
              fontWeight="semibold"
              color="indigo800"
              textDecor="none"
              transition="color 0.2s ease"
              _hover={{
                color: 'purple600',
              }}
            >
              Esqueceu a senha?
            </ChackraLink>
          </Flex>
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
        </form>
      </Box>

      <Separator borderWidth="1px" borderColor="gray.200" />

      <Flex h="70px" justify="center" align="center" gap="8px" fontSize="14px">
        <Text color="gray400">Não tem uma conta?</Text>
        <ChackraLink
          color="indigo800"
          fontWeight={600}
          textDecor="none"
          _hover={{
            color: 'purple600',
          }}
        >
          Cadastre-se
        </ChackraLink>
      </Flex>
    </Flex>
  )
}
