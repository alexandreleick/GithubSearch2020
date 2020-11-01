import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import { Provider } from 'react-redux'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { PersistGate } from 'redux-persist/integration/react'
import { NavigationContainer } from '@react-navigation/native'
import { theme } from './theme'
import { persistor, store } from './redux'
import MainNavigator from './navigators/MainNavigator'

const App: React.FC = () => {
  return (
    <PaperProvider theme={theme}>
      <Provider store={store}>
        <SafeAreaProvider>
          <PersistGate loading={null} persistor={persistor}>
            <NavigationContainer>
              <MainNavigator />
            </NavigationContainer>
          </PersistGate>
        </SafeAreaProvider>
      </Provider>
    </PaperProvider>
  )
}

export default App
