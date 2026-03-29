import { LuMail, LuLock } from 'react-icons/lu'

export const FormElements = {
  editMode: 'edit',
  createMode: 'create',
  ariaLabel: 'Formulário de criação de tarefa',
  title: 'title',
  titlePlaceholder: 'Digite o título da tarefa...',
  titleRequired: 'Título é obrigatório',
  titleErrorMessage: 'Título não pode ser menor que 3 caracteres',
  description: 'description',
  descriptionPlaceholder: 'Adicione uma descrição detalhada...',
  descriptionRequired: 'Descrição é obrigatório.',
  descriptionErrorMessage: 'Descrição não pode ser menor que 10 caracteres',
  priority: 'priority',
  dueDate: 'dueDate',
} as const

export const FormElementsLogin = {
  EMAIL: {
    label: 'E-mail',
    placeholder: 'seu@email.com',
    inputType: 'email',
    icon: LuMail,
    required: 'E-mail é obrigatório',
  },
  PASSWORD: {
    label: 'Senha',
    placeholder: '••••••••',
    inputType: 'password',
    icon: LuLock,
    required: 'Senha é obrigatório',
  },
} as const
