import React from 'react'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs/src/types'
import { View } from 'react-native'

const BottomNav: React.FC<BottomTabBarProps> = ({ state, navigation }: BottomTabBarProps) => {
  const currentRoute = state.routeNames[state.index]

  return <View></View>
}

export default BottomNav
