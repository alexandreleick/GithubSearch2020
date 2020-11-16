import React, { useEffect, useState } from 'react'
import { Repository } from '../../../types/repositories/repository.type'
import useFindRepositoryContributors from '../../../hooks/user/useFindRepositoryContributors'
import { Spinner } from '@ui-kitten/components'
import { FlatList, useWindowDimensions } from 'react-native'
import { ContributorAvatar, ContributorCard, RepositoryContributorsTab } from './RepositoryContributors.styled'
import { useNavigation } from '@react-navigation/native'
import { Contributor } from '../../../types/user/contributor.type'

type DataSourceProps = {
  id: number
  contributor: Contributor
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
      data.map((contributor: Contributor, index: number) => {
        return {
          contributor,
          id: index,
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
                navigate('SearchUserProfile', { profileUrl: item.contributor.url, title: '@' + item.contributor.login })
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
