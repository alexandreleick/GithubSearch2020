import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SearchScreen from '../../screens/SearchScreen'

const Stack = createStackNavigator()

const SearchStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName={'Search'}>
      <Stack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  )
}

export default SearchStackNavigator
