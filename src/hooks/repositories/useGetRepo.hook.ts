import useAxios from 'axios-hooks'
import { Repository } from '../../types/repositories/repository.type'

type UseGetRepoType = () => {
  data: Repository
  loading: boolean
  error: any
  dispatchGetRepo: (RepoUrl: string) => Promise<any>
}

const useGetRepo: UseGetRepoType = () => {
  const [{ data, loading, error }, execute] = useAxios<Repository>({}, { manual: true })

  const dispatchGetRepo = (RepoUrl: string) => execute({ url: RepoUrl })

  return {
    data,
    loading,
    error,
    dispatchGetRepo,
  }
}

export default useGetRepo
