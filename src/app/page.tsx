import { CheckIcon } from '@/assets'
import { DecorativeBackgroundCards, Descritive } from '@/components'
import { FormLogin } from '@/components/form-login'
import { HeaderTypeEnum } from '@/constants'
import { Flex } from '@chakra-ui/react'

export default function Home() {
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

      <Flex flexDir="column" align="center" justify="center" gap="1rem">
        <CheckIcon />

        <Descritive type={type} />
      </Flex>

      <FormLogin />
    </Flex>
  )
}
