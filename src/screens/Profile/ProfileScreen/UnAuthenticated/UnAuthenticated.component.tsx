import React from 'react'
import LottieView from 'lottie-react-native'
import { Button, Icon, IconProps, Text } from '@ui-kitten/components'
import useBottomSheet from '../../../../hooks/common/useBottomSheet.hook'
import WebViewBottomSheet from '../../../../components/BottomSheet/CustomBottomSheet/WebViewBottomSheet'
import {
  ACCESS_TOKEN_URL,
  APP_CLIENT_ID,
  APP_CLIENT_SECRET,
  CALLBACK_URL,
  parseQueryParameters,
  rest,
} from '../../../../utils/rest'
import { WebViewNavigation } from 'react-native-webview'
import useLogin from '../../../../hooks/user/useLogin.hook'

const UnAuthenticated: React.FC = () => {
  const { dispatchLogin, loggedIn } = useLogin()
  const { isVisible: webviewIsVisible, toggleBottomSheet: webviewToggle } = useBottomSheet()

  const GithubIcon = (props: IconProps) => <Icon {...props} name="github" />

  const onOauthStateChanged = (event: WebViewNavigation) => {
    if (event.url.startsWith(CALLBACK_URL + '?code=')) {
      const code = parseQueryParameters(event.url).code
      webviewToggle()
      rest({
        method: 'POST',
        url: ACCESS_TOKEN_URL,
        body: {
          code,
          client_id: APP_CLIENT_ID,
          client_secret: APP_CLIENT_SECRET,
        },
      })
        .then((res) => {
          const params = parseQueryParameters(res.data)
          dispatchLogin({ ...params })
        })
        .catch((err) => console.error(err))
    }
  }

  return (
    <>
      <LottieView
        source={require('../../../../assets/animations/unauthenticated.json')}
        speed={0.5}
        autoPlay
        style={{
          height: 150,
          alignSelf: 'center',
        }}
      />
      <Text category="h5">You looks like unauthenticated.</Text>
      <Text style={{ marginBottom: 30 }} category="p1">
        Just login to Github for more features...
      </Text>
      <Button status="primary" accessoryRight={GithubIcon} onPress={webviewToggle}>
        Login to Github
      </Button>
      {webviewIsVisible && (
        <WebViewBottomSheet
          isModalVisible={webviewIsVisible}
          toggleModal={webviewToggle}
          uri={'https://github.com/login/oauth/authorize?client_id=' + APP_CLIENT_ID}
          onNavigationStateChange={onOauthStateChanged}
        />
      )}
    </>
  )
}

export default UnAuthenticated
