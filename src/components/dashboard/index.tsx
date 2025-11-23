'use client'
import { Box, Flex, Text } from '@chakra-ui/react'
import { Tabs } from '../tabs'
import { tabsTitle } from '../tabs/tabs'
import { useState } from 'react'

interface DashTasks {
  tasks: TaskResponse
}

export const Dashboard = ({ tasks }: DashTasks) => {
  const [activeTab, setActiveTab] = useState(tabsTitle[0])

  return (
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

      {/* TODO: Refatorar a exibição das tasks */}
      <Box>
        {tasks.map((task) => (
          <Text key={task.id} color="gray400">
            {task.title}
          </Text>
        ))}
      </Box>
    </Box>
  )
}
