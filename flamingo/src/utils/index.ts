import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios'

const instance = axios.create({
  baseURL:
    typeof import.meta.env.VITE_API_BASE_URL === 'string' ? import.meta.env.VITE_API_BASE_URL : '',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

instance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => Promise.reject(new Error(error instanceof Error ? error.message : String(error)))
)

instance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(new Error(error instanceof Error ? error.message : String(error)))
)

export const apiRequest = async <T = any>(
  config: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  return instance.request<T>(config)
}
