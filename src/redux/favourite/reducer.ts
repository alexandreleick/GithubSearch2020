import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit'
import { User } from '../../types/user/user.type'
import { UserState } from '../user/reducer'

type FavouriteState = {
  accessToken: string | undefined
}

const initialState: FavouriteState = {
  accessToken: undefined,
}

export const favouriteReducer: Slice = createSlice({
  name: 'favourite',
  initialState,
  reducers: {
    saveAsFavorite: (state: FavouriteState, { payload: user }: PayloadAction<User>) => ({ ...state, user }),
  },
})
