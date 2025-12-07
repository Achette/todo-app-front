import { Button, Flex } from '@chakra-ui/react'
import { TabProps } from '../tabs'
import { PriorityLabel } from '.'

const PRIORITY_LABEL_COLOR_SCHEMES: Record<
  string,
  {
    bg: string
    borderColor: string
    color: string
    label: Priority
  }
> = {
  Baixa: {
    borderColor: 'green.500',
    bg: 'green.50',
    color: 'green.700',
    label: 'BAIXA',
  },
  Média: {
    borderColor: 'yellow.500',
    bg: 'yellow.50',
    color: 'yellow.700',
    label: 'MEDIA',
  },
  Alta: {
    borderColor: 'red.500',
    bg: 'red.50',
    color: 'red.700',
    label: 'ALTA',
  },
}

export const PriorityLabelForm = ({ name, isActive, onClick }: TabProps) => {
  const { bg, borderColor, color, label } = PRIORITY_LABEL_COLOR_SCHEMES[name]

  return (
    <Button
      onClick={onClick}
      w="full"
      px={6}
      py={4}
      mb="8px"
      h="auto"
      borderRadius="xl"
      borderWidth="2px"
      borderColor={isActive ? borderColor : 'gray.200'}
      bg={isActive ? bg : 'white'}
      color={isActive ? color : 'gray.600'}
      fontWeight={700}
      transition="all 0.2s"
      textAlign="left"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      _hover={{
        borderColor: `${isActive ? borderColor : 'gray.300'}`,
      }}
    >
      <Flex w="100%" justifyContent="space-between">
        {name}
        {isActive ? <PriorityLabel priority={label} size="12px" /> : null}
      </Flex>
    </Button>
  )
}
