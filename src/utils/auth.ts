import AsyncStorage from '@react-native-community/async-storage'

const AUTH_INFOS = 'AUTH_INFOS'

export interface AuthInfos {
  token: string | undefined
}

export const saveAuthInfos = async (authInfos: AuthInfos) => {
  try {
    const serializedState = JSON.stringify(authInfos)
    await AsyncStorage.setItem(AUTH_INFOS, serializedState)
  } catch (err) {
    console.warn(err)
  }
}

export const loadAuthInfos = async (): Promise<AuthInfos | undefined> => {
  try {
    const serializedState = await AsyncStorage.getItem(AUTH_INFOS)
    if (serializedState === null) return undefined
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

export const clearAuthInfos = async () => {
  try {
    await AsyncStorage.removeItem(AUTH_INFOS)
  } catch (err) {
    console.warn(err)
  }
}
