import useAxios from 'axios-hooks'
import { Repository } from '../../types/repositories/repository.type'
import { Issue } from '../../types/issues/issue.type'
import { useEffect } from 'react'

type UseFindRepositoryIssuesType = (repo: Repository) => { data: Issue[]; loading: boolean; error: any }

const useFindRepositoryIssues: UseFindRepositoryIssuesType = (repo: Repository) => {
  const [{ data, loading, error }] = useAxios<Issue[]>({
    url: repo.issues_url.replace('{/number}', ''),
    headers: { Authorization: false },
  })

  useEffect(() => {
    console.log(repo.issues_url.replace('{/number}', ''))
    console.log(error)
  }, [data, error])

  return {
    data,
    loading,
    error,
  }
}

export default useFindRepositoryIssues
