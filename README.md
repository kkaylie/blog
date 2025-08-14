# Cloud-Native Headless Blog

A modern, high-performance headless blog frontend built with **Next.js** and **TypeScript**, leveraging **Notion API** as a live CMS for seamless content management. This project demonstrates a complete evolution from a simple CMS-dependent frontend to a sophisticated, event-driven, serverless architecture.

## 🚀 Features

### Current Implementation

- **Next.js 15** with TypeScript for type-safe development
- **Notion API Integration** as a headless CMS for intuitive content management
- **Server-Side Rendering (SSR)** for optimal SEO and performance
- **Tailwind CSS** for modern, responsive styling
- **Markdown Rendering** with syntax highlighting via Prism
- **Component-based Architecture** with reusable UI components

### Architecture Evolution (In Progress)

- **Event-Driven Serverless Backend** on AWS for decoupled, scalable architecture
- **Data Synchronization Service** using AWS Lambda and EventBridge
- **Type-Safe GraphQL API** with Apollo Server on AWS Lambda
- **PostgreSQL on RDS** with Prisma ORM for data persistence
- **CI/CD Pipeline** with GitHub Actions and automated AWS deployments

## 🛠️ Tech Stack

### Frontend

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React Markdown** - Markdown rendering with rehype/remark plugins
- **Lucide React** - Modern icon library

### CMS & Content

- **Notion API** - Headless CMS for content management
- **notion-to-md** - Convert Notion blocks to Markdown

### Architecture (Planned)

- **AWS Lambda** - Serverless compute
- **AWS EventBridge** - Event-driven architecture
- **AWS RDS PostgreSQL** - Relational database
- **AWS API Gateway** - API management
- **AWS SSM Parameter Store** - Configuration management
- **Apollo Server** - GraphQL API server
- **Prisma ORM** - Database toolkit
- **GitHub Actions** - CI/CD pipeline

## 🏗️ Architecture Overview

### Current: Direct CMS Integration

```mermaid
Next.js Frontend ↔ Notion API
```

### Target: Event-Driven Serverless Architecture

```mermaid
Next.js Frontend ↔ GraphQL API (AWS Lambda) ↔ PostgreSQL (RDS)
                                ↑
                    Event-Driven Sync Service
                         (Lambda + EventBridge)
                                ↓
                           Notion API
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended)
- Notion workspace with API access

### Environment Setup

1. Clone the repository

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Set up environment variables:

   ```bash
   cp .env.example .env.local
   ```

   Configure the following variables:

   ```env
   NOTION_API_KEY=your_notion_api_key
   NOTION_DATABASE_ID=your_notion_database_id
   ```

### Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 📝 Content Management

### Notion Database Schema

The Notion database should include the following properties:

- **Title** (Title) - Post title
- **Slug** (Rich Text) - URL slug
- **Status** (Status) - Published/Draft status
- **PublishedDate** (Date) - Publication date
- **Summary** (Rich Text) - Post summary/description
- **Tags** (Multi-select) - Post categories
- **IsPinned** (Checkbox) - Feature post flag

### Creating Content

1. Add new pages to your Notion database
2. Set the status to "Published"
3. Configure the slug and metadata
4. Content will automatically appear on the blog

## 🔮 Future Enhancements

### Event-Driven Data Synchronization

- **AWS Lambda** functions for periodic Notion content fetching
- **AWS EventBridge** for event orchestration
- **PostgreSQL** persistence for improved performance
- **SSM Parameter Store** for state management

### GraphQL API Layer

- **Apollo Server** on AWS Lambda
- Type-safe schema generation
- Optimized queries to eliminate over-fetching
- Exposed via AWS API Gateway

### CI/CD Pipeline

- Automated builds with **GitHub Actions**
- **esbuild** for optimized bundling
- Automated deployment to AWS Lambda
- Infrastructure as Code with AWS CDK/Terraform

## 📄 License

This project is private and proprietary.

## 🤝 Contributing

This is a personal project. For suggestions or issues, please open an issue in the repository.
