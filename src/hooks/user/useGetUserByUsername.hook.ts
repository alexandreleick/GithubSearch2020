import useAxios from 'axios-hooks'
import { User } from '../../types/user/user.type'

type UseGetUserByUsernameType = () => {
  data: User
  loading: boolean
  error: any
  dispatchGetUser: (username: string) => Promise<any>
}

const useGetUserByUsername: UseGetUserByUsernameType = () => {
  const [{ data, loading, error }, execute] = useAxios<User>({}, { manual: true })

  const dispatchGetUser = (username: string) => execute({ url: '/users/' + username })

  return {
    data,
    loading,
    error,
    dispatchGetUser,
  }
}

export default useGetUserByUsername
