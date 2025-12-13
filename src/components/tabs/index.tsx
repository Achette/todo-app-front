import { Button } from '@chakra-ui/react'

export interface TabProps {
  name: string
  isActive: boolean
  onClick: () => void
}

export const Tabs = ({ name, isActive, onClick }: TabProps) => {
  return (
    <Button
      onClick={onClick}
      fontSize="1rem"
      padding="12px 24px"
      borderRadius="8px"
      bg={isActive ? 'white1000' : 'transparent'}
      color={isActive ? 'indigo800' : 'gray800'}
      fontWeight={700}
      _hover={{
        boxShadow: '2px 2px 8px rgba(0 , 0, 0 , 0.2)',
      }}
    >
      {name}
    </Button>
  )
}
