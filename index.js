import { AppRegistry } from 'react-native'
import App from './src/App'
import { name } from './app.json'
import { configure } from 'axios-hooks'
import LRU from 'lru-cache'
import { axios } from './src/utils/rest'

const cache = new LRU({ max: 10 })
configure({ axios, cache })

console.disableYellowBox = true

AppRegistry.registerComponent(name, () => App)
