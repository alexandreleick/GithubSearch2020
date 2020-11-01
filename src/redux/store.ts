import { combineReducers, configureStore, EnhancedStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { baseReducer } from './base/reducer'
import { persistReducer, persistStore } from 'redux-persist'
import { Persistor } from 'redux-persist/es/types'
import AsyncStorage from '@react-native-community/async-storage'
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist/es/constants'
import { favouriteReducer } from './favourite/reducer'

const rootReducer: any = combineReducers({
  base: baseReducer.reducer,
  favourite: favouriteReducer.reducer,
})

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['base', 'favourite'],
  debug: false,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store: EnhancedStore = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  devTools: true,
})

const persistor: Persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>

export { store, persistor }
