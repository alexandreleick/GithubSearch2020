import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit'
import { User } from '../../types/user/user.type'
import { Repository } from '../../types/repositories/repository.type'

type FavouriteState = {
  users: User[]
  repositories: Repository[]
}

const initialState: FavouriteState = {
  users: [],
  repositories: [],
}

export const favouriteReducer: Slice = createSlice({
  name: 'favourite',
  initialState,
  reducers: {
    favUser: (state: FavouriteState, { payload: user }: PayloadAction<User>) => {
      const users: User[] = state.users || []
      users.push(user)

      return {
        ...state,
        users,
      }
    },
    favRepository: (state: FavouriteState, { payload: repository }: PayloadAction<Repository>) => {
      const repositories: Repository[] = state.repositories || []
      repositories.push(repository)

      return {
        ...state,
        repositories,
      }
    },
  },
})
