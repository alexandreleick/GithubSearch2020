import React from 'react'
import { createStackNavigator, StackHeaderProps } from '@react-navigation/stack'
import FavouriteScreen from '../../screens/Favourites/FavouriteScreen'
import Header from '../../components/Header/Header.component'

const Stack = createStackNavigator()

const FavouriteStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName={'Favourites'}>
      <Stack.Screen
        name="Favourites"
        options={{ title: 'Starred Repositories', header: (props: StackHeaderProps) => <Header {...props} /> }}
        component={FavouriteScreen}
      />
    </Stack.Navigator>
  )
}

export default FavouriteStackNavigator
