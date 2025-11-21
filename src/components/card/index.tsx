import { Text, VStack } from '@chakra-ui/react'

interface ResumeCardProps {
  taskStatus: 'active' | 'done'
  taskCount: string | number,

}

const CARD_STYLE: Record<string, { bg: string; color: string; label: string }> =
  {
    active: {
      bg: 'bgActive',
      color: 'indigo800',
      label: 'Ativas',
    },
    done: {
      bg: 'bgDone',
      color: 'green400',
      label: 'Concluídas',
    },
  }

export const ResumeCard = ({ taskStatus, taskCount }: ResumeCardProps) => {
  const { bg, color, label } = CARD_STYLE[taskStatus] || CARD_STYLE.active
  return (
    <VStack
      bgColor={bg}
      alignItems="center"
      justifyContent="center"
      px="24px"
      py="12px"
      borderRadius="12px"
    >
      <Text color={color} fontWeight={700} fontSize="24px" lineHeight="32px">
        {taskCount}
      </Text>
      <Text color={color} fontWeight={500} fontSize="12px" lineHeight="16px">
        {label}
      </Text>
    </VStack>
  )
}
