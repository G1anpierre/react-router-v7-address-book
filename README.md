# React Router v7 Address Book

![React Router Address Book](https://github.com/G1anpierre/react-router-v7-address-book/raw/main/public/address-book-preview.png)

A modern contact management application built with React and the latest React Router v7, demonstrating advanced routing techniques and data handling patterns.

## Features

- **Contact Management**: Add, edit, delete, and favorite contacts
- **Responsive Design**: Works on mobile, tablet, and desktop
- **Search & Filtering**: Find contacts quickly with advanced search
- **Contact Details**: Comprehensive view of contact information
- **Navigation**: Fluid navigation with the latest React Router v7 features
- **Data Persistence**: Local storage for data preservation between sessions

## Tech Stack

- **Framework**: React 18
- **Routing**: React Router v7
- **Styling**: CSS Modules with modern variable-based theming
- **State Management**: React Context API and reducers
- **Form Handling**: React Hook Form
- **Data Persistence**: Browser storage API with a custom abstraction

## React Router v7 Features Showcase

This project demonstrates several key React Router v7 features:

- **Data Loaders**: Declarative data fetching before rendering
- **Data Actions**: Form submissions and mutations with action functions
- **Deferred Data**: Streaming rendering with deferred data loading
- **Nested Routes**: Organized UI with nested route definitions
- **Layout Routes**: Shared UI elements across multiple routes
- **Route Error Handling**: Graceful error states with errorElement
- **Relative Links**: Simplified navigation with relative routing

## Getting Started

From your terminal:

```sh
# Clone the repository
git clone https://github.com/G1anpierre/react-router-v7-address-book.git
cd react-router-v7-address-book

# Install dependencies
npm install

# Start development server
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Project Structure

- `/src/components`: Reusable UI components
- `/src/routes`: Route components and data handlers
- `/src/data`: Data management and API interactions
- `/src/hooks`: Custom React hooks
- `/src/utils`: Utility functions
- `/src/styles`: Global styles and themes

## Key Components

- **Root**: Main layout and global data loading
- **Index**: Contact listing with search functionality
- **Contact**: Contact details with editing capabilities
- **Edit**: Contact editing form with validation
- **Destroy**: Contact deletion with confirmation
- **New**: New contact creation form

## Data Management

The application uses a simulated backend with the following architecture:

- **Contact Model**: Structured data for contact information
- **LocalStorage Persistence**: Maintains data between sessions
- **Async Pattern**: Simulates real API calls for realistic data flow

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

### Deployment Options

- **Vercel/Netlify**: Deploy with zero configuration
- **Static Hosting**: Deploy the `build/client` directory
- **Node.js Server**: Use the built-in server from `build/server`

## Resources

- [React Router Docs](https://reactrouter.com/en/main)
- [React Router v7 Release Notes](https://github.com/remix-run/react-router/releases)
- [React Docs](https://react.dev/)

## License

This project is licensed under the MIT License.