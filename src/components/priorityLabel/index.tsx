import { Box, Flex, Text } from '@chakra-ui/react'

interface PriorityLabelProps {
  priority: 'HIGH' | 'MEDIUM' | 'LOW'
}

const PRIORITY_LABEL: Record<string, { bg: string }> = {
  HIGH: { bg: 'red500' },
  MEDIUM: { bg: 'yellow500' },
  LOW: { bg: 'green500' },
}

export const PriorityLabel = ({ priority }: PriorityLabelProps) => {
  const { bg } = PRIORITY_LABEL[priority]
  return (
    <Flex alignItems="center" gap="6px">
      <Box width="8px" height="8px" borderRadius="full" bg={bg}></Box>
      <Text color="gray400" fontSize="12px">
        {priority.charAt(0).toUpperCase() + priority.slice(1).toLowerCase()}
      </Text>
    </Flex>
  )
}
