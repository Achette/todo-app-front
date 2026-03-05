import { Box } from '@chakra-ui/react'

export const DecorativeBackgroundCards = () => {
  return (
    <Box
      position="absolute"
      inset={0}
      overflow="hidden"
      pointerEvents="none"
      opacity={0.4}
      zIndex={0}
    >
      <Box
        position="relative"
        top="80px"
        left="40px"
        w="288px"
        h="192px"
        bg="white"
        borderRadius="24px"
        boxShadow="2px 2px 8px rgba(0, 0, 0, 0.2)"
        transform="rotate(-6deg)"
      />
      <Box
        position="absolute"
        bottom="128px"
        right="80px"
        w="256px"
        h="160px"
        bg="white"
        borderRadius="24px"
        boxShadow="2px 2px 8px rgba(0, 0, 0, 0.2)"
        transform="rotate(3deg)"
      />
      <Box
        position="absolute"
        top="50%"
        left="25%"
        w="224px"
        h="128px"
        bg="white"
        borderRadius="24px"
        boxShadow="2px 2px 8px rgba(0, 0, 0, 0.2)"
        transform="rotate(-3deg)"
      />
    </Box>
  )
}
