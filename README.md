# 🚀 **TrackNow**

**TrackNow** is a modern **MERN Stack Job Application Tracker** that helps users seamlessly manage their job hunt.  
It provides a secure and intuitive platform to **add, edit, delete, and monitor** job applications across different statuses — all within a **beautiful, responsive UI**.

---

## ✨ **Key Features**

### 🔒 Authentication  
- Secure **user registration and login**  
- JWT-based **session management**  
- Context-driven **frontend authentication handling**

### 📋 Job Dashboard  
- Create, update, and delete job applications  
- Filter by **status** (Applied, Interview, Offer, Rejected)  
- View **dynamic application statistics**  
- Add **resume links** and **custom notes**

### 💡 UI & UX Highlights  
- Fully **responsive** for desktop and mobile  
- **Toast notifications** for success, errors, and updates  
- **Smooth modals** for confirmations  
- Minimal and **intuitive layout design**

### 🧩 Reusable Components  
- Validated job form components  
- Status summary and insights  
- Personalized empty state view when not logged in  

---

## 🧠 **Tech Stack**

### 🌐 Frontend  
- ⚛️ **React + Vite**  
- 🎨 **Tailwind CSS**  
- 🔄 **Axios**  
- 🧭 **React Router DOM**  
- 🔔 **React Hot Toast**

### ⚙️ Backend  
- 🟢 **Node.js**  
- 🚀 **Express.js**  
- 🍃 **MongoDB + Mongoose**  
- 🔑 **JWT Authentication**  
- 🔐 **Bcrypt Password Hashing**  
- 🌍 **CORS + Dotenv**

---

## 🧩 **Project Setup**

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/BVMadhava76/TrackNow.git
cd tracknow
```

---

### 2️⃣ Backend Setup (`/server`)
```bash
cd server
npm install
```

Create a `.env` file inside **server/**
```bash
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

Run the backend server:
```bash
npm run dev
```

---

### 3️⃣ Frontend Setup (`/client`)
```bash
cd ../client
npm install
```

Create a `.env` file inside **client/**
```bash
VITE_API_URL=http://localhost:5000/api
```

Run the frontend:
```bash
npm run dev
```

The application will be live at 👉 **http://localhost:5173**

---

## 🧾 **License**
📜 This project is licensed under the **MIT License**.  
Feel free to use, modify, and share it responsibly.

---

## 👨‍💻 **Developed by [BVMadhava](https://github.com/BVMadhava76)**  
Crafted with ❤️ using the MERN Stack.
