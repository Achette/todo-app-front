'use client'
import { useMemo, useState } from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { tabsTitle } from '@/constants'
import { Tabs } from '../tabs'
import { TaskItem } from '../task-item'
import { Container } from '../container'
import { DeleteModal } from '../modal'

interface DashTasks {
  tasks: TaskResponse[]
}

export const Dashboard = ({ tasks: initialTasks }: DashTasks) => {
  const [activeTab, setActiveTab] = useState(tabsTitle[0])
  const tasks = initialTasks // para o revalidate funcionar e refazer o getAll no server, devo adicionar uma variavel simples e não um useState

  const filters = [
    () => tasks,
    () => tasks.filter((task) => !task.completed),
    () => tasks.filter((task) => task.completed),
  ]

  const filteredTasks = useMemo(() => {
    const index = tabsTitle.indexOf(activeTab)
    return index !== -1 ? filters[index]() : tasks
  }, [tasks, activeTab])

  return (
    <Container>
      <Box>
        <Flex gap="12px">
          {tabsTitle.map((tab) => (
            <Tabs
              key={tab}
              name={tab}
              isActive={activeTab === tab}
              onClick={() => setActiveTab(tab)}
            />
          ))}
        </Flex>
        <Box
          id="task-scrollbar"
          marginTop="2rem"
          maxH="calc(100vh - 316px)"
          overflowY="auto"
        >
          {filteredTasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </Box>
      </Box>
      <DeleteModal.Viewport />
    </Container>
  )
}
