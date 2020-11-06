import React from 'react'
import { Text, View } from 'react-native'
import {
  ProfileCard,
  LeftUserPart,
  UserName,
  UserPart,
  StatisticsPart,
  StatisticsTitle,
  Login,
} from './ProfileHeader.styled'
import { useSelector } from 'react-redux'
import { selectUser } from '../../../../redux/user/selectors'
import { AuthenticatedUser } from '../../../../types/user/authenticated-user.type'
import { Avatar } from '@ui-kitten/components'

const ProfileHeader: React.FC = () => {
  const user: AuthenticatedUser = useSelector(selectUser)

  return (
    <ProfileCard>
      <UserPart>
        <Avatar source={{ uri: user.avatar_url }} />
        <LeftUserPart>
          <UserName>{user.name}</UserName>
          <Login>@{user.login}</Login>
        </LeftUserPart>
      </UserPart>
      <StatisticsTitle>About you</StatisticsTitle>
      <StatisticsPart>
        <Text>oui</Text>
        <Text>oui</Text>
        <Text>oui</Text>
      </StatisticsPart>
    </ProfileCard>
  )
}

export default ProfileHeader
