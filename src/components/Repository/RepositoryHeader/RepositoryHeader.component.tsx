import { Repository } from '../../../types/repositories/repository.type'
import React from 'react'
import { Text } from 'react-native'
import { RepositoryCard } from './RepositoryHeader.styled'
import { Avatar } from '@ui-kitten/components'

type RepositoryHeaderProps = {
  repo: Repository
}

const RepositoryHeader: React.FC<RepositoryHeaderProps> = (props: RepositoryHeaderProps) => {
  const { repo } = props

  const isPrivate = (is_private: boolean) => {
    if (!is_private) return 'Non'
    return 'Oui'
  }

  const isFork = (is_fork: boolean) => {
    if (!is_fork) return 'Non'
    return 'Oui'
  }

  return (
    <RepositoryCard>
      <Text>{repo.name}</Text>
      <Text>{repo.size}</Text>
      <Text>{isPrivate(repo.private)}</Text>
      <Text>{repo.description}</Text>
      <Text>{isFork(repo.private)}</Text>
      <Text>{repo.default_branch}</Text>
    </RepositoryCard>
  )
}

export default RepositoryHeader
