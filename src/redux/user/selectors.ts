import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { User } from '../../types/user/user.type'

export const selectUser = createSelector(
  (state: RootState) => state.user.user,
  (user: User) => user,
)

export const selectIsAuthenticated = createSelector(
  (state: RootState) => state.user.accessToken,
  (token: string) => !!token,
)
