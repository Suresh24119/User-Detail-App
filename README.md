# User Detail App

A full-stack user management application with React Native (Expo) frontend and Node.js backend.

## Features

- 📱 **Native Mobile App** - Built with Expo and React Native
- 🌐 **Web Support** - Runs on web browsers via Expo
- 🔧 **REST API Backend** - Node.js/Express server
- 💾 **JSON Database** - Simple file-based storage
- ✨ **CRUD Operations** - Create, Read, Update, Delete users
- 🔖 **Bookmarks** - Save favorite users with localStorage
- 📝 **Form Validation** - React Hook Form with Zod schema validation

## Tech Stack

### Frontend (UserDetailAppNative)
- React Native
- Expo Router
- TanStack Query (React Query)
- React Hook Form + Zod
- Axios
- AsyncStorage

### Backend (UserDetailBackend)
- Node.js
- Express
- CORS enabled
- JSON file database

## Getting Started

### Prerequisites
- Node.js installed
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Suresh24119/User-Detail-App.git
cd User-Detail-App
```

2. Install backend dependencies:
```bash
cd UserDetailBackend
npm install
```

3. Install frontend dependencies:
```bash
cd ../UserDetailAppNative
npm install
```

### Running the Application

#### Start Backend Server
```bash
cd UserDetailBackend
node server.js
```
Server will run on `http://localhost:3000`

#### Start Native App
```bash
cd UserDetailAppNative
npm start
# or
npx expo start
```

## API Endpoints

- `GET /users` - Get all users
- `GET /users/:id` - Get user by ID
- `POST /users` - Create new user
- `PUT /users/:id` - Update user
- `DELETE /users/:id` - Delete user

## Project Structure

```
User-Detail-App/
├── UserDetailBackend/          # Backend server
│   ├── server.js              # Main server file
│   ├── db.json                # JSON database
│   └── package.json
│
├── UserDetailAppNative/        # React Native app
│   ├── app/                   # Expo Router pages
│   ├── components/            # Reusable components
│   ├── services/              # API services
│   ├── types/                 # TypeScript types
│   ├── utils/                 # Utility functions
│   └── package.json
│
└── README.md
```

## License

MIT
