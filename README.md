# Task Management Web Application

A full-stack Task Management web application built using the MERN stack.
Users can create, view, update, delete, and filter tasks with a modern and responsive UI.

---

## 🚀 Features

- Create new tasks with title and description
- Update task status (Pending / In Progress / Completed)
- Delete tasks
- Filter tasks by status
- Animated toast notifications
- Loading spinner while adding tasks
- Parallax background with modern UI
- Fully responsive design

---

## 🛠 Tech Stack

Frontend:

- React (Vite)
- Tailwind CSS
- Axios
- React Icons
- React Hot Toast

Backend:

- Node.js
- Express.js
- MongoDB
- Mongoose
- ES Modules

---

## 📁 Project Structure

```

Task-Management/
│
├── backend/
│ ├── task.js
│ ├── model.js
│ ├── route.js
│ ├── server.js
│ └── package.json
│
├── frontend/
│ ├── src/
│ ├── index.html
│ ├── vite.config.js
│ └── package.json
│
├── .gitignore
└── README.md
```

---

## ⚙️ Setup Instructions

Clone the repository:

git clone https://github.com/smttomar/Task-Management-Web-Application  
cd task-management

---

Backend setup:

cd backend
npm install

Create a .env file inside backend folder with the following:

MONGO_URI=your_mongodb_connection_string
PORT=5000

Start the backend server:

npm start

Backend runs on:
http://localhost:5000

---

Frontend setup:

cd frontend
npm install

Create a .env file inside frontend folder with the following:

VITE_API_URL=http://localhost:5000/api/tasks

Start the frontend:

npm run dev

Frontend runs on:
http://localhost:5173

---

## 🔌 API Endpoints

POST /api/tasks → Create a task  
GET /api/tasks → Get all tasks  
PUT /api/tasks/:id → Update a task  
DELETE /api/tasks/:id → Delete a task

---

## 🌍 Deployment

- Frontend deployed on Vercel
- Backend deployed on Render
- MongoDB hosted on MongoDB Atlas

---

## 📸 Screenshots

1. Add Task
   ![Add Task Form](20260131-1550-08.9189130.gif)
2. Filters
   ![Filters](20260131-1538-36.0264451.gif)
3. Update Status
   ![Update Status](20260131-1541-46.7283911.gif)
4. Delete Task
   ![Delete Task](20260131-1546-33.5660193.gif)

---

## 🧠 Key Learnings

- REST API design
- Full-stack integration
- State management in React
- UI/UX enhancement with Tailwind and animations
- Environment-based configuration
- Monorepo project structure

---

## 👨‍💻 Author

Chandra Pratap Singh  
Full Stack Developer
