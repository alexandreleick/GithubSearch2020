import { useDispatch } from 'react-redux'
import { userReducer } from '../../redux/user/reducer'
import { saveAuthInfos } from '../../utils/auth'
import { useContext, useState } from 'react'
import useFindProfileUser from './useFindProfileUser.hook'
import { ToastContext } from '../../providers/ToastProvider/ToastProvider.component'
import { User } from '../../types/user/user.type'

export type LoginData = {
  access_token: string
  expires_in: string
  refresh_token: string
  refresh_token_expires_in: string
}

const useLogin: Function = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false)
  const dispatch = useDispatch()
  const { dispatchFindProfile } = useFindProfileUser()
  const { show } = useContext(ToastContext)

  // TODO: /me to get user info
  const dispatchLogin: Function = (loginData: LoginData) => {
    Promise.all([dispatchFindProfile(), saveAuthInfos({ token: loginData.access_token })])
      .then((result) => {
        const user: User = result[0].data
        setLoggedIn(true)
        if (show) show({ message: 'Happy to see you again, ' + user.login + '!', type: 'success' })
        dispatch(userReducer.actions.setUser(user))
        dispatch(userReducer.actions.setToken(loginData.access_token))
      })
      .catch(() => {
        setLoggedIn(false)
        if (show) show({ message: 'An error ocurred during the Github connection.', type: 'danger' })
      })
  }

  return { dispatchLogin, loggedIn }
}

export default useLogin
