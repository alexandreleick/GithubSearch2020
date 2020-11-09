import React, { useEffect, useState } from 'react'
import { Layout, Spinner } from '@ui-kitten/components'
import { User } from '../../types/user/user.type'
import ProfileHeader from './ProfileHeader/ProfileHeader.component'
import ProfileDetails from './ProfileDetails/ProfileDetails.component'
import useGetUserProfile from '../../hooks/user/useGetUserProfile.hook'

type ProfileRendererProps = {
  user?: User
  fetchUserUrl?: string
}

const ProfileRenderer: React.FC<ProfileRendererProps> = (props: ProfileRendererProps) => {
  const { user: propsUser, fetchUserUrl } = props
  const [user, setUser] = useState<User | undefined>(propsUser)
  const [loading, setLoading] = useState<boolean>(!!fetchUserUrl)
  const { dispatchGetUser } = useGetUserProfile()

  useEffect(() => {
    if (fetchUserUrl) {
      dispatchGetUser(fetchUserUrl)
        .then((data) => {
          setUser(data.data)
        })
        .finally(() => setLoading(false))
    }
  }, [fetchUserUrl])

  return (() => {
    if (!user || loading) {
      return (
        <Layout level="2" style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Spinner status="primary" />
        </Layout>
      )
    }

    return (
      <Layout level="2" style={{ flex: 1 }}>
        <ProfileHeader user={user} />
        <ProfileDetails user={user} />
      </Layout>
    )
  })()
}

export default ProfileRenderer
