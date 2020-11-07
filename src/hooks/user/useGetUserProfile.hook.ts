import useAxios from 'axios-hooks'
import { User } from '../../types/user/user.type'

type UseGetUserProfileType = () => {
  data: User
  loading: boolean
  error: any
  dispatchGetUser: (profileUrl: string) => Promise<any>
}

const useGetUserProfile: UseGetUserProfileType = () => {
  const [{ data, loading, error }, execute] = useAxios<User>({}, { manual: true })

  const dispatchGetUser = (profileUrl: string) => execute({ url: profileUrl })

  return {
    data,
    loading,
    error,
    dispatchGetUser,
  }
}

export default useGetUserProfile
