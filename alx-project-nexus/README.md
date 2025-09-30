# 🛍️ E-Commerce Product Catalog

<details>
  <summary>Table of Contents</summary>
1. [Overview](#overview)  
2. [Tech Stack](#tech-stack)
3. [Installation & Setup](#installation--setup)  
4. [Project Structure](#project-structure)  
5. [Key Features](#key-features)
6. [Deployment / Live Demo](#deployment--live-demo)  
7. [Backend API Reference](#backend-api-reference)  
8. [Contributing](#contributing)  
9. [License](#license)  
10. [Acknowledgments](#acknowledgments)  
11. [Contact / Author](#author)
</details>

## Overview

This project is a **real-world case study** that demonstrates how to build a scalable and user-friendly product catalog for an e-commerce platform.

It provides hands-on experience with:

- Building maintainable frontends using **Nextjs + TypeScript + Tailwind**
- Integrating data from APIs with proper loading and error handling
- Implementing **filtering, sorting, pagination, and infinite scrolling**
- Designing for **responsiveness and accessibility** across devices

## 🛠️ Tech Stack

- **Frontend:** Next.js, React, TypeScript, Tailwind CSS
- **State Management:** React Context API, Custom Hooks
- **API Handling:** Axios, Next.js API Routes (Proxied)
- **Backend:** External API (Redoc / GraphQL)
- **Deployment:** Vercel
- **Additional Features:** PWA support, Performance Monitoring

## 📦 Installation & Setup

Follow the steps below to run **Project Nexus** locally.

### 🔧 Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) **v18.x or higher**
- npm (comes with Node.js) or [Yarn](https://yarnpkg.com/)
- Git

### 🚀 Clone the Repository

```bash
# Clone the repository
git clone https://github.com/Colly5090/ProjectNexus.git

# Navigate to the project folder
cd ProjectNexus/alx-project-nexus

# Install Dependencies

# Using npm
npm install

# OR using yarn
yarn install

#Environment Variables
#Create a .env.local file in the root directory and add your API base URL

NEXT_PUBLIC_API_BASE=https://project-nexus-backend-q5ai.onrender.com/api/v1

# Run the Development Server

# Start the dev server
npm run dev

# OR
yarn dev

# OR Build for Production
npm run build
npm run start
```

Your app will be running at: `http://localhost:3000`

## 📂 Project Structure

```bash
alx-project-nexus/
├── components/        # Reusable React components (UI, layout, cards, etc.)
├── pages/             # Next.js pages & API routes
│   ├── api/           # Backend API handlers (Next.js API routes)
│   └── index.tsx      # Home page
├── public/            # Static assets (icons, images, manifest.json for PWA)
├── constants/         # Global constants (e.g., API base URL)
├── hooks/             # Custom React hooks (e.g., product & category fetching)
├── lib/               # API helpers (static/dynamic fetches)
├── interfaces/        # TypeScript interfaces & types
├── styles/            # Global styles & Tailwind configuration
├── .env.local         # Environment variables (ignored by Git)
├── next.config.js     # Next.js configuration (PWA, monitoring setup)
├── package.json
└── README.md
```

## ⚡ Key Features

Project Nexus provides a **modern, scalable product catalog** experience with the following features:

- **API-Driven Catalog**  
  Fetch and display products and categories dynamically from a backend API.

- **Filtering & Sorting**  
  Browse products by category, and refine results with sorting options (e.g., price, relevance).

- **Pagination & Infinite Scrolling**  
  Switch between traditional pagination and seamless infinite scrolling for better usability.

- **Responsive Design**  
  Built with a **mobile-first approach** and fully responsive across desktop, tablet, and mobile devices.

- **Global Loading & Error Handling**  
  Unified error boundaries and loading states for a smooth user experience.

- **Scalable Architecture**  
  Hooks, context, and reusable components ensure maintainability and scalability.

- **Enhancements**  
  Supports **PWA features**, performance monitoring, and advanced analytics.

## 🚀 Deployment & Live Demo

Project Nexus is deployed on **Vercel** for easy access and testing.

🔗 **Live App:** [NexusShop.com](https://project-nexus-xi.vercel.app/)

📹 **Demo Video:** [Watch Recorded Walkthrough](https://www.loom.com/share/af03ba39aef44aafbd62348a8e51bbdd?sid=3b0c0e3a-a905-4469-8ddc-fc11eccadd8f)

### What You Can Explore

- Browse the **product catalog** with filters and sorting.
- View **featured categories and children** dynamically.
- Experience **infinite scrolling** and seamless pagination.
- Test **search with debounce** for optimized results.
- See the **responsive design** across desktop, tablet, and mobile.

## 📖 Documentation

### API References

- **REST API Documentation (Redoc):** [View here](https://project-nexus-backend-q5ai.onrender.com/schema/redoc/)
- **GraphQL Playground:** [Access here](https://project-nexus-backend-q5ai.onrender.com/graphql/)

All product and category data were **proxied through Next.js API routes** (`pages/api/`) using these documented endpoints.

### API Flow

This project integrates with an **external backend API (Redoc/GraphQL)**.  
Instead of calling the backend directly from the frontend, the API is **proxied through Next.js API routes** (`pages/api/`).

### Data Handling in Frontend

- **Products API**

  - `pages/api/products/index.tsx` → proxies external API for product list
  - `pages/api/products/[id].tsx` → proxies external API for product details

- **Categories API**
  - `pages/api/categories/index.tsx` → proxies external API for category list
  - `pages/api/categories/[id].tsx` → proxies external API for category details

### Hooks & Context

- **`useProduct`** → fetches product data, provides `products`, `loading`, `error`.
- **`useCategory`** → fetches category data, including children, shared via Context.
- **Context API** → avoids prop drilling and keeps global state consistent.
- **Featured Categories** are pre-fetched using **`getStaticProps`** with a helper in `lib/` in the homepage.
- All API responses are **typed with TypeScript interfaces**.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

### 🔄 Git Workflow

#### 1. **Fork** the repository

#### 2. **Clone** your fork locally

```bash
   git clone https://github.com/Colly5090/ProjectNexus.git

   cd ProjectNexus/alx-project-nexus

#### 3. Create a new branch for your feature/fix:
    git checkout -b feature/your-feature-name

#### 4. Commit your changes with a clear message:
    git commit -m "feat: add new feature xyz"

#### 5. Push to your branch:
    git push origin feature/your-feature-name
```

#### 6. Open a Pull Request to the main branch

### 📌 Code Style Guidelines

- Written in TypeScript with Next.js

- Follow ESLint + Prettier rules (configured in the project)

- Use meaningful commit messages (feat:, fix:, docs:, etc.)

- Ensure components are responsive and accessible

### Reporting Issues

- Use the GitHub Issues tab to report bugs or suggest features

- Provide clear steps to reproduce issues

- Screenshots or logs are highly encouraged

## 👥 Collaborators

- **Frontend:** [@Colly5090](https://github.com/Colly5090)
- **Backend API:** [@your-backend-dev-username](https://github.com/thecollekta)

The backend service powering this project is available at:  
👉 [Backend Repository](https://github.com/thecollekta/project-nexus)

## 📜 License

This project is licensed under the **MIT License** – you are free to use, modify, and distribute this project in personal or commercial projects, provided that the original copyright notice and this permission notice are included in all copies or substantial portions of the software.

See the [LICENSE](./LICENSE) file for full details.

## 🙌 Acknowledgments

Special thanks to the **ALX Software Engineering Program**, the backend developer for the API, and the open-source community for tools like **Next.js**, **Tailwind CSS**, and **Axios** that made this project possible.

👉 For the full list of credits and detailed acknowledgments, see [CREDITS.md](./CREDITS.md).

## 👨‍💻 Author

**Collins Boakye (Colly5090)**

- GitHub: [@Colly5090](https://github.com/Colly5090)
- LinkedIn: [Your LinkedIn Profile](https://www.linkedin.com/in/collins-boakye)
- Portfolio: [Collins-Boakye Personal Portfolio](https://personal-portfolio-three-beta-12.vercel.app/)
- Email: Colly0087@gmail.com
