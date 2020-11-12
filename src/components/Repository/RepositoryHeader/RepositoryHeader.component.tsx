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
import { Avatar, IconProps, Icon, Tab } from '@ui-kitten/components'
import { useNavigation } from '@react-navigation/native'

type RepositoryHeaderProps = {
  repo: Repository
}

const RepositoryHeader: React.FC<RepositoryHeaderProps> = (props: RepositoryHeaderProps) => {
  const { repo } = props
  const { navigate } = useNavigation()

  const PublicIcon = (props: IconProps) => <Icon {...props} name="unlock-outline" />
  const PrivateIcon = (props: IconProps) => <Icon {...props} name="lock-outline" />
  const ForkIcon = (props: IconProps) => <Icon {...props} name="shield-off-outline" />
  const UnForkIcon = (props: IconProps) => <Icon {...props} name="shield-outline" />


    const isPrivate = (is_private: boolean) => {
      if (!is_private) return (<Tab icon={PublicIcon}></Tab>)
    return ( <Stat>icon={PrivateIcon}</Stat>)
  }

  const isFork = (is_fork: boolean) => {
    if (!is_fork) return (<Tab icon={UnForkIcon}></Tab>)
    return (<Tab icon={ForkIcon}></Tab>)
  }

  return (
    <RepositoryCard>
      <RepoPart>
        <LeftRepoPart>
            <RepoName>{repo.name}
            {isFork(repo.private)}
            {isPrivate(repo.private)}</RepoName>
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
