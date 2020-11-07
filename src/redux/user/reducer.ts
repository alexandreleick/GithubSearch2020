import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit'
import { User } from '../../types/user/user.type'

export type UserState = {
  loading: 0 | 1 | -1
  user?: User
  accessToken: string | undefined
}

const initialState: UserState = {
  loading: 0,
  user: undefined,
  accessToken: undefined,
}

export const userReducer: Slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state: UserState, { payload: user }: PayloadAction<User>) => ({ ...state, user }),
    setToken: (state: UserState, { payload: accessToken }: PayloadAction<string>) => ({ ...state, accessToken }),
    logout: (state: UserState) => ({ ...state, accessToken: undefined, user: undefined }),
  },
})
