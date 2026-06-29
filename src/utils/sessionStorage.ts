const isServer = typeof globalThis.window === 'undefined'

interface SessionStorageData {
  email: string
  name: string
}

export const saveToSessionStorage = (key: string, data: SessionStorageData) => {
  if (isServer) return null

  sessionStorage.setItem(key, JSON.stringify(data))
}

export const getFromSessionStorage = (key: string) => {
  if (isServer) return {} as SessionStorageData

  const data = sessionStorage.getItem(key)

  if (data) return JSON.parse(data) as SessionStorageData

  return {} as SessionStorageData
}
