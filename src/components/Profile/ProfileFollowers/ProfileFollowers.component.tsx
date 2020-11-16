import React, { useEffect, useState } from 'react'
import { Spinner } from '@ui-kitten/components'
import useFindProfileFollowers from '../../../hooks/user/useFindProfileFollowers.hook'
import { FlatList, useWindowDimensions } from 'react-native'
import { FollowerFollowing } from '../../../types/user/follower-following.type'
import { FollowerAvatar, FollowerCard, ProfileFollowersTab } from './ProfileFollowers.styled'
import { User } from '../../../types/user/user.type'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectUser } from '../../../redux/user/selectors'

type DataSourceProps = {
  id: number
  follower: FollowerFollowing
}

type ProfileFollowersProps = {
  user: User
}

const ProfileFollowers: React.FC<ProfileFollowersProps> = (props: ProfileFollowersProps) => {
  const { user } = props
  const { data, loading, error } = useFindProfileFollowers(user)
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
    <ProfileFollowersTab>
      {loading ? (
        <Spinner status="primary" />
      ) : (
        <FlatList
          style={{ height: height / 2 - 70, marginBottom: 80 }}
          data={dataSource}
          renderItem={({ item }) => (
            <FollowerCard
              onPress={() =>
                navigate(loggedUser?.login != user.login ? 'SearchUserProfile' : 'ProfileUserProfile', {
                  profileUrl: item.follower.url,
                  title: '@' + item.follower.login,
                })
              }
            >
              <FollowerAvatar source={{ uri: item.follower.avatar_url, cache: 'force-cache' }} />
            </FollowerCard>
          )}
          numColumns={4}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </ProfileFollowersTab>
  )
}

export default ProfileFollowers
