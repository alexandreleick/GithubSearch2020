import React from 'react'
import { Repository } from '../../../types/repositories/repository.type'
import { Text } from 'react-native'

type RepositoryDetailsProps = {
  repo: Repository
}

const RepositoryDetails: React.FC<RepositoryDetailsProps> = (props: RepositoryDetailsProps) => {
  const { repo } = props

  return <Text>{repo.name}</Text>
}

export default RepositoryDetails
