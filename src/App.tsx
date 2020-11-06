import React from 'react'
import { Provider } from 'react-redux'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './redux'
import MainNavigator from './navigators/MainNavigator'
import { NavigationContainer } from '@react-navigation/native'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import * as eva from '@eva-design/eva'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import { ToastProvider } from './providers/ToastProvider/ToastProvider.component'
import Toast from './providers/ToastProvider/Toast.component'
import theme from './theme.json'

const App: React.FC = () => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
        <Provider store={store}>
          <SafeAreaProvider>
            <ToastProvider>
              <Toast />
              <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                  <MainNavigator />
                </NavigationContainer>
              </PersistGate>
            </ToastProvider>
          </SafeAreaProvider>
        </Provider>
      </ApplicationProvider>
    </>
  )
}

export default App
