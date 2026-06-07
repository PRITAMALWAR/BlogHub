# MERN Blog Application

A full-stack Blog Application built using:

* React.js (Frontend)
* Node.js
* Express.js
* MongoDB
* JWT Authentication
* Google OAuth Authentication
* Tailwind CSS

---

# Features

## Authentication

* User Registration
* User Login
* JWT Authentication
* Protected Routes
* Google OAuth Login
* User Profile Page
* Logout Functionality

---

## Blog Features

* Create Blog
* View All Blogs
* View Single Blog
* Edit Blog
* Delete Blog
* My Blogs Page
* Blog Author Information
* Blog Image Support

---

## Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* Tailwind CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* Passport.js
* Google OAuth 2.0
* bcryptjs

---

# Project Structure

```bash
project/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│   │
│   └── package.json
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# Installation

## Clone Repository

```bash
git clone <repository-url>

cd project
```

---

# Backend Setup

```bash
cd backend

npm install
```

Create `.env`

```env
PORT=8909

MONGO_URI=mongodb://127.0.0.1:27017/google_oauth

JWT_SECRET=myVeryStrongJWTSecret123

GOOGLE_CLIENT_ID=YOUR_GOOGLE_CLIENT_ID

GOOGLE_CLIENT_SECRET=YOUR_GOOGLE_CLIENT_SECRET

GOOGLE_CALLBACK_URL=http://localhost:8909/auth/google/callback

SESSION_SECRET=mySuperSecretKey123
```

Run Backend

```bash
npm run dev
```

Server:

```bash
http://localhost:8909
```

---

# Frontend Setup

```bash
cd frontend

npm install
```

Run Frontend

```bash
npm run dev
```

Frontend:

```bash
http://localhost:5173
```

---

# API Endpoints

## Authentication

### Register

```http
POST /auth/register
```

### Login

```http
POST /auth/login
```

### Google Login

```http
GET /auth/google
```

### User Profile

```http
GET /auth/profile
```

---

# Blog Endpoints

## Create Blog

```http
POST /blogs/create
```

Protected Route

---

## Get All Blogs

```http
GET /blogs
```

---

## Get Single Blog

```http
GET /blogs/:id
```

---

## Get My Blogs

```http
GET /blogs/my-blogs
```

Protected Route

---

## Update Blog

```http
PUT /blogs/:id
```

Protected Route

---

## Delete Blog

```http
DELETE /blogs/:id
```

Protected Route

---

# Authentication Flow

### Email Authentication

```text
Register
   ↓
Login
   ↓
JWT Token
   ↓
Protected Routes
```

### Google Authentication

```text
Google Login
   ↓
Google OAuth
   ↓
JWT Token
   ↓
Redirect Home Page
```

---

# Screens

* Home Page
* About Page
* Login Page
* Signup Page
* Profile Page
* Blogs Page
* Blog Details Page
* Create Blog Page
* My Blogs Page
* Edit Blog Page




