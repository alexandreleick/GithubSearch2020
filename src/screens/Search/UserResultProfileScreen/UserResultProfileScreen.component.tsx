import React from 'react'
import { useRoute } from '@react-navigation/native'
import ProfileRenderer from '../../../components/Profile/ProfileRenderer.component'

const UserResultProfileScreen: React.FC = () => {
  const { params } = useRoute()

  return <ProfileRenderer user={params['user']} />
}

export default UserResultProfileScreen
