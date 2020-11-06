import useAxios from 'axios-hooks'
import { AuthenticatedUser } from '../../types/user/authenticated-user.type'
import { useSelector } from 'react-redux'
import { selectUser } from '../../redux/user/selectors'
import { Repository } from '../../types/repositories/repository.type'

const useFindProfileRepositories: Function = () => {
  const user: AuthenticatedUser = useSelector(selectUser)
  const [{ data, loading, error }] = useAxios<Repository[]>({ url: user.repos_url + '?type=all' })

  return {
    data,
    loading,
    error,
  }
}

export default useFindProfileRepositories
