# The NYT News

A modern web app to search and explore articles from The New York Times, built with React, TypeScript, Vite, Tailwind CSS, and React Query.

## Project Overview

**The NYT News** allows users to search, sort, and browse articles from The New York Times. It features fast search, beautiful UI, and responsive design.

## Features
- Search articles from The New York Times
- Sort by best, newest, oldest, or relevance
- Pagination for browsing results
- Responsive and mobile-friendly UI
- Loading skeletons and error handling
- Powered by React Query for fast data fetching and caching

## Tech Stack
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [@tanstack/react-query](https://tanstack.com/query/latest)
- [Axios](https://axios-http.com/)
- [React Router v7](https://reactrouter.com/)
- [Vitest](https://vitest.dev/) & [Testing Library](https://testing-library.com/)

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone <repo-url>
   cd the-nyt-news
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Set up environment variables:**
   - Copy `.env.example` to `.env` and fill in your NYT API key and base URL.

4. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   The app will be available at [http://localhost:5173](http://localhost:5173)

## Running Tests

This project uses [Vitest](https://vitest.dev/) and [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/) for functional testing.

To run all tests:
```bash
npm test
# or
npx vitest run
```

## Folder Structure

```
the-nyt-news/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images, SVGs, etc
│   ├── components/      # Reusable React components
│   ├── hooks/           # Custom React hooks
│   ├── layouts/         # Layout components
│   ├── lib/             # API wrappers
│   ├── pages/           # Page components (Home, Search)
│   ├── routes/          # App routing
│   ├── services/        # Data fetching logic
│   ├── types/           # TypeScript types
│   ├── utils/           # Utility functions
│   └── __test__/        # Functional tests & setup
├── package.json         # Project metadata & scripts
├── tailwind.config.ts   # Tailwind CSS config
├── vite.config.ts       # Vite config
└── ...
```

## License

MIT
