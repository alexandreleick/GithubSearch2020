import React from 'react'
import { createStackNavigator, StackHeaderProps } from '@react-navigation/stack'
import SettingsListScreen from '../../screens/Settings/SettingsListScreen'
import Header from '../../components/Header/Header.component'

const Stack = createStackNavigator()

const SettingsStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName={'SettingsList'}>
      <Stack.Screen
        name="SettingsList"
        options={{ header: (props: StackHeaderProps) => <Header {...props} title="Settings" /> }}
        component={SettingsListScreen}
      />
    </Stack.Navigator>
  )
}

export default SettingsStackNavigator
