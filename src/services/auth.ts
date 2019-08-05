export const getUserId = (def = null) => {
  const userId = localStorage.getItem('uid')
  return userId ? userId : def
}

export const setUserId = (userId: string) => localStorage.setItem('uid', userId)

export const getToken = () => localStorage.getItem('token')

export const setToken = (token: string) => localStorage.setItem('token', token)

export const clear = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('uid')
}
