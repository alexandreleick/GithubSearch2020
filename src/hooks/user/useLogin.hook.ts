import { useDispatch } from 'react-redux'
import { userReducer } from '../../redux/user/reducer'
import { saveAuthInfos } from '../../utils/auth'
import { useState } from 'react'

export type LoginData = {
  access_token: string
  expires_in: string
  refresh_token: string
  refresh_token_expires_in: string
}

const useLogin: Function = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false)
  const dispatch = useDispatch()

  // TODO: /me to get user info
  const dispatchLogin: Function = (loginData: LoginData) => {
    //dispatch(userReducer.actions.setUser(user))
    dispatch(userReducer.actions.setToken(loginData.access_token))
    Promise.all([saveAuthInfos({ token: loginData.access_token })])
      .then(() => setLoggedIn(true))
      .catch(() => setLoggedIn(false))
  }

  return { dispatchLogin, loggedIn }
}

export default useLogin
