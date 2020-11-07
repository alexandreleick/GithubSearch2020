import React from 'react'
import { Layout } from '@ui-kitten/components'
import { useSelector } from 'react-redux'
import { selectIsAuthenticated, selectUser } from '../../../redux/user/selectors'
import UnAuthenticatedScreen from '../UnAuthenticatedScreen'
import ProfileHeader from './ProfileHeader/ProfileHeader.component'
import ProfileDetails from './ProfileDetails/ProfileDetails.component'
import { User } from '../../../types/user/user.type'
import { useRoute } from '@react-navigation/native'

type ProfileRendererProps = {
  user: User
}

const RenderProfile: React.FC<ProfileRendererProps> = (props: ProfileRendererProps) => {
  const { user } = props

  return (
    <Layout level="2" style={{ flex: 1 }}>
      <ProfileHeader user={user} />
      <ProfileDetails user={user} />
    </Layout>
  )
}

const ProfileScreen: React.FC = () => {
  const isAuthenticated: boolean = useSelector(selectIsAuthenticated)
  const authenticatedUser: User = useSelector(selectUser)
  const { params } = useRoute()

  if (!params || !params.user) {
    if (isAuthenticated) {
      return <RenderProfile user={authenticatedUser} />
    } else {
      return <UnAuthenticatedScreen />
    }
  }

  return <RenderProfile user={params['user']} />
}

export default ProfileScreen
