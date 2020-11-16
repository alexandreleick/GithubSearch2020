import React from 'react'
import { useRoute } from '@react-navigation/native'
import RepoRenderer from '../../components/Repository/RepoRenderer'

const RepoScreen: React.FC = () => {
  const { params } = useRoute()

  return <RepoRenderer fetchRepoUrl={params['repoUrl']} />
}

export default RepoScreen
