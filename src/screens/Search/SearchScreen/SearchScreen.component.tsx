import React from 'react'
import {Input, Layout, Text, Button} from '@ui-kitten/components'
import {components} from "@eva-design/eva/mapping";
import {View} from "react-native";
import {grey50} from "react-native-paper/lib/typescript/src/styles/colors";


const SearchScreen: React.FC = () => {
    const [value, setValue] = React.useState('');

    return (
        <>
            <View style={{flexDirection: 'row'}}>
                <Input
                    placeholder='Place your Text'
                    value={value}
                    onChangeText={nextValue => setValue(nextValue)}
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
