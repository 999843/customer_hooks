export function daysOfMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate()
}

export function firstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay()
}
