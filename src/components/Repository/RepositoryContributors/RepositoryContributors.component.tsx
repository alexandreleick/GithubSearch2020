import React, { useEffect, useState } from 'react'
import { Repository } from '../../../types/repositories/repository.type'
import { FollowerFollowing } from '../../../types/user/follower-following.type'
import useFindRepositoryContributors from '../../../hooks/user/useFindRepositoryContributors'
import { Spinner } from '@ui-kitten/components'
import { FlatList, useWindowDimensions, Text } from 'react-native'
import { ContributorAvatar, ContributorCard, RepositoryContributorsTab } from './RepositoryContributors.styled'
import { useNavigation } from '@react-navigation/native'

type DataSourceProps = {
  id: number
  contributor: FollowerFollowing
}

type RepositoryContributorsProps = {
  repo: Repository
}

const RepositoryContributors: React.FC<RepositoryContributorsProps> = (props: RepositoryContributorsProps) => {
  const { repo } = props
  const [dataSource, setDataSource] = useState<DataSourceProps[]>([])
  const { data, loading, error } = useFindRepositoryContributors(repo)
  const { height } = useWindowDimensions()
  const { navigate } = useNavigation()

  useEffect(() => {
    if (!data) return
    setDataSource(
      data.map((user: FollowerFollowing, index: number) => {
        return {
          id: index,
          contributor: user,
        } as DataSourceProps
      }),
    )
  }, [data])

  return (
    <RepositoryContributorsTab>
      {loading ? (
        <Spinner status="primary" />
      ) : (
        <FlatList
          style={{ height: height / 2 - 70, marginBottom: 80 }}
          data={dataSource}
          renderItem={({ item }) => (
            <ContributorCard
              onPress={() =>
                navigate('UserResultProfile', { profileUrl: item.contributor.url, title: '@' + item.contributor.login })
              }
            >
              <ContributorAvatar source={{ uri: item.contributor.avatar_url, cache: 'force-cache' }} />
            </ContributorCard>
          )}
          numColumns={4}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </RepositoryContributorsTab>
  )
}

export default RepositoryContributors
