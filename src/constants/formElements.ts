import { LuMail, LuLock, LuUserCheck } from 'react-icons/lu'

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

export const CommonFormText = {
  LOGIN: {
    heading: 'Bem-vindo de volta!',
    slogan: 'Entre com sua conta para continuar',
    accountTip: 'Não tem uma conta?',
    redirectText: 'Cadastre-se',
    redirect: '/register',
  },
  REGISTER: {
    heading: 'Criar conta',
    slogan: 'Começe sua jornada de organização hoje',
    accountTip: 'Já tem uma conta?',
    redirectText: 'Faça login',
    redirect: '/',
  },
} as const

export const FormContent = {
  LOGIN: {
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
  },
  REGISTER: {
    USERNAME: {
      label: 'Usuário',
      placeholder: 'nomeusuario',
      inputType: 'username',
      icon: LuUserCheck,
      required: 'Usuário é obrigatório',
    },
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
      required: 'Senha é obrigatória',
    },
    CONFIRM_PASSWORD: {
      label: 'Confirmar Senha',
      placeholder: '••••••••',
      inputType: 'password',
      icon: LuLock,
      required: 'Confirmação de senha é obrigatória',
    },
  },
} as const
