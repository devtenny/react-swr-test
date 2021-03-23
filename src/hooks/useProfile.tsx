import useSWR from 'swr'

interface Props {
  id: number
}

const useProfile = ({ id }: Props) => {
  const url = `https://vreview.tv/api/public/users/${id}`
  const fetcher = (url: string) => fetch(url).then((res) => res.json())
  const { data, error, isValidating } = useSWR(url, fetcher, {
    refreshInterval: 10000,
  })

  return { data, error, isValidating }
}

export default useProfile
