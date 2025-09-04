# Portfolio App - Next.js 14 with Supabase

A modern, full-stack portfolio application built with Next.js 14, TypeScript, Supabase, React Query, and Sass. This app showcases categories, projects, and book characters with a clean, responsive design.

## Features

- ✅ **Next.js 14** with App Router
- ✅ **TypeScript** for type safety
- ✅ **Supabase** for backend and database
- ✅ **React Query** for server state management
- ✅ **Sass** for styling with modules
- ✅ **Clean Architecture** with organized folder structure
- ✅ **Production Ready** with best practices

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Backend**: Supabase (PostgreSQL, Auth, Real-time)
- **State Management**: TanStack Query (React Query)
- **Styling**: Sass with CSS Modules
- **Deployment**: Vercel (recommended)

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with React Query provider
│   ├── page.tsx           # Home page with navigation
│   ├── categories/        # Categories pages
│   │   └── page.tsx       # Categories listing page
│   ├── projects/          # Projects pages
│   │   └── page.tsx       # Projects listing page
│   └── book-characters/   # Book characters pages
│       └── page.tsx       # Book characters listing page
├── components/            # React components
│   ├── commons/           # Reusable UI components
│   │   ├── Button/        # Generic button component
│   │   ├── Input/         # Generic input component
│   │   └── Loader/        # Loading spinner component
│   ├── layouts/           # Layout components
│   │   └── MainLayout/    # Main application layout with navigation
│   └── modules/           # Feature-specific components
├── hooks/                 # React Query hooks
│   ├── useCategories.ts   # Categories data hooks
│   ├── useProjects.ts     # Projects data hooks
│   └── useBookCharacters.ts # Book characters data hooks
├── services/              # API service functions
│   ├── categories.ts      # Categories CRUD operations
│   ├── projects.ts        # Projects CRUD operations
│   └── bookCharacters.ts  # Book characters CRUD operations
├── types/                 # TypeScript interfaces
│   └── supabaseTypes.ts   # Database table interfaces
├── lib/                   # Utility libraries
│   ├── supabaseClient.ts  # Supabase client configuration
│   └── queryClient.ts     # React Query client setup
├── styles/                # Global styles
│   ├── globals.scss       # Global styles and imports
│   ├── variables.scss     # Sass variables and design tokens
│   └── mixins.scss        # Reusable Sass mixins
└── public/                # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd todo-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:

   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://haxypjwntxcxwonswmsm.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhheHlwandudHhjeHdvbnN3bXNtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMyNzE1ODksImV4cCI6MjA2ODg0NzU4OX0.EI5ez7onKxDDvllBehLRvNUT7BCrEdLIL7ieR0mfrRc
   ```

4. **Set up Supabase Database**

   Create the following tables in your Supabase database:

   ```sql
   -- Categories table
   CREATE TABLE categories (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     name TEXT NOT NULL,
     path TEXT NOT NULL,
     imageURL TEXT
   );

   -- Projects table
   CREATE TABLE projects (
     id BIGSERIAL PRIMARY KEY,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
     update_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
     name TEXT NOT NULL,
     description TEXT,
     tech_stack JSONB,
     link TEXT,
     image TEXT
   );

   -- Book Characters table
   CREATE TABLE book_characters (
     id BIGSERIAL PRIMARY KEY,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
     update_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
     name TEXT NOT NULL,
     description TEXT,
     image TEXT,
     book_id UUID NOT NULL
   );
   ```

5. **Run the development server**

   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Key Features

### Data Management

- ✅ **Categories**: Browse and manage categories with images
- ✅ **Projects**: View projects with tech stack and links
- ✅ **Book Characters**: Explore characters from various books
- ✅ Real-time updates with React Query
- ✅ Responsive design for all screen sizes

### UI Components

- **Button**: Reusable button with multiple variants and sizes
- **Input**: Form input with validation and error handling
- **Loader**: Loading spinner with customizable size and color
- **Layout**: Responsive layout with header, main content, and footer

### Styling

- **Sass Variables**: Centralized design tokens
- **Sass Mixins**: Reusable style patterns
- **CSS Modules**: Scoped styling for components
- **Responsive Design**: Mobile-first approach

## Architecture

### Component Structure

- **Commons**: Generic, reusable UI components
- **Layouts**: Page layout components
- **Modules**: Feature-specific components

### State Management

- **React Query**: Server state management
- **Local State**: Component-level state with useState
- **Supabase**: Real-time database and backend

### Type Safety

- **TypeScript Interfaces**: Strongly typed props and API responses
- **Generic Components**: Reusable components with type parameters

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms

The app can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, please open an issue in the GitHub repository or contact the development team.
