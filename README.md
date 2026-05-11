# Task App

Uma aplicação de gerenciamento de tarefas moderna construída com **Next.js 16** e **React 19**, focada em explorar as últimas novidades do framework como **Server Actions** e **Server Components**.

## 🎯 Objetivo do Projeto

Este projeto foi criado com foco em estudar e implementar:
- ✨ **Server Components** - Renderização no servidor
- ⚡ **Server Actions** - Mutações de dados direto no servidor
- 🔄 **useTransition** - Transições de UI com states assíncronos
- 🎨 **Chakra UI** - Componentes acessíveis e responsivos
- 📝 **TypeScript** - Tipagem estática e segurança de tipos

## 🚀 Começando

### Pré-requisitos
- Node.js 18+
- npm, yarn, pnpm ou bun

### Instalação e Execução

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📋 Funcionalidades

- ✅ Criar novas tarefas
- ✏️ Editar tarefas existentes
- 🗑️ Deletar tarefas
- ✓ Marcar tarefas como concluídas (com Server Actions)
- 💾 Persistência de dados em backend
- 🎨 Interface limpa e responsiva
- ⚡ Atualizações otimistas com useTransition
- 🔐 Sistema de autenticação com login
- 📅 Formatação de datas e prazos

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Descrição |
|-----------|-----------|
| **Next.js 16** | Framework React com App Router |
| **React 19** | Biblioteca UI com novos hooks |
| **TypeScript** | Tipagem estática |
| **Chakra UI** | Sistema de componentes |
| **Server Actions** | Funções server-side para mutações |
| **Server Components** | Renderização no servidor |

## 📁 Estrutura Completa do Projeto

```
todo-app/
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package.json
├── README.md
├── tsconfig.json
├── public/
├── src/
│   ├── app/
│   │   ├── global.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── sign-in/
│   │   │   └── page.tsx
│   │   └── tasks/
│   │       ├── page.tsx
│   │       ├── add/
│   │       │   ├── action.ts
│   │       │   └── page.tsx
│   │       └── edit/
│   │           └── [id]/
│   │               ├── action.ts
│   │               └── page.tsx
│   ├── assets/
│   │   ├── icon.tsx
│   │   └── index.ts
│   ├── components/
│   │   ├── index.ts
│   │   ├── account-container/
│   │   │   └── index.tsx
│   │   ├── add-button/
│   │   │   └── index.tsx
│   │   ├── animated-background/
│   │   │   └── index.tsx
│   │   ├── arrow-back/
│   │   │   └── index.tsx
│   │   ├── calendar/
│   │   │   └── index.tsx
│   │   ├── card/
│   │   │   └── index.tsx
│   │   ├── completed-text/
│   │   │   └── index.tsx
│   │   ├── container/
│   │   │   └── index.tsx
│   │   ├── dashboard/
│   │   │   └── index.tsx
│   │   ├── date/
│   │   │   └── index.tsx
│   │   ├── descriptive-text/
│   │   │   └── index.tsx
│   │   ├── form/
│   │   │   ├── form-button.tsx
│   │   │   ├── form-input.tsx
│   │   │   ├── form-label.tsx
│   │   │   ├── form-tips.tsx
│   │   │   └── index.tsx
│   │   ├── form-login/
│   │   │   ├── action.ts
│   │   │   ├── checkbox-login.tsx
│   │   │   ├── form-input-login.tsx
│   │   │   └── index.tsx
│   │   ├── header/
│   │   │   └── index.tsx
│   │   ├── icon-button/
│   │   │   ├── action.ts
│   │   │   └── index.tsx
│   │   ├── modal/
│   │   │   └── index.tsx
│   │   ├── priorityLabel/
│   │   │   ├── index.tsx
│   │   │   └── priority-label-form.tsx
│   │   ├── tabs/
│   │   │   └── index.tsx
│   │   ├── task-item/
│   │   │   ├── index.tsx
│   │   │   └── toggleTask.ts
│   │   ├── task-preview/
│   │   │   └── index.tsx
│   │   └── ui/
│   │       ├── color-mode.tsx
│   │       ├── provider.tsx
│   │       └── toaster.tsx
│   ├── constants/
│   │   ├── buildHeaderInfo.ts
│   │   ├── formContainerStyles.ts
│   │   ├── formElements.ts
│   │   ├── formLabelEnum.ts
│   │   ├── headerEnum.ts
│   │   ├── index.ts
│   │   ├── priorityEnum.ts
│   │   ├── tabs.ts
│   ├── services/
│   │   ├── api-services.ts
│   │   ├── auth-service.ts
│   │   ├── httpClient.ts
│   │   └── index.ts
│   ├── theme/
│   │   └── theme.ts
│   ├── types/
│   │   └── index.ts
│   └── utils/
│       ├── dateFormatter.ts
│       ├── filterTasks.ts
│       ├── getAuthToken.ts
│       ├── getFormData.ts
│       ├── index.ts
│       └── normalize.ts
```

