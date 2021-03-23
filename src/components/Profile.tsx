import Error from './Error'
import Loading from './Loading'
import useProfile from '../hooks/useProfile'

interface Props {
  id: number
}

const Profile = ({ id }: Props) => {
  const { data, error, isValidating } = useProfile({ id })

  if (error) return <Error />
  if (isValidating) return <Loading />
  return <div id="hello">hello {data.nickname}!</div>
}

export default Profile
