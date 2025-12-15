export const dateFormatter = (created: string, due: string) => {
  const createdDate = new Date(created)
  createdDate.setHours(0, 0, 0, 0)

  const dueDate = new Date(due)
  dueDate.setHours(0, 0, 0, 0)

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const diffTime = dueDate.getTime() - today.getTime()
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  return {
    formattedCreatedAt: formatDate(createdDate),
    formattedDueDate: formatDate(dueDate),
    diffDays,
  }
}

const formatDate = (date: Date) =>
  date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
  })

export const getDaysLabel = (days: number) => {
  const conditions = [
    {
      condition: days < 0,
      label: `${Math.abs(days)}d atrasado`,
      color: 'red600',
      bg: 'bgRed50',
    },
    {
      condition: days === 0,
      label: 'Vence hoje',
      color: 'orange600',
      bg: 'bgOrange50',
    },
    {
      condition: days === 1,
      label: 'Vence amanhã',
      color: 'yellow600',
      bg: 'bgYellow50',
    },
    {
      condition: days <= 3,
      label: `${days} dias`,
      color: 'yellow600',
      bg: 'bgYellow50',
    },
    {
      condition: days <= 7,
      label: `${days} dias`,
      color: 'blue600',
      bg: 'bgBlue50',
    },
  ]

  for (let item of conditions) {
    if (item.condition)
      return {
        label: item.label,
        color: item.color,
        bg: item.bg,
      }
  }

  return {
    label: `${days} dias`,
    color: 'gray600',
    bg: 'bgGray50',
  }
}
