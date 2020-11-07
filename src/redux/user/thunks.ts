import { createAsyncThunk } from '@reduxjs/toolkit'
import { clearAuthInfos } from '../../utils/auth'
import { RestParams, restWithToken } from '../../utils/rest'
import { User } from '../../types/user/user.type'

export const getMe: any = createAsyncThunk('@@user/GET_ME', async () => {
  try {
    const params: RestParams = {
      url: '/user',
    }
    const res = await restWithToken(params)
    if (res.status === 200) {
      const user: User = await res.data
      return user
    }
  } catch (error) {
    console.error(error)
  }
})

export const signOut = createAsyncThunk('@@user/SIGNOUT', async () => await clearAuthInfos())
