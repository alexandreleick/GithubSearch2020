import React, { useState } from 'react'
import { useWindowDimensions } from 'react-native'
import { Icon, IconProps, Tab, TabView } from '@ui-kitten/components'
import { ProfileDetailsView } from './ProfileDetails.styled'
import ProfileRepositories from '../ProfileRepositories/ProfileRepositories.component'
import ProfileFollowers from '../ProfileFollowers/ProfileFollowers.component'
import ProfileFollowing from '../ProfileFollowing/ProfileFollowing.component'
import { User } from '../../../types/user/user.type'

type ProfileDetailsProps = {
  user: User
}

const ProfileDetails: React.FC<ProfileDetailsProps> = (props: ProfileDetailsProps) => {
  const { user } = props
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  const { height } = useWindowDimensions()

  const RepositoriesIcon = (props: IconProps) => <Icon {...props} name="archive-outline" />
  const FollowersIcon = (props: IconProps) => <Icon {...props} name="people-outline" />
  const FollowingIcon = (props: IconProps) => <Icon {...props} name="person-done-outline" />

  return (
    <ProfileDetailsView style={{ borderTopColor: '#F4F4F4', borderTopWidth: 1, height: height / 2 + 100 }}>
      <TabView selectedIndex={selectedIndex} onSelect={(index) => setSelectedIndex(index)}>
        <Tab title="Repositories" icon={RepositoriesIcon}>
          <ProfileRepositories user={user} />
        </Tab>
        <Tab title="Followers" icon={FollowersIcon}>
          <ProfileFollowers user={user} />
        </Tab>
        <Tab title="Following" icon={FollowingIcon}>
          <ProfileFollowing user={user} />
        </Tab>
      </TabView>
    </ProfileDetailsView>
  )
}

export default ProfileDetails
