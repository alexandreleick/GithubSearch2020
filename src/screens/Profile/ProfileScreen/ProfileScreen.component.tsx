import React from 'react'
import { Layout, Text } from '@ui-kitten/components'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsAuthenticated } from '../../../redux/user/selectors'
import { userReducer } from '../../../redux/user/reducer'
import UnAuthenticatedScreen from '../UnAuthenticatedScreen'
import ProfileHeader from './ProfileHeader/ProfileHeader.component'
import ProfileDetails from './ProfileDetails/ProfileDetails.component'

const ProfileScreen: React.FC = () => {
  const isAuthenticated: boolean = useSelector(selectIsAuthenticated)

  // TODO: Debug
  //const dispatch = useDispatch()
  //dispatch(userReducer.actions.logout({}))

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
