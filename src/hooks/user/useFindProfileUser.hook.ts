import useAxios from 'axios-hooks'
import { GithubResponse } from '../../types/github-response.type'
import { UserSearchResult } from '../../types/user/user-search-result.type'

const useFindProfileUser: Function = () => {
  const [{ data, loading, error }, execute] = useAxios<GithubResponse<UserSearchResult[]>>({}, { manual: true })

  // Execute the request with the url and given parameter
  const dispatchRequest = () => execute({ url: `/user` })

  return {
    data,
    loading,
    error,
    dispatchRequest,
  }
}

export default useFindProfileUser
