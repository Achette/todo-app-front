import { Flex } from '@chakra-ui/react'
import React from 'react'
import { DecorativeBackgroundCards } from '../decorative-cards'
import { CheckIcon } from '@/assets'
import { Descritive } from '../descritive-text'
import { FormLogin } from '../form-login'
import { HeaderTypeEnum } from '@/constants'

export const AccountContainer = ({
  children,
}: {
  children: React.ReactElement
}) => {
  const type = HeaderTypeEnum.DEFAULT

  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      p={6}
      position="relative"
      flexDir="column"
    >
      <DecorativeBackgroundCards />

      <Flex
        flexDir="column"
        align="center"
        justify="center"
        gap="1rem"
        zIndex={100}
      >
        <CheckIcon />

        <Descritive type={type} />
      </Flex>

      {children}
    </Flex>
  )
}
