import useAxios from 'axios-hooks'
import { Repository } from '../../types/repositories/repository.type'
import { Contributor } from '../../types/user/contributor.type'

type UseFindRepositoryIssuesType = (repo: Repository) => { data: Contributor[]; loading: boolean; error: any }

const useFindRepositoryIssues: UseFindRepositoryIssuesType = (repo: Repository) => {
  const [{ data, loading, error }] = useAxios<Contributor[]>({
    url: repo.issues_url,
    headers: { Authorization: false },
  })

  return {
    data,
    loading,
    error,
  }
}

export default useFindRepositoryIssues
