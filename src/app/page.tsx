import { AccountContainer } from '@/components'
import { FormLogin } from '@/components/form-login'
import { HeaderTypeEnum } from '@/constants'

export default function Home() {
  const elementsType = HeaderTypeEnum.DEFAULT

  return (
    <AccountContainer>
      <FormLogin elementsType={elementsType} />
    </AccountContainer>
  )
}
