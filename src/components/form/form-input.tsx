import { Input, Textarea } from '@chakra-ui/react'
import { UseFormRegisterReturn } from 'react-hook-form'

interface FormFieldProps {
  placeholder: string
  register: UseFormRegisterReturn
  as?: 'input' | 'textarea'
  height?: string
}

export const FormField = ({
  placeholder,
  register,
  as = 'input',
  height,
}: FormFieldProps) => {
  const baseStyle = {
    w: 'full',
    p: '16px 24px',
    borderWidth: '2px',
    borderColor: 'gray.200',
    borderRadius: 'xl',
    _focus: {
      borderColor: 'indigo800',
      outline: 'none',
    },
    transition: 'all 0.2s',
    color: 'gray.800',
    fontWeight: 'medium',
    fontSize: 'lg',
  }

  if (as === 'textarea') {
    return (
      <Textarea
        {...baseStyle}
        {...register}
        height={height ?? '180px'}
        resize="none"
        placeholder={placeholder}
        name="description"
      />
    )
  }

  return (
    <Input
      {...baseStyle}
      {...register}
      height={height ?? '64px'}
      placeholder={placeholder}
      name="title"
    />
  )
}