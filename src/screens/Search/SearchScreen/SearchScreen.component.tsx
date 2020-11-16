import React, { useState } from 'react'
import { Avatar, Button, Input, ListItem, Tab, TabView } from '@ui-kitten/components'
import { ScrollView, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import useUserSearch from '../../../hooks/search/useUserSearch.hook'
import useRepoSearch from '../../../hooks/search/useRepoSearch.hook'
import { SearchUser } from '../../../types/search/search-user.type'
import { SearchRepository } from '../../../types/search/search-repository.type'
import { textEmoji } from 'markdown-to-text-emoji'

const SearchScreen: React.FC = () => {
  const [value, setValue] = useState<string>('')
  const { navigate } = useNavigation()
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  const { data, loading, error, dispatchUserSearch } = useUserSearch()
  const { data: datas, dispatchRepoSearch } = useRepoSearch()
  const onChangeSearch = (query: string) => setValue(query)

  const onSubmit = () => {
    dispatchUserSearch(value)
    dispatchRepoSearch(value)
    //navigate('Result')
  }

  const ItemImage = (url: string) => {
    return <Avatar source={{ uri: url }} style={{ width: 40, height: 40 }} />
  }

  const renderElement = () => {
    if (data !== undefined)
      return data.items.map((user: SearchUser, index: number) => (
        <ListItem
          key={index}
          title={user.login}
          accessoryLeft={() => ItemImage(user.avatar_url)}
          onPress={() => navigate('SearchUserProfile', { profileUrl: user.url, title: '@' + user.login })}
        />
      ))
    return null
  }

  const renderRepoElement = () => {
    if (datas !== undefined)
      return datas.items.map((repo: SearchRepository, index: number) => (
        <ListItem
          key={index}
          title={repo.name}
          description={textEmoji(repo.description || '')}
          accessoryLeft={() => ItemImage(repo.owner.avatar_url)}
          onPress={() => navigate('SearchRepo', { repoUrl: repo.url, title: repo.name })}
        />
      ))
    return null
  }

  const renderTab = () => {
    if (datas !== undefined && data !== undefined)
      return (
        <TabView selectedIndex={selectedIndex} onSelect={(index) => setSelectedIndex(index)}>
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

  return (
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
  )
}

export default SearchScreen
