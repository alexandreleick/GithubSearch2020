import { FollowerFollowing } from '../../types/user/follower-following.type'
import useAxios from 'axios-hooks'
import { Repository } from '../../types/repositories/repository.type'

type UseFindRepositoryContributorsType = (
  repo: Repository,
) => { data: FollowerFollowing[]; loading: boolean; error: any }

const useFindRepositoryContributors: UseFindRepositoryContributorsType = (repo: Repository) => {
  const [{ data, loading, error }] = useAxios<FollowerFollowing[]>({ url: repo.contributors_url })

  return {
    data,
    loading,
    error,
  }
}

export default useFindRepositoryContributors
