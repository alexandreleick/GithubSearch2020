import React, { useEffect } from 'react'
import { Input, Layout, Text, Button, ListItem, Avatar } from '@ui-kitten/components'
import { components } from '@eva-design/eva/mapping'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import useUserSearch from '../../../hooks/user/useUserSearch.hook'
import useRepoSearch from '../../../hooks/repositories/useRepoSearch.hook'

const SearchScreen: React.FC = () => {
  const [value, setValue] = React.useState('')
  const { navigate } = useNavigation()
  const [login, setLogin] = React.useState('')

  const { data, loading, error, dispatchRequest } = useUserSearch()
  const { data: datas, dispatchRepo} = useRepoSearch()
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
    console.log(datas)
    //navigate('Result')
  }

  const Favorites = () => <Button size="tiny">FOLLOW</Button>
  const ItemImage = () => <Avatar source={require('../../../assets/icon/icon.png')} />

  const renderElement = () => {
    if (data !== undefined)
      return (
        <ListItem title={data.items[0].login} description="Test" accessoryLeft={ItemImage} accessoryRight={Favorites} />
      )
    return null
  }

  return (
    <>
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
      <View>{renderElement()}</View>
    </>
  )
}

export default SearchScreen
