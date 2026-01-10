'use client'
import {
  Box,
  Button,
  Dialog,
  Flex,
  Portal,
  createOverlay,
} from '@chakra-ui/react'
import { LuTriangleAlert } from 'react-icons/lu'
import { toaster } from '../ui/toaster'

interface DeleteModalProps {
  title: string
  onConfirm: () => void
}

export const DeleteModal = createOverlay<DeleteModalProps>((props) => {
  const { title, onConfirm, ...rest } = props

  const handleDeleteTask = () => {
    try {
      onConfirm()

      toaster.create({
        title: 'Tarefa excluída com sucesso!',
        description: title,
        type: 'success',
        duration: 5000,
      })
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Erro ao apagar tarefa.'

      toaster.create({
        title: errorMessage,
        type: 'error',
        duration: 5000,
      })
    }
  }

  return (
    <Dialog.Root {...rest}>
      <Portal>
        <Dialog.Backdrop bg="transparent" backdropFilter="blur(2px)" />
        <Dialog.Positioner alignItems="center">
          <Dialog.Content
            bg="white1000"
            borderRadius="20px"
            maxW="500px"
            mx={4}
            overflow="hidden"
            border="2px solid"
            borderColor="gray.300"
            boxShadow="none"
          >
            {/* Header com ícone */}
            <Dialog.Header
              pt={8}
              pb={4}
              px={8}
              w="auto"
              display="flex"
              flexDir="column"
              alignItems="center"
              gap={3}
            >
              <Box
                w="56px"
                h="56px"
                borderRadius="16px"
                bgColor="bgRed50"
                display="flex"
                alignItems="center"
                justifyContent="center"
                color="red.600"
                flexShrink={0}
              >
                <LuTriangleAlert size={28} strokeWidth={2.5} />
              </Box>

              <Dialog.Title
                fontSize="xl"
                fontWeight="bold"
                color="gray800"
                mb={1}
              >
                Deseja excluir a tarefa?
              </Dialog.Title>
            </Dialog.Header>

            {/* Body */}
            <Dialog.Body px={8} pb={6}>
              <Dialog.Description
                p={4}
                mt={1}
                fontSize="lg"
                fontWeight={600}
                color="gray400"
                textAlign="center"
                borderRadius="12px"
                bg="bgBray50"
                border="1px solid"
                borderColor="gray.200"
              >
                {title}
              </Dialog.Description>
            </Dialog.Body>

            {/* Footer */}
            <Dialog.Footer
              px={4}
              pb={4}
              display="flex"
              borderTop="2px solid"
              borderTopColor="gray.100"
              mt={2}
            >
              <Flex
                w="100%"
                h="100%"
                mt={4}
                justifyContent="space-around"
                alignItems="center"
              >
                <Button
                  px={8}
                  py={6}
                  borderRadius="12px"
                  fontWeight="semibold"
                  color="gray.700"
                  bg="white"
                  border="2px solid"
                  borderColor="gray.200"
                  _hover={{
                    bg: 'gray.50',
                    borderColor: 'gray.300',
                  }}
                  transition="all 0.2s ease"
                  onClick={() => DeleteModal.close('a')}
                >
                  Cancelar
                </Button>

                <Button
                  onClick={() => {
                    handleDeleteTask()
                    rest.onExitComplete?.()
                  }}
                  px={8}
                  py={6}
                  borderRadius="12px"
                  fontWeight="semibold"
                  color="white"
                  background="linear-gradient(135deg, #DC2626 0%, #B91C1C 100%)"
                  _hover={{
                    background:
                      'linear-gradient(135deg, #B91C1C 0%, #991B1B 100%)',
                  }}
                  transition="all 0.2s ease"
                >
                  Sim, excluir
                </Button>
              </Flex>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
})
