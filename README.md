# 🧩 Task Management System

A full-stack **Task Management Application** built using the **MERN Stack (MySQL for database)**.  
This project allows users to create, edit, delete, and manage their tasks efficiently with authentication support.

---

## 👤 Developer Information

**Name:** Soumya Ranjan Badatia  
**Email:** soumyaranjanbadatia@gmail.com  
**Contact No:** +91-9692078318

---

## 🚀 Features

- User Authentication (Signup, Login, Logout)
- Role-based Access (Admin, User)
- Create, Edit, and Delete Tasks
- Track task progress and completion rate
- View all, pending, or completed tasks
- Dashboard with productivity statistics
- Responsive UI built with **React** and **Bootstrap**

---

## ⚙️ Tech Stack

### Frontend

- React.js
- Axios
- React Router DOM
- Bootstrap 5

### Backend

- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Bcrypt.js for password hashing

---

## 🗂️ Folder Structure

project-root/
│
├── backend/
│ ├── server.js
│ ├── config/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ └── .env
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── App.js
│ │ └── index.js
│ └── package.json
│
└── README.md

---

## 🧠 How to Run the Project

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/task-manager.git
cd task-manager


Setup Backend
bash
Copy code
cd backend
npm install
Create a .env file:

ini
Copy code
PORT=4000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=taskflow_db
JWT_SECRET=your_jwt_secret


Run backend:

bash
Copy code
npm start

3️⃣ Setup Frontend
bash
Copy code
cd ../frontend
npm install
npm start
The app will run at:

Frontend: http://localhost:3000

Backend: http://localhost:4000

🔗 API Endpoints Summary
Method	Endpoint	Description
POST	/api/auth/signup	Register new user
POST	/api/auth/login	Login and get JWT token
GET	/api/tasks	Get all tasks of user
POST	/api/tasks	Create new task
PUT	/api/tasks/:id	Update task
DELETE	/api/tasks/:id	Delete task
PUT	/api/tasks/:id/gp	Mark task complete/incomplete

```
