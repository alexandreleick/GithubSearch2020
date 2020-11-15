import React, { useEffect, useState } from 'react'
import { Repository } from '../../../types/repositories/repository.type'
import { RepositoryIssuesTab } from './RepositoryIssues.styled'
import { Spinner } from '@ui-kitten/components'
import { FlatList, useWindowDimensions, Text } from 'react-native'
import { ContributorAvatar, ContributorCard } from '../RepositoryContributors/RepositoryContributors.styled'
import useFindRepositoryContributors from '../../../hooks/user/useFindRepositoryContributors'
import { useNavigation } from '@react-navigation/native'
import { Contributor } from '../../../types/user/contributor.type'

type DataSourceProps = {
  id: number
}

type RepositoryIssuesProps = {
  repo: Repository
}

const RepositoryIssues: React.FC<RepositoryIssuesProps> = (props: RepositoryIssuesProps) => {
  const { repo } = props
  const { data, loading, error } = useFindRepositoryContributors(repo)
  const { height } = useWindowDimensions()
  const [dataSource, setDataSource] = useState<DataSourceProps[]>([])
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
    <RepositoryIssuesTab>
      {loading ? (
        <Spinner status="primary" />
      ) : (
        <FlatList
          style={{ height: height / 2 - 70, marginBottom: 80 }}
          data={dataSource}
          renderItem={({ item }) => (
            <Text>{}</Text>
            /*<ContributorCard
              onPress={() =>
                navigate('UserResultProfile', { profileUrl: item.contributor.url, title: '@' + item.contributor.login })
              }
            ></ContributorCard>*/
          )}
          numColumns={4}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </RepositoryIssuesTab>
  )
}

export default RepositoryIssues
