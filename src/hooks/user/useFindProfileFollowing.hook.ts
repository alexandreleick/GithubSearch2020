import useAxios from 'axios-hooks'
import { AuthenticatedUser } from '../../types/user/authenticated-user.type'
import { useSelector } from 'react-redux'
import { selectUser } from '../../redux/user/selectors'
import { Follower } from '../../types/user/follower-following.type'

const useFindProfileFollowing: Function = () => {
  const user: AuthenticatedUser = useSelector(selectUser)
  const [{ data, loading, error }] = useAxios<Follower[]>({ url: user.following_url.replace('{/other_user}', '') })

  return {
    data,
    loading,
    error,
  }
}

export default useFindProfileFollowing
