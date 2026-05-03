import { HttpClient } from './httpClient'

const url = process.env.BASE_URL

export const authService = {
  userLogin: async (username: string, password: string): Promise<AuthLogin> => {
    const endpoint = `${url}/auth/login`

    return HttpClient.request<AuthLogin>(endpoint, {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
      }),
    })
  },
}
