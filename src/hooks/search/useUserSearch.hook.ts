import useAxios from 'axios-hooks'
import { GithubResponse } from '../../types/github-response.type'
import { SearchUser } from '../../types/search/search-user.type'
import { AxiosPromise } from 'axios'

type UseUserSearchType = () => {
  data: GithubResponse<SearchUser[]>
  loading: boolean
  error: any
  dispatchUserSearch: (username: string) => AxiosPromise<GithubResponse<SearchUser[]>>
}

const useUserSearch: UseUserSearchType = () => {
  const [{ data, loading, error }, execute] = useAxios<GithubResponse<SearchUser[]>>({}, { manual: true })

  // Execute the request with the url and given parameter
  const dispatchUserSearch = (username: string) => execute({ url: `/search/users?q=${username}` })

  return {
    data,
    loading,
    error,
    dispatchUserSearch,
  }
}

export default useUserSearch
