import styled from 'styled-components/native'
import { Card } from '@ui-kitten/components'

export const RepositoryCard = styled(Card)`
  margin-top: 20px;
  margin-horizontal: 15px;
  border-radius: 10px;
`

export const RepoPart = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const LeftRepoPart = styled.View`
  align-items: flex-end;
`

export const RepoName = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-top: 5px;
`

export const Login = styled.Text`
  font-size: 14px;
  justify-content: flex-end;
  color: grey;
`

export const StatisticsPart = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`

export const StatisticsTitle = styled.Text`
  font-size: 18px;
  font-weight: 500;
  margin-vertical: 10px;
`

export const Stat = styled.View``

export const StatDescription = styled.Text`
  justify-content: flex-end;
  color: grey;
  font-weight: 500;
`

export const FollowerCard = styled(Card)`
  margin-top: 5px;
  margin-left: 11px;
  border-radius: 10px;
`

export const StatValue = styled.Text`
    margin-left: 5px;
    justify-content: flex-end;
`
