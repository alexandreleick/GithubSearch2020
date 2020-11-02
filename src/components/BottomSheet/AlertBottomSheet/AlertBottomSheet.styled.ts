import styled from 'styled-components/native'
import { Title } from 'react-native-paper'

export const AlertMessage = styled(Title)`
  text-align: center;
  color: #173e64;
  font-family: Quicksand-Bold;
  font-weight: bold;
  font-size: 17px;
  padding-horizontal: 40px;
  height: auto;
  margin-bottom: 30px;
`

export const AlertContainer = styled.View<{ bottomInset?: number }>`
  margin-bottom: ${({ bottomInset }) => (!bottomInset ? 30 : bottomInset)}px;
  height: 100%;
  align-items: center;
  background-color: white;
`

export const ButtonsContainer = styled.View`
  width: 90%;
  display: flex;
  justify-content: space-between;
`
