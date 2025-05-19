# DISPARO - Gerador de Notificações

DISPARO é uma aplicação web moderna construída com Next.js para gerenciamento e envio de notificações, focada em aumentar o engajamento dos usuários.

## 🏗️ Arquitetura

O projeto segue uma arquitetura moderna baseada em Next.js 14, utilizando o App Router e seguindo as melhores práticas de desenvolvimento.

### Estrutura de Diretórios

```
src/
├── app/                 # Rotas e páginas da aplicação
│   ├── dashboard/       # Área administrativa
│   │   ├── preview/    # Visualização de notificações
│   │   └── components/ # Componentes específicos do dashboard
│   ├── layout.tsx      # Layout principal da aplicação
│   └── page.tsx        # Página inicial
├── components/         # Componentes reutilizáveis
│   └── ui/            # Componentes de UI base
└── lib/               # Utilitários e configurações
```

## 🚀 Rotas Principais

- `/` - Página inicial com opções para criar ou receber notificações
- `/dashboard` - Área administrativa para gerenciamento de notificações
- `/inscrever` - Página para usuários se inscreverem para receber notificações

## 🎨 Componentes

### Página Inicial (`/`)

- Interface moderna com gradiente escuro
- Botão principal para criar notificações
- Botão secundário para inscrição em notificações
- Design responsivo e minimalista

### Dashboard (`/dashboard`)

- Área administrativa para gerenciamento de notificações
- Inclui funcionalidades de preview
- Componentes específicos para criação e gerenciamento

## 🛠️ Tecnologias Utilizadas

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Lucide Icons** - Ícones modernos
- **ESLint** - Linting e qualidade de código

## 🎯 Funcionalidades

1. **Criação de Notificações**

   - Interface intuitiva para criar novas notificações
   - Preview em tempo real
   - Personalização de conteúdo

2. **Gerenciamento de Notificações**

   - Dashboard administrativo
   - Visualização e edição de notificações existentes
   - Sistema de preview

3. **Inscrição de Usuários**
   - Sistema para usuários se inscreverem
   - Gerenciamento de preferências de notificação

## 🚀 Como Executar

1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Acesse `http://localhost:3000`

## 🎯 Notas de Desenvolvimento

- O projeto utiliza o App Router do Next.js para roteamento
- Implementação de componentes client-side quando necessário
- Estilização moderna com Tailwind CSS
- Sistema de notificações otimizado para engajamento
