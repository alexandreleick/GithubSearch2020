import React, { useEffect } from 'react'
import { Button, Icon, IconProps, Layout, Text } from '@ui-kitten/components'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsAuthenticated } from '../../../redux/user/selectors'
import LottieView from 'lottie-react-native'
import WebViewBottomSheet from '../../../components/BottomSheet/CustomBottomSheet/WebViewBottomSheet'
import useBottomSheet from '../../../hooks/common/useBottomSheet.hook'
import { WebViewNavigation } from 'react-native-webview'
import {
  ACCESS_TOKEN_URL,
  APP_CLIENT_ID,
  APP_CLIENT_SECRET,
  CALLBACK_URL,
  parseQueryParameters,
  rest,
} from '../../../utils/rest'
import useLogin from '../../../hooks/user/useLogin.hook'
import { userReducer } from '../../../redux/user/reducer'

const ProfileScreen: React.FC = () => {
  const { isVisible: webviewIsVisible, toggleBottomSheet: webviewToggle } = useBottomSheet()
  const { dispatchLogin, loggedIn } = useLogin()
  const isAuthenticated: boolean = useSelector(selectIsAuthenticated)

  // TODO: Debug
  //const dispatch = useDispatch()
  //dispatch(userReducer.actions.logout({}))

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
      {loggedIn && <LottieView source={require('../../../assets/animations/confetti.json')} speed={0.5} autoPlay />}
      <Layout level="2" style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {isAuthenticated ? (
          <Text category="h1">AUTHENTICATED</Text>
        ) : (
          <>
            <LottieView
              source={require('../../../assets/animations/unauthenticated.json')}
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
          </>
        )}
      </Layout>
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

export default ProfileScreen
