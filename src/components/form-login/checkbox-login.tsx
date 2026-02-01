import { Checkbox } from '@chakra-ui/react'

export const RememberMe = () => {
  return (
    <Checkbox.Root variant="solid" colorPalette="purple">
      <Checkbox.HiddenInput />
      <Checkbox.Control
        w="16px"
        h="16px"
        borderRadius="4px"
        border="2px solid"
        borderColor="gray.300"
        _checked={{ borderColor: 'purple600' }}
      />
      <Checkbox.Label color="gray400">Lembrar-me</Checkbox.Label>
    </Checkbox.Root>
  )
}
