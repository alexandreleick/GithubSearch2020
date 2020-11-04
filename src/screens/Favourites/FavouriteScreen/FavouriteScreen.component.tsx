import React from 'react'
import { TextInput } from 'react-native'
import { Layout, Text, Button, Avatar, ListItem } from '@ui-kitten/components'

const Favourites = () => <Button size="tiny">Delete</Button>

const ItemImage = () => <Avatar source={require('../../../assets/icon/icon.png')} />

const FavouriteScreen: React.FC = () => {
  return (
    <>
      <Button>Add an item</Button>
      <ListItem
        title="Item 1"
        description="A set of React Native components"
        accessoryLeft={ItemImage}
        accessoryRight={Favourites}
      />
    </>
  )
}

export default FavouriteScreen
