import useAxios from 'axios-hooks'
import { User } from '../../types/user/user.type'
import { FollowerFollowing } from '../../types/user/follower-following.type'

type UseFindProfileFollowingType = (user: User) => { data: FollowerFollowing[]; loading: boolean; error: any }

const useFindProfileFollowing: UseFindProfileFollowingType = (user: User) => {
  const [{ data, loading, error }] = useAxios<FollowerFollowing[]>({
    url: user.following_url.replace('{/other_user}', ''),
  })

  return {
    data,
    loading,
    error,
  }
}

export default useFindProfileFollowing
