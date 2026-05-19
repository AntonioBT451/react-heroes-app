# Heroes App

A modern web application for managing and exploring superheroes and villains, built with React, TypeScript, and cutting-edge frontend technologies.

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router v7** - Client-side routing
- **TailwindCSS v4** - Utility-first CSS framework
- **shadcn/ui** - High-quality UI components
- **Axios** - HTTP client
- **Lucide React** - Icon library

## Features

- **Search heroes** - Find characters by name, powers, or teams
- **Interactive dashboard** - View statistics and metrics
- **Smart filtering** - Filter by category, universe, team, and status
- **Favorites system** - Save and manage favorite characters
- **Responsive design** - Works on desktop, tablet, and mobile
- **Code splitting** - Lazy loading for optimal performance
- **Modern UI** - Beautiful gradients, animations, and cards


## Installation

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
```bash
    git clone https://github.com/YOUR-USERNAME/05-heroes-app.git

    cd 05-heroes-app
```

2. **Install dependencies**
```
    npm install
```

3. **Set up environment variables**
```
    cp .env.template .env
```

Then edit .env with your API URL.

4. **Start the development server**

## Available Scripts

| Command  | Description |
|--|--|
| `npm run dev` | Start development server |
|`npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Routes

| Path | Page |	Description |
|--|--|--|
| HomePage | Main | dashboard with hero grid |
| /search | SearchPage | Search and filter heroes |
| /hero/:id | HeroPage | Hero details (coming soon) |
| /admin | AdminPage | Admin panel (lazy loaded) |

## Commit Convention

This project follows Conventional Commits:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `style:` - Code style changes
- `refactor:` - Code refactoring
- `perf:` - Performance improvements
- `test:` - Adding tests
- `chore:` - Maintenance tasks

## Contributing
1. Fork the project.
2. Create your feature branch (`git checkout -b feat/amazing-feature`).
3. Commit your changes (`git commit -m 'feat: add amazing feature'`).
4. Push to the branch (`git push origin feat/amazing-feature`).
5. Open a Pull Request.