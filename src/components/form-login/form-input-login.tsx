'use client'

import { FormElementsLogin, FormInputType } from '@/constants'
import { Field, Input, InputGroup, Text } from '@chakra-ui/react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { FormLoginInput } from '.'

interface FormInputProps {
  type: keyof typeof FormInputType
  register: UseFormRegister<FormLoginInput>
  errors: FieldErrors<FormLoginInput>
}

export const FormInputLogin = ({ type, register, errors }: FormInputProps) => {
  const {
    label,
    placeholder,
    inputType,
    icon: Icon,
    required,
  } = FormElementsLogin[type]

  const inputGroupStyle = {
    h: '3.5rem',
    p: '0 16px',
    border: '2px solid',
    borderColor: 'gray.200',
    borderRadius: '12px',
    transition: 'border-color 0.2s ease',
    _focusWithin: {
      borderColor: 'indigo800',
      outline: 'none',
    },
  }

  const inputStyle = {
    border: 'none',
    color: 'gray400',
    _focus: {
      borderColor: 'indigo800',
      outline: 'none',
    },
  }

  return (
    <Field.Root height="118px">
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
      {errors[inputType]?.message && (
        <Text color="red600" fontSize="12px">
          {errors[inputType]?.message}
        </Text>
      )}
    </Field.Root>
  )
}
