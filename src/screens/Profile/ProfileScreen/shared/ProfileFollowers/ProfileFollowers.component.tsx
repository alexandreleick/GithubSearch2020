import React, { useEffect, useState } from 'react'
import { Spinner } from '@ui-kitten/components'
import useFindProfileFollowers from '../../../../../hooks/user/useFindProfileFollowers.hook'
import { FlatList } from 'react-native'
import { Follower } from '../../../../../types/user/follower-following.type'
import { FollowerAvatar, FollowerCard, ProfileFollowersTab } from './ProfileFollowers.styled'

type DataSourceProps = {
  id: number
  follower: Follower
}

const ProfileFollowers: React.FC = () => {
  const { data, loading, error } = useFindProfileFollowers()
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
    <ProfileFollowersTab>
      {loading ? (
        <Spinner status="primary" />
      ) : (
        <FlatList
          data={dataSource}
          renderItem={({ item }) => (
            <FollowerCard>
              <FollowerAvatar source={{ uri: item.follower.avatar_url, cache: 'force-cache' }} />
            </FollowerCard>
          )}
          numColumns={4}
          keyExtractor={(item) => item.id}
        />
      )}
    </ProfileFollowersTab>
  )
}

export default ProfileFollowers
