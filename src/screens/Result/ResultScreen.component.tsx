import React from 'react'
import { useRoute } from '@react-navigation/native'

const ResultScreen: React.FC = () => {
  const { params } = useRoute()

  return <RepoRenderer repo={null} fetchRepoUrl={params['repoUrl']} />
}

export default ResultScreen
