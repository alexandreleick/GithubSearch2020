import { Repository } from '../../../types/repositories/repository.type'
import React from 'react'
import { Text } from 'react-native'

type RepositoryHeaderProps = {
  repo: Repository
}

const RepositoryHeader: React.FC<RepositoryHeaderProps> = (props: RepositoryHeaderProps) => {
  const { repo } = props

  return <Text>{repo.name}</Text>
}

export default RepositoryHeader
