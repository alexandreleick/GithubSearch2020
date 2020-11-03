import React, {useEffect} from 'react'
import {Input, Layout, Text, Button} from '@ui-kitten/components'
import {components} from "@eva-design/eva/mapping";
import {View} from "react-native";
import useUserSearch from "../../../hooks/user/useUserSearch.hook";


const SearchScreen: React.FC = () => {
    const [value, setValue] = React.useState('');

    const {
        data,
        loading,
        error,
        dispatchRequest,
    } = useUserSearch()
    useEffect(() => {
        console.log(data)
    })
    const onChangeSearch = (query: string) => setValue(query)


    const onSubmit = () => {
        dispatchRequest(value)
    }

    return (
        <>
            <View style={{flexDirection: 'row'}}>
                <Input
                    placeholder='Search for users / repositories'
                    value={value}
                    onChangeText={onChangeSearch}
                    style={{flexGrow: 1}}
                />
                <Button style={{
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    height: 9,
                    backgroundColor: 'black',
                    borderColor: 'black'
                }}
                        onPress={onSubmit}>
                    Search
                </Button>
            </View>
        </>
    );
}

export default SearchScreen
