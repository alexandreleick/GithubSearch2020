import React from 'react'
import { createStackNavigator, StackHeaderProps } from '@react-navigation/stack'
import AuthenticatedProfileScreen from '../../screens/Profile/ProfileScreen'
import Header from '../../components/Header/Header.component'
import UserResultProfileScreen from '../../screens/Search/UserResultProfileScreen/UserResultProfileScreen.component'
import RepoScreen from '../../screens/RepoScreen'

const Stack = createStackNavigator()

const ProfileStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName={'Profile'}>
      <Stack.Screen
        name="Profile"
        options={{ header: (props: StackHeaderProps) => <Header {...props} /> }}
        component={AuthenticatedProfileScreen}
      />
      <Stack.Screen
        name="ProfileUserProfile"
        initialParams={{ user: null, title: null }}
        options={{ header: (props: StackHeaderProps) => <Header {...props} title="ProfileUserProfile" /> }}
        component={UserResultProfileScreen}
      />
      <Stack.Screen
        name="ProfileRepo"
        initialParams={{ repo: null, title: null }}
        options={{ header: (props: StackHeaderProps) => <Header {...props} title="Repository Details" /> }}
        component={RepoScreen}
      />
    </Stack.Navigator>
  )
}

export default ProfileStackNavigator
