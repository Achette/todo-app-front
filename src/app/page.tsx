import { AccountContainer } from '@/components'
import { FormLogin } from '@/components/form-login'
import { headers } from 'next/headers';

export default async function Home() {
   const headersList = await headers();
  const userAgent = headersList.get('user-agent') || 'Desconhecido';

  console.log('userAgent', userAgent)
  return (
    <AccountContainer>
      <FormLogin />
    </AccountContainer>
  )
}
