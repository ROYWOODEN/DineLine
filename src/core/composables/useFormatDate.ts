export function useFormatDate(dateValue: string) {
  const date = new Date(dateValue)
  if (isNaN(date.getTime())) {
    return 'Неверная дата'
  }

  const day = date.getDate()
  const month = date.toLocaleDateString('ru-RU', { month: 'long' })
  return `${day} ${month}`
}
