import useAxios from 'axios-hooks'
import { GithubResponse } from '../../types/github-response.type'
import { SearchRepository } from '../../types/search/search-repository.type'
import { AxiosPromise } from 'axios'

type UseRepoSearchType = () => {
  data: GithubResponse<SearchRepository[]>
  loading: boolean
  error: any
  dispatchRepoSearch: (repoName: string) => AxiosPromise<GithubResponse<SearchRepository[]>>
}

const useRepoSearch: UseRepoSearchType = () => {
  const [{ data, loading, error }, execute] = useAxios<GithubResponse<SearchRepository[]>>({}, { manual: true })

  const dispatchRepoSearch = (repoName: string) => execute({ url: `/search/repositories?q=${repoName}` })

  return {
    data,
    loading,
    error,
    dispatchRepoSearch,
  }
}

export default useRepoSearch
