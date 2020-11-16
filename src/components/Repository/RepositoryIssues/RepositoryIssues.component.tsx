import React, { useEffect, useState } from 'react'
import { Repository } from '../../../types/repositories/repository.type'
import {
  IssueCard,
  RepositoryIssuesTab,
  StatisticsPart,
  StatValue,
  Title,
  LabelIssue,
  LabelIssueClose,
  LabelIssueOpened,
} from './RepositoryIssues.styled'
import { Spinner, Text } from '@ui-kitten/components'
import { FlatList, useWindowDimensions } from 'react-native'
import useFindRepositoryIssues from '../../../hooks/issues/useFindRepositoryIssues'
import { useNavigation } from '@react-navigation/native'
import { Issue } from '../../../types/issues/issue.type'

type DataSourceProps = {
  id: number
  issue: Issue
}

type RepositoryIssuesProps = {
  repo: Repository
}

const RepositoryIssues: React.FC<RepositoryIssuesProps> = (props: RepositoryIssuesProps) => {
  const { repo } = props
  const { data, loading, error } = useFindRepositoryIssues(repo)
  const { height } = useWindowDimensions()
  const [dataSource, setDataSource] = useState<DataSourceProps[]>([])
  const { navigate } = useNavigation()

  useEffect(() => {
    if (!data) return
    setDataSource(
      data.map((issue: Issue, index: number) => {
        return {
          issue,
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
            <IssueCard
              onPress={() => navigate('RepoIssue', { issue: item.issue, title: 'From @' + item.issue.user.login })}
            >
              <StatisticsPart>
                <Title>{item.issue.title}</Title>
              </StatisticsPart>
              <StatisticsPart>
                <StatValue>Last update at {item.issue.updated_at}</StatValue>
              </StatisticsPart>
              <StatisticsPart>
                {item.issue.state == "closed" ? <LabelIssueClose><LabelIssue>Closed</LabelIssue></LabelIssueClose> : <LabelIssueOpened><LabelIssue>Open</LabelIssue></LabelIssueOpened>}
              </StatisticsPart>
            </IssueCard>
          )}
          numColumns={1}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </RepositoryIssuesTab>
  )
}

export default RepositoryIssues
