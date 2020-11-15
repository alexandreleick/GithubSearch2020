import React from 'react'
import { View } from 'react-native'
import { Avatar, Button, Layout, ListItem, Text } from '@ui-kitten/components'
import { Container } from './FavouriteScreen.styled'
import { User } from '../../../types/user/user.type'
import { useSelector } from 'react-redux'
import { selectRepositoriesFavorites, selectUsersFavorites } from '../../../redux/favourite/selectors'
import { Repository } from '../../../types/repositories/repository.type'
import LottieView from 'lottie-react-native'
import WebViewBottomSheet from '../../../components/BottomSheet/CustomBottomSheet/WebViewBottomSheet'
import { APP_CLIENT_ID } from '../../../utils/rest'

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
  const users: User[] = useSelector(selectUsersFavorites)
  const repositories: Repository[] = useSelector(selectRepositoriesFavorites)

  return (!users || users.length <= 0) && (!repositories || repositories.length <= 0) ? (
    <Layout level="2" style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 50 }}>
      <LottieView
        source={require('../../../assets/animations/empty.json')}
        speed={0.5}
        autoPlay
        style={{
          height: 150,
          alignSelf: 'center',
        }}
      />
      <Text category="h5">No favourites saved.</Text>
      <Text style={{ marginBottom: 30, textAlign: 'center' }} category="p1">
        Try to fav user or repository to add it here.
      </Text>
    </Layout>
  ) : (
    <Container>
      <Text>zii</Text>
    </Container>
  )
}

export default AddItem