## 📂 Descrição dos Diretórios

### `src/app/`
Roteamento e layouts do Next.js usando App Router:
- `page.tsx` - Página inicial de login
- `sign-in/page.tsx` - Página de sign-in com fundo animado
- `tasks/page.tsx` - Dashboard de tarefas (Server Component)
- `tasks/add/` - Rota para criação de tarefas
- `tasks/edit/[id]/` - Rota para edição de tarefas

### `src/components/`
Componentes React divididos por feature:
- `task-item/` - Item de tarefa com checkbox e ações (Client Component)
- `dashboard/` - Container principal de tarefas (Server Component)
- `form/` - Formulário de criação/edição de tarefas (Client Component)
- `date/` - Exibição de datas e prazos
- `priorityLabel/` - Labels de prioridade
- `ui/` - Componentes base do Chakra UI
- `form-login/` - Componentes de login

### `src/services/`
Camada de comunicação com a API backend:
- `api-services.ts` - Funções de chamadas à API
- `httpClient.ts` - Cliente HTTP customizado
- `auth-service.ts` - Serviços de autenticação

### `src/utils/`
Funções utilitárias:
- `dateFormatter.ts` - Formatação de datas e cálculo de prazos
- `filterTasks.ts` - Filtragem de tarefas ativas/concluídas
- `getAuthToken.ts` - Obtenção de token de autenticação

### `src/constants/`
Constantes da aplicação:
- `formElements.ts` - Elementos de formulário
- `priorityEnum.ts` - Enum de prioridades
- `headerEnum.ts` - Tipos de header

### `src/theme/`
Configuração de tema do Chakra UI

## 🧭 Rotas Principais

- `/` - Página inicial de login
- `/sign-in` - Página de sign-in com fundo animado
- `/tasks` - Dashboard de tarefas
- `/tasks/add` - Formulário para criar nova tarefa
- `/tasks/edit/[id]` - Formulário para editar tarefa existente

## 🔄 Fluxo de Dados

```
Browser
   ↓
[page.tsx] Server Component (Login)
   ↓
[tasks/page.tsx] Server Component
   ↓
[getAllTasks] - API Call
   ↓
[Dashboard] Server Component
   ↓
[TaskItem] Client Component (useTransition)
   ↓
[toggleTask] Server Action
   ↓
[toggleTaskCompletion] API Call
   ↓
[revalidatePath] - Revalidação de dados

Criação/Edição:
[tasks/add/page.tsx] ou [tasks/edit/[id]/page.tsx]
   ↓
[TaskForm] Client Component (react-hook-form)
   ↓
[handleSubmitForm] ou [handleUpdateForm] Server Action
   ↓
[createNewTask] ou [updateTask] API Call
   ↓
[revalidatePath + redirect] - Revalidação e redirecionamento
```

## 📦 Tipos e Interfaces

```typescript
// src/types/index.ts
type Priority = 'ALTA' | 'MEDIA' | 'BAIXA'

type TaskResponse = {
  id: number
  title: string
  description: string
  completed: boolean
  createdAt: string
  dueDate: string
  updatedAt?: string
  priority: Priority
  userId: number
}

interface TaskProps {
  id: number
  title: string
  description: string
  priority: string
  createdAt: string
  dueDate: string
  updatedAt?: string
}

interface ServerActionResult {
  success: boolean
  title?: string
  error?: string
}

interface AuthLogin {
  token: string
  username: string
  roles: string[]
}
```

---

Esta estrutura segue as melhores práticas do Next.js 16 com separação clara entre Server Components e Client Components! 🚀

## 🔧 Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Build de produção
npm start        # Executa build de produção
npm run lint     # Executa ESLint
```

## 🔌 APIs Utilizadas

O projeto consome um backend através das seguintes funções em `src/services/api-services.ts`:

- `getAllTasks()` - Busca todas as tarefas
- `getTaskById(id)` - Busca tarefa por ID
- `createNewTask(...)` - Cria nova tarefa
- `toggleTaskCompletion(id, completed)` - Alterna status de conclusão
- `updateTask(id, updatedTask)` - Atualiza tarefa
- `deleteTaskById(id)` - Deleta tarefa

## ⚙️ Configuração de Ambiente

Para funcionar corretamente, configure a variável `BASE_URL` no arquivo `.env.local`:

```env
BASE_URL=https://api.seu-backend.com
```

O projeto também usa autenticação por token armazenado em cookies via `getAuthToken()`.
