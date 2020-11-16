import React from 'react'
import { Avatar, Card, Layout, Text } from '@ui-kitten/components'
import { Container, UserCardView } from './FavouriteScreen.styled'
import { User } from '../../../types/user/user.type'
import { useSelector } from 'react-redux'
import { selectRepositoriesFavorites, selectUsersFavorites } from '../../../redux/favourite/selectors'
import { Repository } from '../../../types/repositories/repository.type'
import LottieView from 'lottie-react-native'
import RepositoryCard from '../../../components/Profile/shared/RepositoryCard/RepositoryCard.component'

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
      {users &&
        users.map((user: User) => (
          <Card key={user.node_id} style={{ marginBottom: 10, marginHorizontal: 10, borderRadius: 10 }}>
            <UserCardView>
              <Avatar source={{ uri: user.avatar_url }} style={{ width: 40, height: 40 }} />
              <Text style={{ marginTop: 10, marginLeft: 10 }}>{user.login}</Text>
            </UserCardView>
          </Card>
        ))}
      {repositories &&
        repositories.map((repo: Repository) => (
          <RepositoryCard key={repo.node_id} repo={repo} routeName={'SearchRepo'} />
        ))}
    </Container>
  )
}

export default AddItem
