import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { AuthenticatedUser } from '../../types/user/authenticated-user.type'

export const selectUser = createSelector(
  (state: RootState) => state.user.user,
  (user: AuthenticatedUser) => user,
)

export const selectIsAuthenticated = createSelector(
  (state: RootState) => state.user.accessToken,
  (token: string) => !!token,
)
