import useAxios from 'axios-hooks'
import { Repository } from '../../types/repositories/repository.type'
import { Contributor } from '../../types/user/contributor.type'

type UseFindRepositoryContributorsType = (repo: Repository) => { data: Contributor[]; loading: boolean; error: any }

const useFindRepositoryContributors: UseFindRepositoryContributorsType = (repo: Repository) => {
  const [{ data, loading, error }] = useAxios<Contributor[]>({
    url: repo.contributors_url,
    headers: { Authorization: false },
  })

  return {
    data,
    loading,
    error,
  }
}

export default useFindRepositoryContributors
