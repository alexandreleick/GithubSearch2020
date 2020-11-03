import React from 'react'
import { Layout, Text } from '@ui-kitten/components'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsAuthenticated } from '../../../redux/user/selectors'
import { userReducer } from '../../../redux/user/reducer'
import UnAuthenticated from './UnAuthenticated'

const ProfileScreen: React.FC = () => {
  const isAuthenticated: boolean = useSelector(selectIsAuthenticated)

  // TODO: Debug
  //const dispatch = useDispatch()
  //dispatch(userReducer.actions.logout({}))

  return (
    <>
      <Layout level="2" style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {isAuthenticated ? <Text category="h1">AUTHENTICATED</Text> : <UnAuthenticated />}
      </Layout>
    </>
  )
}

export default ProfileScreen
