import React from 'react'
import CustomBottomSheet from '../index'
import { Container, TitleMessage } from './WebViewBottomSheet.styled'
import { WebView } from 'react-native-webview'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useWindowDimensions } from 'react-native'

interface Props {
  isModalVisible: boolean
  toggleModal: () => void
  title: string
  uri: string
}

const WebViewBottomSheet: React.FC<Props> = (props: Props) => {
  const { toggleModal, isModalVisible, title, uri } = props
  const { bottom } = useSafeAreaInsets()
  const { height } = useWindowDimensions()

  return (
    <CustomBottomSheet isVisible={isModalVisible} toggleBottom={toggleModal}>
      <Container bottom={bottom}>
        <WebView source={{ uri }} style={{ height: height - 200 }} />
      </Container>
    </CustomBottomSheet>
  )
}

export default WebViewBottomSheet
