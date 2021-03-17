import useSWR from 'swr'
import axios from 'axios'
import Error from './components/Error'
import Loading from './components/Loading'

interface Props {
  id: number
}

const Profile = ({ id }: Props) => {
  const url = `/api/public/users/${id}`

  // const fetcher = (url: string) => fetch(url).then((res) => res.json())
  const fetcher = (url: string) => axios.get(url).then((res) => res.data)

  const { data, error, isValidating } = useSWR(url, fetcher)

  if (error) return <Error />
  if (isValidating) return <Loading />
  return <div id="hello">hello {data.nickname}!</div>
}

export default Profile
