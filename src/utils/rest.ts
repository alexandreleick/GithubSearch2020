import { loadAuthInfos } from './auth'
import Axios, { AxiosRequestConfig, AxiosResponse, Method } from 'axios'

export const BASE_URL = 'https://api.github.com'
export const ACCESS_TOKEN_URL = 'https://github.com/login/oauth/access_token'
export const CALLBACK_URL = 'https://epitech-react-native.app/callback'

export const APP_CLIENT_ID = 'Iv1.166f1878b8caf064'
export const APP_CLIENT_SECRET = '634701d0461ceafca1ea7682b73212b4dd6a648b'

export const axiosConfig = { baseURL: BASE_URL }
export const axios = Axios.create(axiosConfig)

// Intercept request and add header
axios.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    const authInfos = await loadAuthInfos()
    if (authInfos && config.headers.Authorization != false) {
      config.headers.Authorization = 'Bearer ' + authInfos?.token
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

export interface RestParams {
  url: string
  method?: Method
  headers?: {}
  body?: any
}

export const rest = (params: RestParams): Promise<AxiosResponse> => {
  const { url, method, headers, body } = params

  const req: AxiosRequestConfig = {
    url,
    method: method || 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    data: body,
  }

  return axios(req)
}

export const restWithToken = async (params: RestParams): Promise<AxiosResponse> => {
  const authInfos = await loadAuthInfos()
  if (!authInfos) {
    throw Error('You are not authenticated')
  }

  return await rest({
    ...params,
    headers: {
      ...params.headers,
      Authorization: `Bearer ${authInfos.token}`,
    },
  })
}

export const formatUrlWithParams = (url: string, params: any): string => {
  const formattedUrl = Object.keys(params).reduce((acc, key) => acc.replace(`:${key}`, params[key]), url)
  return formattedUrl
}

export const formatUrlWithQueryParams = (url: string, params: any): string => {
  const formattedUrl = Object.keys(params).reduce(
    (acc, key, index) => `${acc}${index === 0 ? '?' : '&'}${[key]}=${params[key]}`,
    url,
  )
  return formattedUrl
}

export const parseQueryParameters = (queryUrl: string): any => {
  let url = queryUrl
  if (queryUrl.startsWith('http')) {
    url = queryUrl.split('?').pop() || queryUrl
  }
  const query = url[0] === '?' ? url.substr(1) : url
  const result: { [key: string]: string } = {}
  query.split('&').forEach(function (part) {
    const item = part.split('=')
    result[item[0]] = decodeURIComponent(item[1])
  })
  return result
}
