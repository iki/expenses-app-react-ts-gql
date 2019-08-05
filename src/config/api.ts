const {
  NODE_ENV: env,
  PUBLIC_URL: publicUrl,
  REACT_APP_API_URL: defaultApiUrl,
  REACT_APP_API_URL_GC: graphcoolApiUrl,
  REACT_APP_FILE_URL: defaultFileUrl,
  REACT_APP_FILE_URL_GC: graphcoolFileUrl,
  REACT_APP_WS_URL: defaultWsUrl,
  REACT_APP_WS_URL_GC: graphcoolWsUrl,
} = process.env

const useGraphcoolUrl =
  !!window.location.search &&
  window.location.search
    .replace(/^\?/, '')
    .split('&')
    .includes('gc')

export const baseUrl = publicUrl
export const basePath =
  baseUrl &&
  baseUrl
    .replace(/^[a-z]+:\/\/[^/]+/, '')
    .replace(/[?#].*/, '')
    .replace(/\/$/, '')

export const apiUrl = (useGraphcoolUrl && graphcoolApiUrl) || defaultApiUrl
export const fileUrl = (useGraphcoolUrl && graphcoolFileUrl) || defaultFileUrl
export const wsUrl = (useGraphcoolUrl && graphcoolWsUrl) || defaultWsUrl

if (!process.env.TEST_API_RUNNING) {
  console.debug(`api endpoints (${env || 'local'})`, {
    baseUrl,
    basePath,
    apiUrl,
    fileUrl,
    wsUrl,
    useGraphcoolUrl,
    env: process.env,
  })
}

export default {
  baseUrl,
  basePath,
  apiUrl,
  fileUrl,
  wsUrl,
}
