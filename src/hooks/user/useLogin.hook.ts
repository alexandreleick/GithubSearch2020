import { useDispatch } from 'react-redux'
import { userReducer } from '../../redux/user/reducer'
import { saveAuthInfos } from '../../utils/auth'
import { useContext, useState } from 'react'
import useFindProfileUser from './useFindProfileUser.hook'
import { ToastContext } from '../../providers/ToastProvider/ToastProvider.component'
import { AuthenticatedUser } from '../../types/user/authenticated-user.type'

export type LoginData = {
  access_token: string
  expires_in: string
  refresh_token: string
  refresh_token_expires_in: string
}

const useLogin: Function = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false)
  const dispatch = useDispatch()
  const { dispatchRequest } = useFindProfileUser()
  const { show } = useContext(ToastContext)

  // TODO: /me to get user info
  const dispatchLogin: Function = (loginData: LoginData) => {
    Promise.all([dispatchRequest(), saveAuthInfos({ token: loginData.access_token })])
      .then((result) => {
        const user: AuthenticatedUser = result[0].data
        setLoggedIn(true)
        show({ message: 'Happy to see you again, ' + user.login + '!', type: 'success' })
        dispatch(userReducer.actions.setUser(user))
        dispatch(userReducer.actions.setToken(loginData.access_token))
      })
      .catch(() => {
        setLoggedIn(false)
        show({ message: 'An error ocurred during the Github connection. Please try again later', type: 'danger' })
      })
  }

  return { dispatchLogin, loggedIn }
}

export default useLogin
