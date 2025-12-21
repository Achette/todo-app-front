import { Container, Header, TaskForm } from '@/components'
import { HeaderTypeEnum } from '@/constants'
import { handleSubmitForm } from './action'

const AddTask = async () => {
  return (
    <>
      <Header type={HeaderTypeEnum.ADD} />
      <Container>
        <TaskForm mode="create" onSubmitForm={handleSubmitForm} />
      </Container>
    </>
  )
}

export default AddTask
