import useAxios from 'axios-hooks'

const useUserSearch: Function = () => {
  const [{ data, loading, error }, execute] = useAxios({}, { manual: true })

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
