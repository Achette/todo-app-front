import { getAuthToken } from '@/utils'
import { HttpClient } from './httpClient'

const url = process.env.BASE_URL
const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET

// Helper to encode Base64 (works on both client and server)
const encodeBase64 = (str: string): string => {
  if (typeof window !== 'undefined') {
    // Client-side
    return window.btoa(str)
  } else {
    // Server-side
    return Buffer.from(str).toString('base64')
  }
}

export const authService = {
  userLogin: async (username: string, password: string): Promise<AuthLogin> => {
    const endpoint = `${url}/oauth2/token`

    const params = new URLSearchParams()
    params.append('username', username)
    params.append('password', password)
    params.append('grant_type', 'password')

    return HttpClient.request<AuthLogin>(endpoint, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + encodeBase64(CLIENT_ID + ':' + CLIENT_SECRET),
      },
      method: 'POST',
      body: params.toString(),
    })
  },

  register: async (
    username: string,
    email: string,
    password: string
  ): Promise<Register> => {
    const endpoint = `${url}/users`

    return HttpClient.request<Register>(endpoint, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        name: username,
        email,
        password,
      }),
    })
  },

  getMe: async (): Promise<LoggedUser> => {
    const token = await getAuthToken()
    const endpoint = `${url}/users/me`

    return HttpClient.request<LoggedUser>(
      endpoint,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'GET',
      },
      5000
    )
  },
}
