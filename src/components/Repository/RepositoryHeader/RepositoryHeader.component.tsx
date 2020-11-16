import { Repository } from '../../../types/repositories/repository.type'
import React, { useContext } from 'react'
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
import { Avatar, Button, Icon, IconProps, Tab } from '@ui-kitten/components'
import { useNavigation } from '@react-navigation/native'
import { textEmoji } from 'markdown-to-text-emoji'
import { favouriteReducer } from '../../../redux/favourite/reducer'
import { useDispatch } from 'react-redux'
import { ToastContext } from '../../../providers/ToastProvider/ToastProvider.component'

type RepositoryHeaderProps = {
  repo: Repository
}

const RepositoryHeader: React.FC<RepositoryHeaderProps> = (props: RepositoryHeaderProps) => {
  const { repo } = props
  const { navigate } = useNavigation()
  const dispatch = useDispatch()
  const { show } = useContext(ToastContext)

  const PublicIcon = (props: IconProps) => <Icon {...props} name="unlock-outline" />
  const PrivateIcon = (props: IconProps) => <Icon {...props} name="lock-outline" />
  const ForkIcon = (props: IconProps) => <Icon {...props} name="shield-off-outline" />
  const UnForkIcon = (props: IconProps) => <Icon {...props} name="shield-outline" />

  const isPrivate = (is_private: boolean) => {
    if (!is_private) return <Tab icon={PublicIcon} />
    return <Tap icon={PrivateIcon} />
  }

  const isFork = (is_fork: boolean) => {
    if (!is_fork) return <Tab icon={UnForkIcon} />
    return <Tab icon={ForkIcon} />
  }

  const StarIcon = (props: IconProps) => <Icon {...props} name="star" />

  return (
    <RepositoryCard>
      <RepoPart>
        <LeftRepoPart>
          <RepoName>
            {repo.name}
            {isFork(repo.private)}
            {isPrivate(repo.private)}
          </RepoName>
        </LeftRepoPart>
        {/*<Stat>
          <FollowerCard>
            <Avatar source={{ uri: repo.owner.avatar_url, cache: 'force-cache' }} />
            <Text>{repo.owner.login}</Text>
          </FollowerCard>
        </Stat>*/}
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
        <StatValue>{textEmoji(repo.description || '')}</StatValue>
      </Stat>
      <StatisticsPart style={{ marginBottom: 10 }}>
        <Stat>
          <StatDescription>Languages</StatDescription>
          <StatValue>{repo.language}</StatValue>
        </Stat>
      </StatisticsPart>
      <Button
        status="danger"
        accessoryLeft={StarIcon}
        size="small"
        onPress={() => {
          dispatch(favouriteReducer.actions.favRepository(repo))
          if (show) show({ message: repo.name + " repo's successfully added as favorite.", type: 'success' })
        }}
      >
        Save as favorite
      </Button>
    </RepositoryCard>
  )
}

export default RepositoryHeader
