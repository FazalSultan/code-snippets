# 🧠 CodeSnippet - VS Code Editor in Your Browser

CodeSnippet is a full-stack code editor app built with **Next.js**, **Prisma**, **SQLite** and **Shadcn** that allows users to **write**, **view**, **edit**, and **delete** code snippets right from their browser using a real VS Code-like experience, powered by **React Monaco Editor**.

This project also demonstrates usage of **dynamic routing** and **nested routing** in Next.js for managing individual snippet pages and editing routes.

---

## ✨ Features

- 📝 Create and save custom code snippets with a title
- 💻 Edit code in-browser using Monaco Editor (the same editor as VS Code)
- 📄 View each code snippet in detail
- 🔧 Update/edit your existing code snippets
- ❌ Delete unwanted code snippets
- 🔀 Dynamic and nested routing with Next.js
- 📦 SQLite database with Prisma ORM integration

---

## 🧑‍💻 Tech Stack

| Tech          | Description                                  |
|---------------|----------------------------------------------|
| **Next.js**   | React Framework for SSR and Routing          |
| **TypeScript**| Type-safe development                        |
| **Prisma**    | ORM for database queries                     |
| **SQLite**    | Lightweight relational database              |
| **React Monaco Editor** | VS Code-like editor in browser     |
| **Tailwind CSS** *(optional)* | Utility-first styling        |

---

## 📁 Folder Structure Overview

codesnippet/
- ├── app/
- │ ├── snippet/
- │ │ ├── [id]/ # Dynamic route to view a snippet
- │ │ │ ├── page.tsx # Snippet detail page
- │ │ │ └── edit/ # Nested route to edit snippet
- │ │ │ └── page.tsx
- │ │ └── new/ # Create new snippet page
- │ │ └── page.tsx
- ├── components/
- │ └── ui/
- │ └── CreateEditorForm.tsx
- ├── lib/
- │ └── prisma.ts # Prisma Client
- ├── prisma/
- │ └── schema.prisma # SQLite DB schema
- ├── public/
- ├── styles/
- ├── .env
- ├── README.md
- ├── package.json
- └── tsconfig.json






## ⚙️ Setup Instructions

### 1. 📥 Clone the Repository
- git clone https://github.com/FazalSultan/code-snippets.git
- cd codesnippet
- npm install

### Install Dependency

## 🧪 Setup Prisma & SQLite
 - Create the .env file:
 - DATABASE_URL="file:./dev.db"
 - npx prisma migrate dev --name init
 - npx prisma generate


## Monaco Editor
 - npm install @monaco-editor/react

 ## Start the Dev Server
 - npm run dev
