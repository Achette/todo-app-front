'use client'

import { Button } from '@chakra-ui/react'
import { removeAuthTokenCookie } from './action'
import { LuLogOut } from 'react-icons/lu'

export const LogoutButton = () => {
  const handleLogout = async () => {
    await removeAuthTokenCookie()
  }

  return (
    <Button
      onClick={handleLogout}
      variant="outline"
      size="sm"
      color="gray400"
      borderColor="indigo100"
      borderRadius="8px"
      fontWeight="normal"
      fontSize="sm"
      padding="0 8px"
      gap={2}
      _hover={{
        bg: 'bgActive',
        borderColor: 'indigo800',
        color: 'indigo800',
      }}
      transition="all 0.2s ease"
    >
      <LuLogOut size={15} />
      Sair
    </Button>
  )
}
