import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import BottomNavigator from '../BottomNavigator'

const Stack = createStackNavigator()

const MainNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName={'Dashboard'} screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Dashboard" component={BottomNavigator} />
    </Stack.Navigator>
  )
}

export default MainNavigator
