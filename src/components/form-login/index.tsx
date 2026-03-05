import {
  Box,
  Flex,
  Text,
  Link as ChackraLink,
  Button,
  Separator,
} from '@chakra-ui/react'
import { FormInputLogin } from './form-input-login'
import { RememberMe } from './checkbox-login'

export const FormLogin = () => {
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
    color: 'gray.400',
    _focus: { outline: 'none', boxShadow: 'none' },
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
      mt="32px"
      flexDir="column"
      zIndex={100}
    >
      <Box bg="white" p="2rem 2rem 0 2rem">
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

        <FormInputLogin type="EMAIL" />
        <FormInputLogin type="PASSWORD" />

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
