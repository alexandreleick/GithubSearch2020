import React from 'react'
import { createStackNavigator, StackHeaderProps } from '@react-navigation/stack'
import AuthenticatedProfileScreen from '../../screens/Profile/ProfileScreen'
import Header from '../../components/Header/Header.component'

const Stack = createStackNavigator()

const ProfileStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName={'Profile'}>
      <Stack.Screen
        name="Profile"
        options={{ header: (props: StackHeaderProps) => <Header {...props} /> }}
        component={AuthenticatedProfileScreen}
      />
    </Stack.Navigator>
  )
}

export default ProfileStackNavigator
