import React, {useState} from 'react'
import {ListView, ScrollView, Text, View} from 'react-native'
import useUserSearch from '../../hooks/search/useUserSearch.hook'
import { SearchRepository } from '../../types/search/search-repository.type'
import useRepoSearch from "../../hooks/search/useRepoSearch.hook";
import {Avatar, Button, ListItem, Tab, TabView} from "@ui-kitten/components";

const ResultScreen: React.FC = () => {
    const { data: datas, dispatchRepoSearch } = useRepoSearch()
    const [selectedIndex, setSelectedIndex] = useState<number>(0)

    const ItemImage = (url: string) => {
        return <Avatar source={{ uri: url }} style={{ width: 40, height: 40 }} />
    }

    const renderRepoElement = () => {
        return datas.items.map((repo: SearchRepository, index: number) => (
            <ListItem
                key={index}
                title={repo.name}
                description={repo.description}
                accessoryLeft={() => ItemImage(repo.owner.avatar_url)}
            />
        ))
    }

    const renderTab = () => {
        return (
            <TabView selectedIndex={selectedIndex} onSelect={(index) => setSelectedIndex(index)}>
                <Tab title={'Repositories: '}>
                    <View>{renderRepoElement()}</View>
                </Tab>
            </TabView>
        )
        return null
    }

    return (
        <>
            <View>{renderTab()}</View>
        </>
    )
}

export default ResultScreen
