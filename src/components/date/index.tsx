import { Box, Flex, Text } from '@chakra-ui/react'
import { LuCalendar } from 'react-icons/lu'
import { dateFormatter, getDaysLabel } from '@/utils'
import { PriorityLabel } from '../priorityLabel'

interface DateProps {
  timestamp: string
  dueDate: string
  priority: Priority
  completed: boolean
}

export const DateAndPriority = ({
  timestamp,
  dueDate,
  priority,
  completed,
}: DateProps) => {
  const { formattedCreatedAt, formattedDueDate, diffDays } = dateFormatter(
    timestamp,
    dueDate
  )

  const { label, color, bg } = getDaysLabel(diffDays)

  return (
    <Flex w="100%" justifyContent="space-between">
      <Flex
        as="p"
        alignItems="center"
        gap="4px"
        color="gray400"
        fontSize="12px"
      >
        <Box
          as="span"
          display="inline-block"
          w="1.5"
          h="1.5"
          borderRadius="full"
          bg="gray.400"
        />
        <Text>Criada</Text>
        {formattedCreatedAt} &nbsp;
        <Text>Vence</Text>
        <LuCalendar />
        {formattedDueDate} &nbsp;
        <PriorityLabel priority={priority} />
      </Flex>

      {!completed ? (
        <Box bg={bg} p="6px 12px" borderRadius="8px">
          <Text color={color} fontSize="12px" fontWeight={600}>
            {label}
          </Text>
        </Box>
      ) : null}
    </Flex>
  )
}
