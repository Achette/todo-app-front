import {
  Box,
  Flex,
  Separator,
  Text,
  Link as ChakraLink,
} from '@chakra-ui/react'
import { Descritive } from '../descritive-text'
import { CommonFormText, HeaderTypeEnum } from '@/constants'

type CommonFormProps = {
  children: React.ReactElement
  type: 'LOGIN' | 'REGISTER'
}

export const FormCommon = ({ children, type }: CommonFormProps) => {
  const { heading, slogan, accountTip, redirectText, redirect } =
    CommonFormText[type]

  return (
    <Flex
      maxWidth="440px"
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
        <Descritive type={HeaderTypeEnum.DEFAULT} />
      </Flex>

      <Separator width="100%" borderWidth="1px" borderColor="gray.200" />

      <Box pt="1.5rem" bgColor="white">
        <Text
          color="gray800"
          fontWeight={800}
          fontSize="1.5rem"
          textAlign="center"
        >
          {heading}
        </Text>
        <Text color="gray400" textAlign="center">
          {slogan}
        </Text>
      </Box>
      <Box bg="white" p="1.25rem 2rem 0 2rem">
        {children}
      </Box>
      <Separator width="100%" borderWidth="1px" borderColor="gray.200" />

      <Flex m="1.5rem 0" justifyContent="center">
        <Text color="gray600" fontSize="0.9rem">
          {`${accountTip} `}
          <ChakraLink
            href={redirect}
            color="indigo800"
            fontWeight={600}
            _hover={{
              textDecoration: 'underline',
            }}
          >
            {redirectText}
          </ChakraLink>
        </Text>
      </Flex>
    </Flex>
  )
}
