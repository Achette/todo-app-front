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
  register: async (
    username: string,
    email: string,
    password: string
  ): Promise<Register> => {
    const endpoint = `${url}/auth/register`

    return HttpClient.request<Register>(endpoint, {
      method: 'POST',
      body: JSON.stringify({
        name: username,
        username: email,
        password,
      }),
    })
  },
}
