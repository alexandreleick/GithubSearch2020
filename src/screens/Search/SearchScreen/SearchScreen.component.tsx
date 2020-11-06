import React, { useEffect, useState } from 'react'
import { Input, Layout, Text, Button, ListItem, Avatar, TabView, Tab } from '@ui-kitten/components'
import { components } from '@eva-design/eva/mapping'
import { View, Image, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import useUserSearch from '../../../hooks/user/useUserSearch.hook'
import useRepoSearch from '../../../hooks/repositories/useRepoSearch.hook'
import { ProfileDetailsView } from '../../Profile/ProfileScreen/ProfileDetails/ProfileDetails.styled'

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
    if (datas !== undefined)
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

  const renderTab = () => {
    if (datas !== undefined && data !== undefined)
      return (
        <TabView
          selectedIndex={selectedIndex}
          shouldLoadComponent={shouldLoadComponent}
          onSelect={(index) => setSelectedIndex(index)}
        >
          <Tab title={'Repositories: ' + datas.items.length}>
            <View>{renderRepoElement()}</View>
          </Tab>
          <Tab title={'Users: ' + data.items.length}>
            <View>{renderElement()}</View>
          </Tab>
        </TabView>
      )
    return null
  }

  const [selectedIndex, setSelectedIndex] = useState<number>(0)

  const shouldLoadComponent = (index: number) => index === selectedIndex

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
        <View>{renderTab()}</View>
      </ScrollView>
    </>
  )
}

export default SearchScreen
