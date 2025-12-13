import { memo, useRef, useState } from 'react'
import { Box, Text, Icon } from '@chakra-ui/react'
import { LuCalendar } from 'react-icons/lu'

interface CalendarProps {
  onDateChange?: (date: string) => void
}

export const Calendar = memo(({ onDateChange }: CalendarProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const [date, setDate] = useState(() => {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    return tomorrow.toISOString().split('T')[0]
  })

  const getTodayDate = () => {
    const today = new Date()
    return today.toISOString().split('T')[0]
  }

  const handleIconClick = () => {
    if (inputRef.current) {
      inputRef.current.showPicker()
    }
  }

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value
    setDate(selectedDate)
    onDateChange?.(selectedDate)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString + 'T00:00:00')
    const day = date.getDate()
    const month = date.toLocaleDateString('pt-BR', { month: 'short' })
    return `${day} de ${month}`
  }

  return (
    <Box
      bg="linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(168, 85, 247, 0.05) 100%)"
      borderRadius="2xl"
      p={6}
      border="2px solid"
      borderColor="indigo100"
    >
      <Box
        bg="white"
        borderRadius="xl"
        px={4}
        py={2}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb={4}
      >
        <input
          ref={inputRef}
          name="dueDate"
          type="date"
          min={getTodayDate()}
          value={date}
          onChange={handleDateChange}
          style={{
            border: 'none',
            outline: 'none',
            padding: 0,
            fontWeight: '500',
            fontSize: '18px',
            color: '#1F2937',
            fontFamily: 'inherit',
            backgroundColor: 'transparent',
            width: '100%',
            cursor: 'pointer',
          }}
        />
        <Icon
          as={LuCalendar}
          color="gray.400"
          boxSize={5}
          cursor="pointer"
          onClick={handleIconClick}
        />
      </Box>

      <Box textAlign="center">
        <Text fontSize="12px" fontWeight={700} color="indigo800" mb={1}>
          Vencimento em
        </Text>
        <Text fontSize="24px" fontWeight="bold" color="indigo800">
          {formatDate(date)}
        </Text>
      </Box>
    </Box>
  )
})
