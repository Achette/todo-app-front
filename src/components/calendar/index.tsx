import { memo, useState } from 'react'
import {
  Box,
  Text,
  DatePicker,
  Portal,
  parseDate,
  DatePickerValueChangeDetails,
} from '@chakra-ui/react'
import { LuCalendar } from 'react-icons/lu'

interface CalendarProps {
  onDateChange?: (date: string) => void
}

export const Calendar = memo(({ onDateChange }: CalendarProps) => {
  const [date, setDate] = useState<string>(() => {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    return tomorrow.toISOString().split('T')[0]
  })

  const getTodayDate = () => {
    const today = new Date()
    return today.toISOString().split('T')[0]
  }

  const handleDateChange = (details: DatePickerValueChangeDetails) => {
    const dateValue = details.value[0] // já vem como YYYY-MM-DD
    const formattedDate = convertDateArray(dateValue)
    if (!formattedDate) return
    setDate(formattedDate)
    onDateChange?.(formattedDate)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString + 'T00:00:00')
    const day = date.getDate()
    const month = date.toLocaleDateString('pt-BR', { month: 'short' })
    return `${day} de ${month}`
  }

  const convertDateArray = (dateValue: DatePicker.DateValue) => {
    return `${dateValue.year}-${String(dateValue.month).padStart(2, '0')}-${String(dateValue.day).padStart(2, '0')}`
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
        border="2px solid transparent"
        _focusWithin={{ border: '2px solid', borderColor: 'indigo800' }}
      >
        <DatePicker.Root
          locale="pt-BR"
          value={[parseDate(date)]}
          onValueChange={handleDateChange}
          min={parseDate(getTodayDate())}
        >
          <DatePicker.Control>
            <DatePicker.Input
              name="dueDate"
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
              _focusVisible={{ border: '2px solid red' }}
            />
            <DatePicker.IndicatorGroup>
              <DatePicker.Trigger>
                <LuCalendar />
              </DatePicker.Trigger>
            </DatePicker.IndicatorGroup>
          </DatePicker.Control>
          <Portal>
            <DatePicker.Positioner>
              <DatePicker.Content>
                <DatePicker.View view="day">
                  <DatePicker.Header />
                  <DatePicker.DayTable />
                </DatePicker.View>
                <DatePicker.View view="month">
                  <DatePicker.Header />
                  <DatePicker.MonthTable />
                </DatePicker.View>
                <DatePicker.View view="year">
                  <DatePicker.Header />
                  <DatePicker.YearTable />
                </DatePicker.View>
              </DatePicker.Content>
            </DatePicker.Positioner>
          </Portal>
        </DatePicker.Root>
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
