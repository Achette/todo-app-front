import { Container, Header, TaskForm } from '@/components'
import { getTaskById } from '@/services'
import { HeaderTypeEnum } from '@/constants'
import { handleUpdateForm } from './action'

async function EditPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const task = await getTaskById(Number(id))

  return (
    <>
      <Header type={HeaderTypeEnum.EDIT} />
      <Container>
        <TaskForm
          mode="edit"
          onUpdateSubmitForm={handleUpdateForm}
          taskData={task}
        />
      </Container>
    </>
  )
}

export default EditPage
