'use server'

import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

export async function removeAuthTokenCookie() {
  const cookieStore = await cookies()
  cookieStore.delete('authToken')

  redirect('/')
}
