import { createSlice, Slice } from '@reduxjs/toolkit'

type FavouriteState = {
  accessToken: string | undefined
}

const initialState: FavouriteState = {
  accessToken: undefined,
}

export const favouriteReducer: Slice = createSlice({
  name: 'favourite',
  initialState,
  reducers: {},
})
