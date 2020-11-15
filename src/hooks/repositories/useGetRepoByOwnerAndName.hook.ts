import useAxios from 'axios-hooks'
import { Repository } from '../../types/repositories/repository.type'

type UseGetRepoByOwnerAndNameType = () => {
  data: Repository
  loading: boolean
  error: any
  dispatchGetRepo: (ownerName: string, repoName: string) => Promise<any>
}

const useGetRepoByOwnerAndName: UseGetRepoByOwnerAndNameType = () => {
  const [{ data, loading, error }, execute] = useAxios<Repository>({}, { manual: true })

  const dispatchGetRepo = (ownerName: string, repoName: string) =>
    execute({ url: '/repos/' + ownerName + '/' + repoName })

  return {
    data,
    loading,
    error,
    dispatchGetRepo,
  }
}

export default useGetRepoByOwnerAndName
