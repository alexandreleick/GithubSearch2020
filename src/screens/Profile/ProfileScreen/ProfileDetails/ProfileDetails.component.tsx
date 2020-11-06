import React, { useState } from 'react'
import { StyleSheet, Text, useWindowDimensions } from 'react-native'
import { Icon, IconProps, Tab, TabView } from '@ui-kitten/components'
import { ProfileDetailsView } from './ProfileDetails.styled'
import ProfileRepositories from '../shared/ProfileRepositories/ProfileRepositories.component'

const ProfileDetails: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  const { height } = useWindowDimensions()

  const RepositoriesIcon = (props: IconProps) => <Icon {...props} name="archive-outline" />
  const FollowersIcon = (props: IconProps) => <Icon {...props} name="people-outline" />
  const FollowingIcon = (props: IconProps) => <Icon {...props} name="person-done-outline" />

  return (
    <ProfileDetailsView style={{ borderTopColor: '#F4F4F4', borderTopWidth: 1 }}>
      <TabView
        selectedIndex={selectedIndex}
        onSelect={(index) => setSelectedIndex(index)}
        style={{ height: height / 2 + 100 }}
      >
        <Tab title="Repositories" icon={RepositoriesIcon}>
          <ProfileRepositories />
        </Tab>
        <Tab title="Followers" icon={FollowersIcon}>
          <Text category="h5">ORDERS</Text>
        </Tab>
        <Tab title="Following" icon={FollowingIcon}>
          <Text category="h5">TRANSACTIONS</Text>
        </Tab>
      </TabView>
    </ProfileDetailsView>
  )
}

const styles = StyleSheet.create({
  tabContainer: {
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default ProfileDetails
