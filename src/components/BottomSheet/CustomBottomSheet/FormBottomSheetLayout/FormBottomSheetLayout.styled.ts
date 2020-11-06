import styled from 'styled-components/native'
import { StyleSheet, View } from 'react-native'

export const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
  },
})

export const CustomScrollView = styled(View)`
  z-index: 1000;
  height: 100%;
`

export const FormBottomSheetContainer = styled.View<{ bottomInset?: number }>`
  margin-bottom: ${({ bottomInset }) => (!bottomInset ? 30 : bottomInset)}px;
  height: 100%;
  align-items: center;
  background-color: white;
`

export const TitleMessage = styled.Text`
  text-align: center;
  color: #173e64;
  font-family: Quicksand-Bold;
  font-weight: bold;
  font-size: 17px;
  padding-horizontal: 40px;
  height: auto;
  margin-bottom: 30px;
`

export const ButtonsContainer = styled.View`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`

export const FormContainer = styled.View`
  justify-content: center;
  width: 90%;
`
