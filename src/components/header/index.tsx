import { Box, Flex, Text } from '@chakra-ui/react'
import { HeaderDescription, HeaderTypeEnum } from '@/constants'
import { ResumeCard } from '../card'
import { AddButton } from '../add-button'
import { Container } from '../container'
import { ArrowBack } from '../arrow-back'

interface HeaderProps {
  counters?: { active: number; done: number }
  type?: keyof typeof HeaderTypeEnum
}
export const Header = ({
  counters,
  type = HeaderTypeEnum.DEFAULT,
}: HeaderProps) => {
  let active, done

  if (counters) {
    active = counters.active
    done = counters.done
  }

  const { title, description } = HeaderDescription[type]

  const shouldShowButton = type === HeaderTypeEnum.DEFAULT ? true : false

  return (
    <Box bg="white200" borderBottom="2px solid #f3f4f6" height="auto">
      <Container>
        <Flex justifyContent="space-between" alignItems="center">
          <Flex alignItems="center" gap="1rem">
            {type !== HeaderTypeEnum.DEFAULT ? <ArrowBack /> : null}

            <Box>
              <Text
                fontSize="40px"
                fontWeight={800}
                bg="linear-gradient(90deg, #4f46e5, #9333ea)"
                bgClip="text"
              >
                {title}
              </Text>
              <Text color="gray400" fontSize="18px" marginTop="-8px">
                {description}
              </Text>
            </Box>
          </Flex>
          {type === HeaderTypeEnum.DEFAULT ? (
            <Flex gap="20px">
              <ResumeCard taskCount={active} taskStatus="active" />
              <ResumeCard taskCount={done} taskStatus="done" />
            </Flex>
          ) : null}
          <AddButton isVisible={shouldShowButton} />
        </Flex>
      </Container>
    </Box>
  )
}
