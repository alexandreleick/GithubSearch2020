import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SettingsListScreen from '../../screens/Settings/SettingsListScreen'

const Stack = createStackNavigator()

const SettingsStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName={'SettingsList'}>
      <Stack.Screen name="SettingsList" options={{ title: 'Settings' }} component={SettingsListScreen} />
    </Stack.Navigator>
  )
}

export default SettingsStackNavigator
