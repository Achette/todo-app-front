'use client'

import { Field, Input, InputGroup, Text } from '@chakra-ui/react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { FormContent } from '@/constants'
import { inputGroupStyle, inputStyle } from './styles'

type LoginFields = 'EMAIL' | 'PASSWORD'
type RegisterFields = 'USERNAME' | 'EMAIL' | 'PASSWORD' | 'CONFIRM_PASSWORD'

interface FormInputPropsLogin {
  formType: 'LOGIN'
  fieldName: LoginFields
  register: UseFormRegister<any>
  errors: FieldErrors<any>
}

interface FormInputPropsRegister {
  formType: 'REGISTER'
  fieldName: RegisterFields
  register: UseFormRegister<any>
  errors: FieldErrors<any>
}

type FormInputProps = FormInputPropsLogin | FormInputPropsRegister

export const FormInput = ({
  formType,
  fieldName,
  register,
  errors,
}: FormInputProps) => {
  const fieldConfig = (FormContent[formType] as any)[fieldName]

  if (!fieldConfig) {
    console.warn(`Field ${fieldName} not found in FormContent.${formType}`)
    return null
  }

  const {
    label,
    placeholder,
    inputType,
    icon: Icon,
    required,
  } = fieldConfig

  const errorMessage = (errors as any)[inputType]?.message as string | undefined

  return (
    <Field.Root height="104px">
      <Field.Label color="gray400" fontWeight={700}>
        {label}
      </Field.Label>
      <InputGroup startElement={<Icon />} {...inputGroupStyle}>
        <Input
          {...inputStyle}
          type={inputType}
          placeholder={placeholder}
          {...register(inputType, {
            required: required,
          })}
        />
      </InputGroup>
      {errorMessage && (
        <Text color="red600" fontSize="12px">
          {errorMessage}
        </Text>
      )}
    </Field.Root>
  )
}
