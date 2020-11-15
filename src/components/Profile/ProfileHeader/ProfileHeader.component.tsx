import React, { useContext } from 'react'
import {
  LeftUserPart,
  Login,
  ProfileCard,
  Stat,
  StatisticsPart,
  StatName,
  StatValue,
  UserName,
  UserPart,
} from './ProfileHeader.styled'
import { User } from '../../../types/user/user.type'
import { Avatar, Button, Icon, IconProps } from '@ui-kitten/components'
import { useDispatch, useSelector } from 'react-redux'
import { favouriteReducer } from '../../../redux/favourite/reducer'
import { ToastContext } from '../../../providers/ToastProvider/ToastProvider.component'
import { selectUser } from '../../../redux/user/selectors'

type ProfileHeaderProps = {
  user: User
}

const ProfileHeader: React.FC<ProfileHeaderProps> = (props: ProfileHeaderProps) => {
  const { user } = props
  const dispatch = useDispatch()
  const { show } = useContext(ToastContext)
  const loggedUser: User = useSelector(selectUser)

  const StarIcon = (props: IconProps) => <Icon {...props} name="star" />

  return (
    <ProfileCard>
      <UserPart>
        <Avatar source={{ uri: user.avatar_url, cache: 'force-cache' }} />
        <LeftUserPart>
          <UserName>{user.name}</UserName>
          <Login>@{user.login}</Login>
        </LeftUserPart>
      </UserPart>
      <StatisticsPart>
        <Stat>
          <StatName>Followers</StatName>
          <StatValue>{user.followers}</StatValue>
        </Stat>
        <Stat>
          <StatName>Location</StatName>
          <StatValue>{user.location}</StatValue>
        </Stat>
        <Stat>
          <StatName>Repositories</StatName>
          <StatValue>{user.public_repos}</StatValue>
        </Stat>
      </StatisticsPart>
      <Stat style={{ marginTop: 10, marginBottom: 10 }}>
        <StatName>Bio</StatName>
        <StatValue>{user.bio}</StatValue>
      </Stat>
      {loggedUser?.login != user.login ? (
        <Button
          status="danger"
          accessoryLeft={StarIcon}
          size="small"
          onPress={() => {
            dispatch(favouriteReducer.actions.favUser(user))
            if (show) show({ message: user.login + " user's successfully added as favorite.", type: 'success' })
          }}
        >
          Save as favorite
        </Button>
      ) : (
        <></>
      )}
    </ProfileCard>
  )
}

export default ProfileHeader
