import React from 'react'
import { Flex } from '@chakra-ui/react'
import { GradientBackground } from '../animated-background'

export const AccountContainer = ({
  children,
}: {
  children: React.ReactElement
}) => {
  return (
    <GradientBackground>
      <Flex
        minH="100vh"
        align="center"
        justify="center"
        position="relative"
        flexDir="column"
      >
        <Flex
          flexDir="column"
          align="center"
          justify="center"
          gap="1rem"
          zIndex={100}
        ></Flex>
        {children}
      </Flex>
    </GradientBackground>
  )
}
