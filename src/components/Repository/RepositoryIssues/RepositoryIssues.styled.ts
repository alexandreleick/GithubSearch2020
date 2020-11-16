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
  margin-top: 5px;
  margin-left: 11px;
  margin-right: 11px;
  border-radius: 10px;
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

export const LabelIssueView = styled.View`
    margin-top: 5px;
    borderWidth: 1px;
    borderRadius: 10px;
    backgroundColor: green;
    width: 20%;
`

export const LabelIssueClose = styled.View`
    margin-top: 5px;
    borderWidth: 1px;
    borderRadius: 10px;
    backgroundColor: red;
    width: 20%;
`

export const LabelIssue = styled.Text`
  textAlign: center;
`
