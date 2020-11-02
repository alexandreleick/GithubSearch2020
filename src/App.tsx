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

const App: React.FC = () => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <Provider store={store}>
          <SafeAreaProvider>
            <PersistGate loading={null} persistor={persistor}>
              <NavigationContainer>
                <MainNavigator />
              </NavigationContainer>
            </PersistGate>
          </SafeAreaProvider>
        </Provider>
      </ApplicationProvider>
    </>
  )
}

export default App
