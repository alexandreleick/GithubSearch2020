import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Icon, IconProps, TopNavigation, TopNavigationAction } from '@ui-kitten/components'
import { userReducer } from '../../redux/user/reducer'
import { selectIsAuthenticated, selectUser } from '../../redux/user/selectors'
import { User } from '../../types/user/user.type'
import { StackHeaderProps } from '@react-navigation/stack'
import { View } from 'react-native'
import { ToastContext } from '../../providers/ToastProvider/ToastProvider.component'
import { useNavigation } from '@react-navigation/native'

const LogoutIcon = (props: IconProps) => <Icon {...props} name="power-outline" />
const BackIcon = (props: IconProps) => <Icon {...props} name="arrow-back" />

interface HeaderCustomProps extends StackHeaderProps {
  title?: string
}

const Header: React.FC<HeaderCustomProps> = (props: HeaderCustomProps) => {
  const { insets, scene, title } = props
  const isAuthenticated: boolean = useSelector(selectIsAuthenticated)
  const user: User = useSelector(selectUser)
  const dispatch = useDispatch()
  const { show } = useContext(ToastContext)
  const { canGoBack, goBack } = useNavigation()

  const LogoutAction = () => (
    <TopNavigationAction
      icon={LogoutIcon}
      onPress={() => {
        if (show) show({ message: 'GoodBye ' + user.login + ', see you soon!', type: 'info' })
        dispatch(userReducer.actions.logout({}))
      }}
    />
  )

  const GoBackAction = () => {
    if (canGoBack()) {
      return <TopNavigationAction icon={BackIcon} onPress={goBack} />
    }

    return <></>
  }

  return (
    <View style={{ backgroundColor: 'white', paddingTop: insets.top }}>
      <TopNavigation
        alignment="center"
        title={title || scene.route.name}
        subtitle={
          scene.route.params && scene.route.params.title
            ? scene.route.params.title
            : isAuthenticated
            ? '@' + user.login
            : ''
        }
        accessoryLeft={GoBackAction}
        accessoryRight={LogoutAction}
      />
    </View>
  )
}

export default Header
