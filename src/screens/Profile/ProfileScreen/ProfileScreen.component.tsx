import React from 'react'
import { Layout } from '@ui-kitten/components'
import { useSelector } from 'react-redux'
import { selectIsAuthenticated } from '../../../redux/user/selectors'
import UnAuthenticatedScreen from '../UnAuthenticatedScreen'
import ProfileHeader from './ProfileHeader/ProfileHeader.component'
import ProfileDetails from './ProfileDetails/ProfileDetails.component'

const ProfileScreen: React.FC = () => {
  const isAuthenticated: boolean = useSelector(selectIsAuthenticated)

  return (
    <>
      {isAuthenticated ? (
        <Layout level="2" style={{ flex: 1 }}>
          <ProfileHeader />
          <ProfileDetails />
        </Layout>
      ) : (
        <UnAuthenticatedScreen />
      )}
    </>
  )
}

export default ProfileScreen
