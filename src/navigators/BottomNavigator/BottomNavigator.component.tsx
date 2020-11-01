import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs/src/types'
import BottomNav from './BottomNav'
import DashboardStackNavigator from '../DashboardStackNavigator'

const Tab = createBottomTabNavigator()

const BottomNavigator: React.FC = () => {
  return (
    <Tab.Navigator initialRouteName={'Dashboard'} tabBar={(props): BottomTabBarProps => <BottomNav {...props} />}>
      <Tab.Screen name="Settings" component={DashboardStackNavigator} />
    </Tab.Navigator>
  )
}

export default BottomNavigator
