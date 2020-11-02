import React from 'react'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs/src/types'
import { BottomNavigation, BottomNavigationTab, Icon } from '@ui-kitten/components'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const BottomNav: React.FC<BottomTabBarProps> = ({ state, navigation }: BottomTabBarProps) => {
  const { bottom } = useSafeAreaInsets()

  const FavouriteIcon = (props) => <Icon {...props} name="heart-outline" />
  const SearchIcon = (props) => <Icon {...props} name="search-outline" />
  const ProfileIcon = (props) => <Icon {...props} name="person-outline" />

  return (
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={(index: number) => navigation.navigate(state.routeNames[index])}
      style={{ paddingBottom: bottom }}
    >
      <BottomNavigationTab title="Favourites" icon={FavouriteIcon} />
      <BottomNavigationTab title="Search" icon={SearchIcon} />
      <BottomNavigationTab title="Profile" icon={ProfileIcon} />
    </BottomNavigation>
  )
}

export default BottomNav
