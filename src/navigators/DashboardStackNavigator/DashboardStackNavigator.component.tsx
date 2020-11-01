import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import FavouriteScreen from '../../screens/FavouriteScreen'

const Stack = createStackNavigator()

const DashboardStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName={'Favourites'}>
      <Stack.Screen name="Favourites" component={FavouriteScreen} />
    </Stack.Navigator>
  )
}

export default DashboardStackNavigator
