import useAxios from 'axios-hooks'
import { GithubResponse } from '../../types/github-response.type'
import { UserSearchResult } from '../../types/user/user-search-result.type'

const useUserSearch: Function = () => {
  const [{ data, loading, error }, execute] = useAxios<GithubResponse<UserSearchResult[]>>({}, { manual: true })

  // Execute the request with the url and given parameter
  const dispatchRequest = (username: string) => execute({ url: `/search/users?q=${username}` })

  return {
    data,
    loading,
    error,
    dispatchRequest,
  }
}

export default useUserSearch
