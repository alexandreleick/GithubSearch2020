import React from 'react'
import { createStackNavigator, StackHeaderProps } from '@react-navigation/stack'
import SearchScreen from '../../screens/Search/SearchScreen'
import Header from '../../components/Header/Header.component'

const Stack = createStackNavigator()

const SearchStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName={'Search'}>
      <Stack.Screen
        name="Search"
        options={{ header: (props: StackHeaderProps) => <Header {...props} title="Search Users / Repositories" /> }}
        component={SearchScreen}
      />
    </Stack.Navigator>
  )
}

export default SearchStackNavigator
