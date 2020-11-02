import React from 'react'
import { Button, Icon, IconProps, Layout, Text } from '@ui-kitten/components'
import { useSelector } from 'react-redux'
import { selectIsAuthenticated } from '../../../redux/user/selectors'
import LottieView from 'lottie-react-native'
import WebViewBottomSheet from '../../../components/BottomSheet/CustomBottomSheet/WebViewBottomSheet'
import useBottomSheet from '../../../hooks/common/useBottomSheet.hook'

const ProfileScreen: React.FC = () => {
  const { isVisible, toggleBottomSheet } = useBottomSheet()
  const isAuthenticated: boolean = useSelector(selectIsAuthenticated)

  const GithubIcon = (props: IconProps) => <Icon {...props} name="github" />

  return (
    <>
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
            <Button status="primary" accessoryRight={GithubIcon} onPress={toggleBottomSheet}>
              Login to Github
            </Button>
          </>
        )}
      </Layout>
      {isVisible && (
        <WebViewBottomSheet
          isModalVisible={isVisible}
          toggleModal={toggleBottomSheet}
          title="Login to Github"
          uri={'https://github.com/login'}
        />
      )}
    </>
  )
}

export default ProfileScreen
