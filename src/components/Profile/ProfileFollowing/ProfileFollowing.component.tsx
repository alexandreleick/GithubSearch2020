import React, { useEffect, useState } from 'react'
import { Spinner } from '@ui-kitten/components'
import { FlatList, useWindowDimensions } from 'react-native'
import { FollowerFollowing } from '../../../types/user/follower-following.type'
import { FollowingAvatar, FollowingCard, ProfileFollowingTab } from './ProfileFollowing.styled'
import useFindProfileFollowing from '../../../hooks/user/useFindProfileFollowing.hook'
import { User } from '../../../types/user/user.type'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectUser } from '../../../redux/user/selectors'

type DataSourceProps = {
  id: number
  follower: FollowerFollowing
}

type ProfileFollowingProps = {
  user: User
}

const ProfileFollowing: React.FC<ProfileFollowingProps> = (props: ProfileFollowingProps) => {
  const { user } = props
  const { data, loading, error } = useFindProfileFollowing(user)
  const [dataSource, setDataSource] = useState<DataSourceProps[]>([])
  const { height } = useWindowDimensions()
  const { navigate } = useNavigation()
  const loggedUser: User = useSelector(selectUser)

  useEffect(() => {
    if (!data) return
    setDataSource(
      data.map((user: FollowerFollowing, index: number) => {
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
          style={{ height: height / 2 - 70, marginBottom: 80 }}
          data={dataSource}
          renderItem={({ item }) => (
            <FollowingCard
              onPress={() =>
                navigate(loggedUser?.login != user.login ? 'SearchUserProfile' : 'ProfileUserProfile', {
                  profileUrl: item.follower.url,
                  title: '@' + item.follower.login,
                })
              }
            >
              <FollowingAvatar source={{ uri: item.follower.avatar_url, cache: 'force-cache' }} />
            </FollowingCard>
          )}
          numColumns={4}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </ProfileFollowingTab>
  )
}

export default ProfileFollowing
