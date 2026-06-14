'use client'
import { useEffect, useState } from 'react'
import { getFromSessionStorage } from '@/utils/sessionStorage'
import { Avatar, HStack, Stack, Text } from '@chakra-ui/react'

export const PersonalAvatar = () => {
  const [user, setUser] = useState<{ username: string; name: string } | null>(
    null
  )

  useEffect(() => {
    setUser(getFromSessionStorage('user'))
  }, [])

  return (
    <HStack>
      <Avatar.Root size="xl" bg="linear-gradient(to right, #4f46e5, #9333ea)">
        <Avatar.Fallback name="Tulio Bereta" />
      </Avatar.Root>
      <Stack gap="0">
        <Text fontWeight="medium" color="gray800">
          {user?.name ?? 'Usuário'}
        </Text>
        <Text color="gray600" textStyle="xs">
          {user?.username ?? ''}
        </Text>
      </Stack>
    </HStack>
  )
}
