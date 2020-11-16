import useAxios from 'axios-hooks'
import { Repository } from '../../types/repositories/repository.type'
import { Issue } from '../../types/issues/issue.type'

type UseFindRepositoryIssuesType = (repo: Repository) => { data: Issue[]; loading: boolean; error: any }

const useFindRepositoryIssues: UseFindRepositoryIssuesType = (repo: Repository) => {
  const [{ data, loading, error }] = useAxios<Issue[]>({
    url: repo.issues_url.replace('{/number}', '') + '?state=all',
    headers: { Authorization: false },
  })

  return {
    data,
    loading,
    error,
  }
}

export default useFindRepositoryIssues
