import useAxios from 'axios-hooks'
import { User } from '../../types/user/user.type'
import { Repository } from '../../types/repositories/repository.type'

type UseFindProfileRepositoriesType = (user: User) => { data: Repository[]; loading: boolean; error: any }

const useFindProfileRepositories: UseFindProfileRepositoriesType = (user: User) => {
  const [{ data, loading, error }] = useAxios<Repository[]>({ url: user.repos_url + '?type=all' })

  return {
    data,
    loading,
    error,
  }
}

export default useFindProfileRepositories
