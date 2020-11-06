import React, { useEffect, useState } from 'react'
import { Input, Layout, Text, Button, ListItem, Avatar } from '@ui-kitten/components'
import { components } from '@eva-design/eva/mapping'
import { View, Image, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import useUserSearch from '../../../hooks/user/useUserSearch.hook'
import useRepoSearch from '../../../hooks/repositories/useRepoSearch.hook'

const SearchScreen: React.FC = () => {
  const [value, setValue] = useState<string>('')
  const { navigate } = useNavigation()
  const [login, setLogin] = useState('')

  const { data, loading, error, dispatchRequest } = useUserSearch()
  const { data: datas, dispatchRepo } = useRepoSearch()
  /*useEffect(() => {
    if (data !== undefined && data.items.length) {
      setLogin(data.items[0].login)
      console.log(data)
    }
  })*/
  const onChangeSearch = (query: string) => setValue(query)

  const onSubmit = () => {
    dispatchRequest(value)
    dispatchRepo(value)
    //navigate('Result')
  }

  const Favorites = () => <Button size="tiny">FOLLOW</Button>
  const ItemImage = (url: string) => {
    return <Avatar source={{ uri: url }} style={{ width: 40, height: 40 }} />
  }

  const renderElement = () => {
    if (data !== undefined)
      return data.items.map((searchItem: any, index: number) => (
        <ListItem
          key={index}
          title={searchItem.login}
          description="Test"
          accessoryLeft={() => ItemImage(searchItem.avatar_url)}
          accessoryRight={Favorites}
        />
      ))
    return null
  }

  const renderRepoElement = () => {
    if (data !== undefined)
      return datas.items.map((searchItem: any, index: number) => (
        <ListItem
          key={index}
          title={searchItem.name}
          description={searchItem.description}
          accessoryLeft={() => ItemImage(searchItem.owner.avatar_url)}
          accessoryRight={Favorites}
        />
      ))
    return null
  }

  return (
    <>
      <ScrollView>
        <View style={{ flexDirection: 'row' }}>
          <Input
            placeholder="Search for users / repositories"
            value={value}
            onChangeText={onChangeSearch}
            style={{ flexGrow: 1 }}
          />

          <Button
            style={{
              position: 'absolute',
              right: 0,
              top: 0,
              height: 9,
              backgroundColor: 'black',
              borderColor: 'black',
            }}
            onPress={onSubmit}
          >
            Search
          </Button>
        </View>
        <View>{renderRepoElement()}</View>
      </ScrollView>
    </>
  )
}

export default SearchScreen
