import { PriorityEnum } from '@/constants'
import { Box, Flex, Text } from '@chakra-ui/react'

interface PriorityLabelProps {
  priority: Priority
  size?: string
}

const PRIORITY_LABEL: Record<string, { bg: string }> = {
  ALTA: { bg: 'red500' },
  MEDIA: { bg: 'yellow500' },
  BAIXA: { bg: 'green500' },
}

export const PriorityLabel = ({ priority, size }: PriorityLabelProps) => {
  const { bg } = PRIORITY_LABEL[priority]
  return (
    <Flex alignItems="center" gap="6px">
      <Box
        width={size ?? '8px'}
        height={size ?? '8px'}
        borderRadius="full"
        bg={bg}
      ></Box>
      {!size ? (
        <Text color="gray400" fontSize="12px">
          {PriorityEnum[priority]}
        </Text>
      ) : null}
    </Flex>
  )
}
