import { Flex, Text } from '@chakra-ui/react'
import { LuCalendar } from 'react-icons/lu'

interface DateProps {
  timestamp: string
}

export const DateFormatter = ({ timestamp }: DateProps) => {
  const date = new Date(timestamp)
  const formattedDate = date.toLocaleDateString('pt-Br')

  return (
    <Flex as="p" alignItems="center" gap="4px" color="gray400" fontSize="12px">
      <LuCalendar />
      {formattedDate}
    </Flex>
  )
}
