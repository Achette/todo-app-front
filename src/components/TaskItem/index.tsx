'use client'
import { useTransition } from 'react'
import { Checkbox, Flex, HStack, Text } from '@chakra-ui/react'
import { PriorityLabel } from '../priorityLabel'
import { DateFormatter } from '../date'
import { IconButton } from '../icon-button'
import { toggleTask } from './toggleTask'

export interface TaskProps {
  id: number
  title: string
  description: string
  completed: boolean
  createdAt: string
  priority: Priority
  userId: number
}

interface TaskItemProps {
  task: TaskProps
}

export const TaskItem = ({ task }: TaskItemProps) => {
  const [pending, startTransition] = useTransition()

  return (
    <Flex
      width="calc(100% - 0.5rem)"
      flexDirection="row"
      alignItems="center"
      gap="1rem"
      bg="white1000"
      marginBottom="12px"
      borderRadius="16px"
      padding="20px 24px"
      boxShadow="2px 2px 8px rgba(0, 0, 0, 0.2)"
      border="2px solid"
      borderColor="transparent"
      transition="all 0.2s"
      _hover={{
        boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.3)',
      }}
    >
      <Checkbox.Root
        checked={task.completed}
        variant="solid"
        colorPalette="green"
        disabled={pending}
      >
        <Checkbox.HiddenInput />
        <Checkbox.Control
          cursor="pointer"
          flexShrink={0}
          width="24px"
          height="24px"
          borderRadius="8px"
          border="2px solid"
          borderColor={task.completed ? 'green400' : 'gray400'}
          transition="all 0.2s"
          bgGradient={
            task.completed
              ? 'linear(to-r, green500, emerald500)'
              : 'transparent'
          }
          onClick={() =>
            startTransition(() => toggleTask(task.id, task.completed))
          }
          opacity={pending ? 0.6 : 1}
        />
      </Checkbox.Root>

      <HStack width="100%" justifyContent="space-between">
        <Flex flexDirection="column">
          <Text
            color="gray800"
            fontWeight={700}
            fontSize="1rem"
            mb="8px"
            textDecoration={task.completed ? 'line-through' : 'none'}
            opacity={task.completed ? 0.6 : 1}
          >
            {task.title}
          </Text>
          <Text
            color="gray400"
            mb="8px"
            textDecoration={task.completed ? 'line-through' : 'none'}
            opacity={task.completed ? 0.6 : 1}
          >
            {task.description}
          </Text>

          <Flex gap="12px">
            <DateFormatter timestamp={task.createdAt} />
            <PriorityLabel priority={task.priority} />
          </Flex>
        </Flex>

        <Flex color="gray400" fontSize="16px">
          <IconButton type="EDIT" />
          <IconButton type="DELETE" />
        </Flex>
      </HStack>
    </Flex>
  )
}
