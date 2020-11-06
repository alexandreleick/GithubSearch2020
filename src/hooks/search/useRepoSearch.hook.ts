import useAxios from 'axios-hooks'
import { GithubResponse } from '../../types/github-response.type'
import { UserSearchResult } from '../../types/user/user-search-result.type'

const UseRepoSearch: Function = () => {
  const [{ data, loading, error }, execute] = useAxios<GithubResponse<UserSearchResult[]>>({}, { manual: true })

  const dispatchRepo = (repoName: string) => execute({ url: `/search/repositories?q=${repoName}` })

  return {
    data,
    loading,
    error,
    dispatchRepo,
  }
}

export default UseRepoSearch
