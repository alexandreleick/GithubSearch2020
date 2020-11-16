import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import BottomNav from './BottomNav'
import FavouriteStackNavigator from '../FavouritesStackNavigator'
import SearchStackNavigator from '../SearchStackNavigator'
import ProfileStackNavigator from '../ProfileStackNavigator'

const { Navigator, Screen } = createBottomTabNavigator()

const BottomNavigator: React.FC = () => {
  return (
    <Navigator tabBar={(props) => <BottomNav {...props} />} backBehavior={'none'}>
      <Screen name="Favourites" component={FavouriteStackNavigator} />
      <Screen name="Search" component={SearchStackNavigator} />
      <Screen name="Profile" component={ProfileStackNavigator} />
    </Navigator>
  )
}

export default BottomNavigator
