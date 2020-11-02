import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import BottomNavigator from '../BottomNavigator'

const Stack = createStackNavigator()

const MainNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName={'BottomNavigator'} screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
    </Stack.Navigator>
  )
}

export default MainNavigator
