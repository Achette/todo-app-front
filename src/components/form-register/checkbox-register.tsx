'use client'

import { Checkbox, Flex, Text, Box } from '@chakra-ui/react'
import { LuUserCheck } from 'react-icons/lu'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { FormRegisterInput } from '.'

interface CheckboxRegisterProps {
  register: UseFormRegister<FormRegisterInput>
  errors: FieldErrors<FormRegisterInput>
}

export const CheckboxRegister = ({ register, errors }: CheckboxRegisterProps) => {
  const { label } = {
    label: 'Terminei de aceitar a responsabilidade',
  }

  return (
    <Box mt="1.5rem" p="1rem" bg="gray.50" borderRadius="12px">
      <Flex alignItems="center" justifyContent="space-between">
        <Flex alignItems="center" gap="0.75rem">
          <LuUserCheck />
          <Text color="gray700" fontSize="0.95rem">
            {label}
          </Text>
        </Flex>
        <Checkbox.Root variant="solid" colorPalette="indigo">
          <Checkbox.HiddenInput />
          <Checkbox.Control
            w="16px"
            h="16px"
            borderRadius="4px"
            border="2px solid"
            borderColor="gray.300"
            _checked={{ borderColor: 'indigo600' }}
          />
          {errors.acceptTerms?.message && (
            <Text color="red600" fontSize="12px" ml="0.5rem">
              {errors.acceptTerms?.message}
            </Text>
          )}
        </Checkbox.Root>
      </Flex>
    </Box>
  )
}
