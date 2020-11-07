import React from 'react'
import { Layout } from '@ui-kitten/components'
import { User } from '../../types/user/user.type'
import ProfileHeader from './ProfileHeader/ProfileHeader.component'
import ProfileDetails from './ProfileDetails/ProfileDetails.component'

type ProfileRendererProps = {
  user: User
}

const ProfileRenderer: React.FC<ProfileRendererProps> = (props: ProfileRendererProps) => {
  const { user } = props

  return (
    <Layout level="2" style={{ flex: 1 }}>
      <ProfileHeader user={user} />
      <ProfileDetails user={user} />
    </Layout>
  )
}

export default ProfileRenderer
