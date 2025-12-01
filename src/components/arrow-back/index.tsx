'use client'

import { Box } from '@chakra-ui/react'
import { LuArrowLeft } from 'react-icons/lu'
import { useRouter } from 'next/navigation'

export const ArrowBack = () => {
  const router = useRouter()

  return (
    <Box
      color="gray800"
      fontSize="24px"
      cursor="pointer"
      onClick={() => router.back()}
    >
      <LuArrowLeft />
    </Box>
  )
}
