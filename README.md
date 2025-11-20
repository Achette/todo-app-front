# Todo App

Uma aplicação de gerenciamento de tarefas moderna construída com Next.js e React.

## 🚀 Começando

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver a aplicação.

## 📋 Funcionalidades

- ✅ Criar novas tarefas
- ✏️ Editar tarefas existentes
- 🗑️ Deletar tarefas
- ✓ Marcar tarefas como concluídas
- 💾 Persistência de dados
- 🎨 Interface limpa e responsiva

## 🛠️ Tecnologias Utilizadas

- **Next.js** - Framework React
- **TypeScript** - Tipagem estática
- **React** - Biblioteca UI
- **Chakra-UI** - Componentes customizados e CSS

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── layout.tsx       # Layout raiz da aplicação
│   ├── page.tsx         # Página principal
│   └── global.css       # Estilos globais
├── components/
│   └── ui/
│       └── provider.tsx  # Provider de contexto
└── ...
```

## 🔧 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Constrói a aplicação para produção
- `npm start` - Inicia o servidor de produção
- `npm run lint` - Executa verificação de código

## 📝 Como Usar

1. Digite sua tarefa no campo de entrada
2. Clique em "Adicionar" para criar a tarefa
3. Use os botões para editar ou deletar tarefas
4. Marque como concluída clicando no checkbox

## 🚀 Deploy

Para fazer deploy da aplicação, use a [Plataforma Vercel](https://vercel.com):

1. Push do código para um repositório Git
2. Importe o repositório no Vercel
3. Vercel fará build e deployment automaticamente

Consulte a [documentação de deployment do Next.js](https://nextjs.org/docs/app/building-your-application/deploying) para mais detalhes.

## 📚 Saiba Mais

- [Documentação Next.js](https://nextjs.org/docs) - recursos e features
- [Learn Next.js](https://nextjs.org/learn) - tutorial interativo
- [Repositório Next.js](https://github.com/vercel/next.js) - feedback e contribuições

## 📄 Licença

Este projeto está aberto para fins educacionais.