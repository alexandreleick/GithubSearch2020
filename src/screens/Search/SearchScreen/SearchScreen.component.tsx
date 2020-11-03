import React from 'react'
import {Input, Layout, Text, Button} from '@ui-kitten/components'
import {components} from "@eva-design/eva/mapping";
import {View} from "react-native";


const SearchScreen: React.FC = () => {
    const [value, setValue] = React.useState('');
    const onChangeSearch = (query: string) => setValue(query)

    return (
        <>
            <View style={{flexDirection: 'row'}}>
                <Input
                    placeholder='Search for users / repositories'
                    value={value}
                    onChangeText={onChangeSearch}
                    style={{flexGrow: 1}}
                />
                <Button style={{position: 'absolute', right: 0, top: 0, height: 9, backgroundColor: 'grey', borderColor: 'grey'}}>
                    Search
                </Button>
            </View>
        </>
    );
}

export default SearchScreen
