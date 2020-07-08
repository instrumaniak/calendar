// get all events
export const fetchEvents = async () => {
  const response = await fetch('/api/events')
  const data = await response.json()
  return data
}
