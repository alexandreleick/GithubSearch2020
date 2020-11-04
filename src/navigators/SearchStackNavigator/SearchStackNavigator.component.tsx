import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SearchScreen from '../../screens/Search/SearchScreen'
import ResultScreen from '../../screens/Result/ResultScreen.component'

const Stack = createStackNavigator()

const SearchStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName={'Search'}>
      <Stack.Screen name="Search" options={{ title: 'Search Users / Repositories' }} component={SearchScreen} />
      <Stack.Screen name="Result" options={{ title: 'Search Users / Repositories' }} component={ResultScreen} />
    </Stack.Navigator>
  )
}

export default SearchStackNavigator
