import React from 'react'
import {TextInput, Animated, View} from 'react-native'
import { Layout, Text, Avatar, Button, ListItem } from '@ui-kitten/components'

const Favourites = () => <Button size="tiny">Delete</Button>

const ItemImage = () => <Avatar source={require('../../../assets/icon/icon.png')} />

const FavouriteScreen = () => {
    return (
        <>
            <ListItem
                title="Item"
                description="A set of React Native components"
                accessoryLeft={ItemImage}
                accessoryRight={Favourites}
            />
        </>
    )
}

const AddItem: React.FC = () => {
    return(
        <>
            <View>
                <Button
                    title={"AddAnItem"}
                    OnClick={{FavouriteScreen}}>
                    Add an item
                </Button>
            </View>
        </>
    );
}

export default AddItem
