export const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
  })
}

export const getYearsOfExperience = (startDate: string): number => {
  const start = new Date(startDate)
  const now = new Date()
  return now.getFullYear() - start.getFullYear()
}
