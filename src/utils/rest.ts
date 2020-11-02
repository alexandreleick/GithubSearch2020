import { loadAuthInfos } from './auth'
import Axios, { AxiosRequestConfig, AxiosResponse, Method } from 'axios'

export const axios = Axios.create({
  baseURL: 'https://api.github.com',
})

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

export const formatUrlWithParams = (url: string, params: any) => {
  const formattedUrl = Object.keys(params).reduce((acc, key) => acc.replace(`:${key}`, params[key]), url)
  return formattedUrl
}

export const formatUrlWithQueryParams = (url: string, params: any) => {
  const formattedUrl = Object.keys(params).reduce(
    (acc, key, index) => `${acc}${index === 0 ? '?' : '&'}${[key]}=${params[key]}`,
    url,
  )
  return formattedUrl
}
