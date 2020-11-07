import useAxios from 'axios-hooks'
import { User } from '../../types/user/user.type'
import { AxiosPromise } from 'axios'

type UseFindProfileUserType = () => {
  data: User
  loading: boolean
  error: any
  dispatchFindProfile: () => AxiosPromise<User>
}

const useFindProfileUser: UseFindProfileUserType = () => {
  const [{ data, loading, error }, execute] = useAxios<User>({}, { manual: true })

  // Execute the request with the url and given parameter
  const dispatchFindProfile = () => execute({ url: `/user` })

  return {
    data,
    loading,
    error,
    dispatchFindProfile,
  }
}

export default useFindProfileUser
