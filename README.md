# KK's Personal Blog

A modern, type-safe personal blog built with **Next.js 15** and **TypeScript**, featuring a **GraphQL API** backend and **Notion** as a headless CMS. This blog showcases web development expertise through clean architecture, modern tooling, and thoughtful design.

## ✨ Features

- **Modern Next.js 15** with App Router and React 19
- **Type-Safe GraphQL** integration with Apollo Client and code generation
- **Notion as CMS** for seamless content management and authoring
- **Server-Side Rendering** for optimal SEO and performance
- **Responsive Design** with Tailwind CSS and custom components
- **Markdown Support** with syntax highlighting and GitHub Flavored Markdown
- **Performance Monitoring** with Vercel Analytics and Speed Insights
- **Clean Architecture** with component-based design patterns

## 🛠️ Tech Stack

### Frontend

- **Next.js 15** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling with custom design system
- **Lucide React** - Beautiful icon library

### Backend & Data

- **GraphQL** - Type-safe API with schema-first approach
- **Apollo Client** - State management and data fetching
- **GraphQL Code Generator** - Automatic TypeScript types from schema
- **Notion API** - Headless CMS for content management

### Content & Rendering

- **React Markdown** - Markdown rendering with plugins
- **Remark GFM** - GitHub Flavored Markdown support
- **Rehype Prism Plus** - Syntax highlighting for code blocks
- **notion-to-md** - Convert Notion blocks to Markdown

### Development & Tooling

- **ESLint** - Code linting with Next.js and Prettier integration
- **Prettier** - Code formatting with Tailwind CSS plugin
- **TypeScript** - Static type checking
- **pnpm** - Fast, disk space efficient package manager

## 🏗️ Architecture

```text
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Next.js App   │ ←→ │   GraphQL API    │ ←→ │   Notion CMS    │
│                 │    │                  │    │                 │
│ • SSR/SSG       │    │ • Type-safe      │    │ • Content       │
│ • Apollo Client │    │ • Code Gen       │    │ • Rich editing  │
│ • Components    │    │ • Schema-first   │    │ • Real-time     │
└─────────────────┘    └──────────────────┘    └─────────────────┘
```

## 🚀 Getting Started

### Prerequisites

- **Node.js 18+** - JavaScript runtime
- **pnpm** - Fast, disk space efficient package manager (recommended)
- **GraphQL API** - Backend API endpoint
- Access to a **Notion workspace** (if using Notion CMS features)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/kkaylie/blog.git
   cd blog
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Environment Setup**

   Create a `.env.local` file in the root directory:

   ```env
   # GraphQL API endpoint
   NEXT_PUBLIC_GRAPHQL_ENDPOINT=your_graphql_api_endpoint
   ```

4. **Generate GraphQL Types**

   ```bash
   pnpm generate
   ```

### Development

Start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm generate` - Generate GraphQL types from schema

## 📝 Content Management

### GraphQL Schema

The blog expects a GraphQL API with the following types:

```graphql
type Post {
  id: ID!
  title: String!
  slug: String!
  summary: String
  cover: String
  icon: String
  published_date: String
  is_pinned: Boolean
  tags: [String!]
  markdown: String # Full content in Markdown format
}

type Query {
  posts: [Post!]!
  post(slug: String!): Post
}
```

### Creating Content

1. **Through your GraphQL API** - Add posts via your backend system
2. **Using Notion** - If configured, content can be managed through Notion pages
3. **Direct Integration** - Connect your preferred CMS via the GraphQL layer

## 🎨 Customization

### Design System

The blog uses a clean, minimal design built with Tailwind CSS. Key components include:

- **HeaderContainer** - Navigation and site branding
- **ArticleListItem** - Post preview cards
- **CodeBlock & CodeSpan** - Syntax-highlighted code display
- **Hero** - Landing page hero section

### Styling

Customize the design by modifying:

- `app/globals.css` - Global styles and CSS variables
- `tailwind.config.ts` - Tailwind configuration
- Individual component files for specific styling

## 🪤 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Set environment variables** in the Vercel dashboard
3. **Deploy** - Automatic deployments on every push

### Other Platforms

The blog is a standard Next.js application and can be deployed to:

- **Netlify**
- **AWS Amplify**
- **Railway**
- **Any Node.js hosting provider**

## 📊 Performance & Analytics

The blog includes:

- **Vercel Analytics** - Page views and user behavior
- **Vercel Speed Insights** - Core Web Vitals monitoring
- **SSR/SSG** - Optimized rendering for performance
- **Image Optimization** - Next.js automatic image optimization

## 🔧 Development Notes

### Code Generation

GraphQL types are automatically generated using GraphQL Code Generator. The configuration is in `codegen.ts` and generates type-safe hooks and components in `lib/graphql/generated/`.

### Architecture Decisions

- **Apollo Client** for GraphQL state management and caching
- **Next.js App Router** for modern React patterns
- **TypeScript** throughout for type safety
- **Component composition** for reusable UI elements

## 📄 License

This project is private and proprietary.

---

_This blog serves as both a personal learning journal and a demonstration of modern web development techniques using Next.js, TypeScript, GraphQL, and contemporary best practices._
