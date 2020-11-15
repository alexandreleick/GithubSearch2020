import styled from 'styled-components/native'
import { Card } from '@ui-kitten/components'

export const RepositoryCardView = styled(Card)`
  margin-top: 5px;
  margin-horizontal: 10px;
  border-radius: 10px;
`

export const RepositoryHead = styled.View`
  flex-direction: column;
`

export const RepositoryNameContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5px;
`

export const RepositoryName = styled.Text`
  font-weight: bold;
`

export const RepositoryDescription = styled.Text`
  font-size: 14px;
  justify-content: flex-end;
  color: grey;
`

export const LanguageContainer = styled.View`
  margin-top: 10px;
  flex-direction: row;
  justify-content: flex-start;
`

export const LanguageName = styled.Text`
  font-weight: 500;
  margin-left: 5px;
`
