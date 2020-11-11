import React from 'react'
import { useRoute } from '@react-navigation/native'
import RepoRenderer from '../../components/Repository/RepoRenderer'

const ResultScreen: React.FC = () => {
  const { params } = useRoute()

  return <RepoRenderer repo={null} fetchRepoUrl={params['repoUrl']} />
}

export default ResultScreen
