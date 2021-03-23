import useSWR from 'swr'

declare global {
  interface Window {
    count: number
  }
}

const useCounter = () => {
  const { data, mutate } = useSWR('state', () => window.count)
  return {
    data: data || 0,
    mutate: (count: number) => {
      window.count = count
      mutate()
    },
  }
}

export default useCounter
