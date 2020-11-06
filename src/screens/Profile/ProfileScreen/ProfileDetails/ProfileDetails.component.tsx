import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import { selectUser } from '../../../../redux/user/selectors'
import { AuthenticatedUser } from '../../../../types/user/authenticated-user.type'
import { Avatar, Layout, Tab, TabView, useTheme } from '@ui-kitten/components'
import { ProfileDetailsView } from './ProfileDetails.styled'

const ProfileDetails: React.FC = () => {
  const user: AuthenticatedUser = useSelector(selectUser)
  const theme = useTheme()
  const [selectedIndex, setSelectedIndex] = useState<number>(0)

  const shouldLoadComponent = (index: number) => index === selectedIndex

  return (
    <ProfileDetailsView>
      <TabView
        selectedIndex={selectedIndex}
        shouldLoadComponent={shouldLoadComponent}
        onSelect={(index) => setSelectedIndex(index)}
      >
        <Tab title="Repositories">
          <Text category="h5">USERS</Text>
        </Tab>
        <Tab title="Followers">
          <Text category="h5">ORDERS</Text>
        </Tab>
        <Tab title="Following">
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
