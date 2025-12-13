import { Input, Textarea } from '@chakra-ui/react'
import { ChangeEvent, Dispatch, SetStateAction } from 'react'

interface FormFieldProps {
  placeholder: string
  value: string
  setValue: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  as?: 'input' | 'textarea'
  height?: string
}

export const FormField = ({
  placeholder,
  value,
  setValue,
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
      borderColor: 'indigo600',
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
        height={height ?? '180px'}
        resize="none"
        placeholder={placeholder}
        name="description"
        value={value}
        onChange={(e) => setValue(e)}
      />
    )
  }

  return (
    <Input
      {...baseStyle}
      height={height ?? '64px'}
      placeholder={placeholder}
      name="title"
      value={value}
      onChange={(e) => setValue(e)}
    />
  )
}
