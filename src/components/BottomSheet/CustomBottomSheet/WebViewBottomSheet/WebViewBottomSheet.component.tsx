import React from 'react'
import CustomBottomSheet from '../index'
import { Container } from './WebViewBottomSheet.styled'
import { WebView, WebViewNavigation } from 'react-native-webview'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useWindowDimensions } from 'react-native'

interface Props {
  isModalVisible: boolean
  toggleModal: () => void
  uri: string
  onNavigationStateChange?: (event: WebViewNavigation) => void
}

const WebViewBottomSheet: React.FC<Props> = (props: Props) => {
  const { toggleModal, isModalVisible, onNavigationStateChange, uri } = props
  const { bottom } = useSafeAreaInsets()
  const { height } = useWindowDimensions()

  return (
    <CustomBottomSheet isVisible={isModalVisible} toggleBottom={toggleModal}>
      <Container bottom={bottom}>
        <WebView
          cacheEnabled={false}
          onNavigationStateChange={onNavigationStateChange}
          source={{ uri }}
          style={{ height: height - 200 }}
        />
      </Container>
    </CustomBottomSheet>
  )
}

export default WebViewBottomSheet
