import React from 'react'
import { useSelector } from 'react-redux'
import { selectIsAuthenticated, selectUser } from '../../../redux/user/selectors'
import UnAuthenticatedScreen from '../UnAuthenticatedScreen'
import { User } from '../../../types/user/user.type'
import ProfileRenderer from '../../../components/Profile/ProfileRenderer.component'

const AuthenticatedProfileScreen: React.FC = () => {
  const isAuthenticated: boolean = useSelector(selectIsAuthenticated)
  const authenticatedUser: User = useSelector(selectUser)

  if (isAuthenticated) {
    return <ProfileRenderer user={authenticatedUser} />
  }
  return <UnAuthenticatedScreen />
}

export default AuthenticatedProfileScreen
