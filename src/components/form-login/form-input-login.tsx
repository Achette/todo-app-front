'use client'

import { FormElementsLogin, FormInputType } from '@/constants'
import { Field, Input, InputGroup } from '@chakra-ui/react'
import { LuMail, LuLock } from 'react-icons/lu'

interface FormInputProps {
  type: keyof typeof FormInputType
}

export const FormInputLogin = ({ type }: FormInputProps) => {
  const { label, placeholder, inputType, icon: Icon } = FormElementsLogin[type]
 

  const inputGroupStyle = {
    h: '3.5rem',
    p: '0 16px',
    border: '2px solid',
    borderColor: 'gray.200',
    borderRadius: '12px',
    transition: 'border-color 0.2s ease',
    _focusWithin: { borderColor: 'indigo.600' },
  }

  const inputStyle = {
    border: 'none',
    color: 'gray400',
    _focus: { outline: 'none', boxShadow: 'none' },
  }

  return (
    <Field.Root>
      <Field.Label color="gray400" fontWeight={700}>
        {label}
      </Field.Label>
      <InputGroup startElement={<Icon />} {...inputGroupStyle} mb="1rem">
        <Input
          {...inputStyle}
          type={inputType}
          placeholder={placeholder}
          name={inputType}
        />
      </InputGroup>
    </Field.Root>
  )
}
