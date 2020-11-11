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

  return (
    <RepositoryCard>
      <Avatar source={{ uri: repo.owner.avatar_url, cache: 'force-cache' }} />
    </RepositoryCard>
  )
}

export default RepositoryHeader
