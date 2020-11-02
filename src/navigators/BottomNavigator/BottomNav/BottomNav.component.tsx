import React from 'react'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs/src/types'
import { BottomNavigation, BottomNavigationTab, Icon, IconProps } from '@ui-kitten/components'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const BottomNav: React.FC<BottomTabBarProps> = ({ state, navigation }: BottomTabBarProps) => {
  const { bottom } = useSafeAreaInsets()

  const FavouriteIcon = (props: IconProps) => <Icon {...props} name="star-outline" />
  const SearchIcon = (props: IconProps) => <Icon {...props} name="search-outline" />
  const ProfileIcon = (props: IconProps) => <Icon {...props} name="person-outline" />
  const SettingsIcon = (props: IconProps) => <Icon {...props} name="settings-outline" />

  return (
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={(index: number) => navigation.navigate(state.routeNames[index])}
      style={{ paddingBottom: bottom }}
    >
      <BottomNavigationTab title="Favourites" icon={FavouriteIcon} />
      <BottomNavigationTab title="Search" icon={SearchIcon} />
      <BottomNavigationTab title="Profile" icon={ProfileIcon} />
      <BottomNavigationTab title="Settings" icon={SettingsIcon} />
    </BottomNavigation>
  )
}

export default BottomNav
