import useAxios from 'axios-hooks'
import { User } from '../../types/user/user.type'
import { FollowerFollowing } from '../../types/user/follower-following.type'

type UseFindProfileFollowersType = (user: User) => { data: FollowerFollowing[]; loading: boolean; error: any }

const useFindProfileFollowers: UseFindProfileFollowersType = (user: User) => {
  const [{ data, loading, error }] = useAxios<FollowerFollowing[]>({ url: user.followers_url })

  return {
    data,
    loading,
    error,
  }
}

export default useFindProfileFollowers
