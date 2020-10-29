import { AppRegistry } from 'react-native'
import App from './src/App'
import { name } from './app.json'
import { configure } from 'axios-hooks'
import LRU from 'lru-cache'
import Axios from 'axios'

const axios = Axios.create({
  baseURL: 'https://api.github.com',
})

const cache = new LRU({ max: 10 })
configure({ axios, cache })

AppRegistry.registerComponent(name, () => App)
