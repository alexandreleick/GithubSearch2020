import React, { useEffect, useState } from 'react'
import { Spinner } from '@ui-kitten/components'
import { FlatList } from 'react-native'
import { Follower } from '../../../../../types/user/follower-following.type'
import { FollowingAvatar, FollowingCard, ProfileFollowingTab } from './ProfileFollowing.styled'
import useFindProfileFollowing from '../../../../../hooks/user/useFindProfileFollowing.hook'

type DataSourceProps = {
  id: number
  follower: Follower
}

const ProfileFollowing: React.FC = () => {
  const { data, loading, error } = useFindProfileFollowing()
  const [dataSource, setDataSource] = useState<DataSourceProps[]>([])

  useEffect(() => {
    if (!data) return
    setDataSource(
      data.map((user: Follower, index: number) => {
        return {
          id: index,
          follower: user,
        } as DataSourceProps
      }),
    )
  }, [data])

  return (
    <ProfileFollowingTab>
      {loading ? (
        <Spinner status="primary" />
      ) : (
        <FlatList
          data={dataSource}
          renderItem={({ item }) => (
            <FollowingCard>
              <FollowingAvatar source={{ uri: item.follower.avatar_url, cache: 'force-cache' }} />
            </FollowingCard>
          )}
          numColumns={4}
          keyExtractor={(item) => item.id}
        />
      )}
    </ProfileFollowingTab>
  )
}

export default ProfileFollowing
