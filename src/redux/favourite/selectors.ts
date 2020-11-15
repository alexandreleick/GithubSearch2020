import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { User } from '../../types/user/user.type'
import { Repository } from '../../types/repositories/repository.type'

export const selectUsersFavorites = createSelector(
  (state: RootState) => state.favourite.users,
  (users: User[]) => users,
)

export const selectRepositoriesFavorites = createSelector(
  (state: RootState) => state.favourite.repositories,
  (repositories: Repository[]) => repositories,
)
