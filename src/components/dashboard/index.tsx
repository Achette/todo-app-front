'use client'
import { Activity, ReactNode, useMemo, useState } from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { tabsTitle, TabType } from '@/constants'
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

  // Pré-calcula todas as listas (custo baixo)
  const activeTasks = useMemo(
    () => tasks.filter((task) => !task.completed),
    [tasks]
  )
  const completedTasks = useMemo(
    () => tasks.filter((task) => task.completed),
    [tasks]
  )

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

        {/* Todas as abas */}
        <Activity mode={activeTab === TabType.ALL ? 'visible' : 'hidden'}>
          <TaskBox>
            {tasks.map((task) => (
              <TaskItem key={task.id} task={task} />
            ))}
          </TaskBox>
        </Activity>

        {/* Ativas */}
        <Activity mode={activeTab === TabType.ACTIVE ? 'visible' : 'hidden'}>
          <TaskBox>
            {activeTasks.map((task) => (
              <TaskItem key={task.id} task={task} />
            ))}
          </TaskBox>
        </Activity>

        {/* Concluídas */}
        <Activity mode={activeTab === TabType.COMPLETED ? 'visible' : 'hidden'}>
          <TaskBox>
            {completedTasks.map((task) => (
              <TaskItem key={task.id} task={task} />
            ))}
          </TaskBox>
        </Activity>
      </Box>
      <DeleteModal.Viewport />
    </Container>
  )
}

const TaskBox = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      className="task-scrollbar"
      marginTop="2rem"
      maxH="calc(100vh - 316px)"
      overflowY="auto"
    >
      {children}
    </Box>
  )
}
