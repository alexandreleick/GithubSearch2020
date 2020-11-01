import { createSlice, Slice } from '@reduxjs/toolkit'

type BaseState = {
  accessToken: string | undefined
}

const initialState: BaseState = {
  accessToken: undefined,
}

export const baseReducer: Slice = createSlice({
  name: 'base',
  initialState,
  reducers: {},
})
