import { Repository } from '../../../types/repositories/repository.type'
import React from 'react'
import { Text } from 'react-native'
import {
  FollowerCard,
  LeftRepoPart,
  RepoName,
  RepoPart,
  RepositoryCard,
  Stat,
  StatDescription,
  StatisticsPart,
  StatValue,
} from './RepositoryHeader.styled'
import { Avatar } from '@ui-kitten/components'
import { useNavigation } from '@react-navigation/native'

type RepositoryHeaderProps = {
  repo: Repository
}

const RepositoryHeader: React.FC<RepositoryHeaderProps> = (props: RepositoryHeaderProps) => {
  const { repo } = props
  const { navigate } = useNavigation()

  const isPrivate = (is_private: boolean) => {
    if (!is_private) return 'This repository is public'
    return 'This repository is private'
  }

  const isFork = (is_fork: boolean) => {
    if (!is_fork) return 'This is not a Fork'
    return 'This is a Fork'
  }

  return (
    <RepositoryCard>
      <RepoPart>
        <LeftRepoPart>
          <RepoName>{repo.name}</RepoName>
        </LeftRepoPart>
        <Stat>
          <FollowerCard>
            <Avatar source={{ uri: repo.owner.avatar_url, cache: 'force-cache' }} />
            <Text>{repo.owner.login}</Text>
          </FollowerCard>
        </Stat>
      </RepoPart>
      <StatisticsPart>
        <Stat>
          <StatDescription>Fork</StatDescription>
          <StatValue>{isFork(repo.private)}</StatValue>
        </Stat>
      </StatisticsPart>
      <StatisticsPart>
        <Stat>
          <StatDescription>Private / Public</StatDescription>
          <StatValue>{isPrivate(repo.private)}</StatValue>
        </Stat>
      </StatisticsPart>
      <StatisticsPart>
        <Stat>
          <StatDescription>Size</StatDescription>
          <StatValue>{repo.size} MB</StatValue>
        </Stat>
      </StatisticsPart>
      <StatisticsPart>
        <Stat>
          <StatDescription>Branch</StatDescription>
          <StatValue>{repo.default_branch}</StatValue>
        </Stat>
      </StatisticsPart>
      <Stat style={{ marginTop: 10 }}>
        <StatDescription>Description</StatDescription>
        <StatValue>{repo.description}</StatValue>
      </Stat>
      <StatisticsPart>
        <Stat>
          <StatDescription>Languages</StatDescription>
          <StatValue>{repo.language}</StatValue>
        </Stat>
      </StatisticsPart>
    </RepositoryCard>
  )
}

export default RepositoryHeader
