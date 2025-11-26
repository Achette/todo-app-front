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
├── src/
│   ├── app/
│   │   ├── layout.tsx                 # Layout raiz com Provider Chakra UI
│   │   ├── page.tsx                   # Página inicial
│   │   ├── global.css                 # Estilos globais
│   │   └── tasks/
│   │       └── page.tsx               # Dashboard de tarefas (Server Component)
│   │
│   ├── components/
│   │   ├── TaskItem/
│   │   │   ├── index.tsx              # Componente de item de tarefa (Client)
│   │   │   ├── toggleTask.ts          # Server Action para toggle
│   │   │   └── types.ts               # Tipos da tarefa
│   │   │
│   │   ├── Dashboard/
│   │   │   ├── index.tsx              # Dashboard principal (Server Component)
│   │   │   └── dashboard.module.css   # Estilos do dashboard
│   │   │
│   │   ├── TaskForm/
│   │   │   ├── index.tsx              # Formulário de criação (Client)
│   │   │   └── createTask.ts          # Server Action criar tarefa
│   │   │
│   │   ├── priorityLabel.tsx          # Label de prioridade
│   │   ├── date.tsx                   # Formatador de data
│   │   ├── icon-button.tsx            # Botão com ícone
│   │   │
│   │   └── ui/
│   │       └── provider.tsx           # Provider Chakra UI
│   │
│   ├── services/
│   │   ├── api-services.ts            # Funções de chamadas à API
│   │   │   ├── getAllTasks()
│   │   │   ├── onChangeCheckbox()
│   │   │   ├── createTask()
│   │   │   ├── updateTask()
│   │   │   └── deleteTask()
│   │   │
│   │   └── httpClient.ts              # Cliente HTTP customizado
│   │
│   ├── types/
│   │   ├── task.ts                    # Interface TaskResponse
│   │   ├── priority.ts                # Enum Priority
│   │   └── api.ts                     # Tipos de resposta da API
│   │
│   ├── hooks/
│   │   └── useTask.ts                 # Hook customizado para tarefas
│   │
│   ├── utils/
│   │   ├── dateFormat.ts              # Utilitários de formatação de data
│   │   └── validators.ts              # Validadores
│   │
│   └── constants/
│       ├── api.ts                     # URLs e constantes de API
│       └── messages.ts                # Mensagens de erro e sucesso
│
├── public/
│   ├── icons/                         # Ícones SVG
│   └── images/                        # Imagens estáticas
│
├── .env.local                         # Variáveis de ambiente (local)
├── .env.example                       # Exemplo de variáveis
├── .gitignore                         # Arquivos a ignorar no git
├── package.json                       # Dependências do projeto
├── tsconfig.json                      # Configuração TypeScript
├── next.config.ts                     # Configuração Next.js
├── README.md                          # Documentação do projeto
└── .eslintrc.json                     # Configuração ESLint
```

## 📂 Descrição dos Diretórios

### `src/app/`
Roteamento e layouts do Next.js usando App Router

### `src/components/`
Componentes React divididos por feature:
- **TaskItem** - Exibe uma tarefa individual (Client Component com useTransition)
- **Dashboard** - Container principal de tarefas (Server Component)
- **TaskForm** - Formulário de criação (Client Component)
- **ui** - Componentes base do Chakra UI

### `src/services/`
Camada de comunicação com a API backend

### `src/types/`
Definições de interfaces TypeScript reutilizáveis

### `src/hooks/`
Hooks customizados do React

### `src/utils/`
Funções utilitárias e helpers

### `src/constants/`
Constantes da aplicação

## 🔄 Fluxo de Dados

```
Browser
   ↓
[page.tsx] Server Component
   ↓
[getAllTasks] - API Call
   ↓
[Dashboard] Server Component
   ↓
[TaskItem] Client Component (useTransition)
   ↓
[toggleTask] Server Action
   ↓
[onChangeCheckbox] API Call
   ↓
[revalidatePath] - Revalidação de dados
```

## 📦 Tipos e Interfaces

```typescript
// types/task.ts
export interface TaskResponse {
  id: number
  title: string
  description: string
  completed: boolean
  createdAt: string
  priority: Priority
  userId: number
}

// types/priority.ts
export enum Priority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high'
}
```

---

Esta estrutura segue as melhores práticas do Next.js 16 com separação clara entre Server Components e Client Components! 🚀

## 🔧 Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Constrói para produção
npm start        # Inicia servidor de produção
npm run lint     # Executa linter
```

## 💡 Conceitos-Chave do Projeto

### Server Actions
As Server Actions são utilizadas para mutações de dados sem necessidade de criar rotas API tradicionais:

```typescript
// Exemplo: toggleTask.ts
'use server'
export const toggleTask = async (id: number, completed: boolean) => {
  await onChangeCheckbox(id, completed)
  revalidatePath('/tasks')
}
```

### Server Components
Componentes renderizados no servidor que buscam dados diretamente:

```typescript
// Exemplo: page.tsx
export default async function TasksPage() {
  const tasks = await getAllTasks()
  return <Dashboard tasks={tasks} />
}
```

### useTransition Hook
Gerencia estados de transição em Client Components:

```typescript
const [pending, startTransition] = useTransition()
startTransition(() => toggleTask(id, completed))
```

## 📝 Como Usar

1. **Criar tarefa** - Preencha o formulário e clique em "Adicionar"
2. **Marcar como concluída** - Clique no checkbox (usa Server Action)
3. **Editar** - Clique no ícone de edição
4. **Deletar** - Clique no ícone de lixeira

## 🔌 Integração com Backend

O projeto se conecta a uma API backend em `http://localhost:8080`:

```
GET  /tasks              # Listar todas as tarefas
POST /tasks              # Criar nova tarefa
PATCH /tasks/:id         # Atualizar tarefa
DELETE /tasks/:id        # Deletar tarefa
```

Configure a URL base em `.env.local`:
```
BASE_URL=http://localhost:8080
```

## 📚 Recursos de Aprendizado

- [Documentação Next.js 15](https://nextjs.org/docs)
- [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions)
- [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)
- [React 19 Features](https://react.dev)
- [Chakra UI Docs](https://chakra-ui.com)

## 🚀 Deploy

### Vercel (Recomendado)
```bash
vercel deploy
```

### Outras plataformas
Consulte a [documentação de deployment](https://nextjs.org/docs/app/building-your-application/deploying)

## 📄 Licença

Projeto open source para fins educacionais.

---

**Desenvolvido com ❤️ para estudar Next.js 16 e React 19**