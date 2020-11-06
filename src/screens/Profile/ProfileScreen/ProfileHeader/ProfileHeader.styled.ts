import styled from 'styled-components/native'
import { Card } from '@ui-kitten/components'

export const ProfileCard = styled(Card)`
  margin-top: 20px;
  margin-horizontal: 15px;
  border-radius: 10px;
`

export const UserPart = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const LeftUserPart = styled.View`
  flex-direction: column;
  align-items: flex-end;
`

export const UserName = styled.Text`
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

export const StatName = styled.Text`
  justify-content: flex-end;
  color: grey;
  font-weight: 500;
`

export const StatValue = styled.Text``
