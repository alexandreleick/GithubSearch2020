import useAxios from 'axios-hooks'
import { AuthenticatedUser } from '../../types/user/authenticated-user.type'
import { useSelector } from 'react-redux'
import { selectUser } from '../../redux/user/selectors'
import { Follower } from '../../types/user/follower-following.type'

const useFindProfileFollowers: Function = () => {
  const user: AuthenticatedUser = useSelector(selectUser)
  const [{ data, loading, error }] = useAxios<Follower[]>({ url: user.followers_url })

  return {
    data,
    loading,
    error,
  }
}

export default useFindProfileFollowers
