import styled from 'styled-components/native'
import { Card } from '@ui-kitten/components'

export const RepositoryIssuesTab = styled.View`
  min-height: 200px;
  padding-top: 10px;
`
export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-top: 5px;
`

export const IssueCard = styled(Card)`
  margin-left: 15px;
  margin-right: 15px;
  border-radius: 10px;
  margin-bottom: 10px;
`

export const StatisticsPart = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`

export const StatValue = styled.Text`
  margin-left: 5px;
  justify-content: flex-end;
`
