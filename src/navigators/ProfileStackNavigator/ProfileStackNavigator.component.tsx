import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ProfileScreen from '../../screens/Profile/ProfileScreen'

const Stack = createStackNavigator()

const ProfileStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName={'Profile'}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  )
}

export default ProfileStackNavigator
