# E-Commerce App

A full-stack modern e-commerce application built with the MERN stack (MongoDB, Express, React, Node.js). This project features a dynamic product catalog, shopping cart, search & category filters, and is fully deployed using Netlify (frontend) and Render (backend).

---

## 🌐 Live Demo
- Frontend: [https://titoecommerce.netlify.app](https://titoecommerce.netlify.app)
- Backend: [https://ecommerce-app-backend-lqpb.onrender.com](https://ecommerce-app-backend-lqpb.onrender.com)

---

## 📁 Project Structure

### Frontend
- `Vite + React`
- Dynamic routing with `react-router-dom`
- Context API for Cart state management
- Framer Motion for page transitions
- Toast notifications on actions
- Responsive layout & product filtering

### Backend
- `Node.js + Express`
- MongoDB Atlas with Mongoose ODM
- RESTful API
- Products seed route for quick testing

---

## 🚀 Features

### ✅ Phase 1 (Completed)
- Product List & Details Pages
- Category Filters + Search Bar
- Add to Cart, Quantity Controls
- Checkout Form + Success Page
- Toast Notification Feedback
- Deployed to Netlify + Render

### 🔒 Phase 2 (Coming Soon)
- Admin Dashboard
- Add/Edit/Delete Products
- Auth System for Admins
- Protected Routes

---

## 🧩 Tech Stack
- **Frontend**: React, Vite, TailwindCSS, Framer Motion, React Router
- **Backend**: Express, MongoDB, Mongoose, CORS, dotenv
- **Deployment**: Netlify (frontend) & Render (backend)

---

## ⚙️ Backend Setup (Local Dev)
1. `cd backend`
2. Create `.env` file:
```
MONGO_URI=your_mongodb_uri
PORT=5001
```
3. `npm install`
4. `npm run dev`

### Seeding Sample Products
Use `/api/products/seed` (GET) to populate sample product data.

---

## ⚙️ Frontend Setup (Local Dev)
1. `cd frontend`
2. Create `.env` file:
```
VITE_API_URL=http://localhost:5001/api
```
3. `npm install`
4. `npm run dev`

> Update `VITE_API_URL` to your Render backend URL in production

---

## 🙌 Author
**Tito** - [@itzxtito](https://github.com/itzxtito)

---

## 📌 License
This project is for educational/portfolio purposes. Modify freely and credit if used.

---

## 💡 Future Improvements
- Stripe or PayPal Checkout
- Admin Dashboard
- Inventory Management
- Reviews + Ratings
- User Login & Order History

---

Thanks for checking it out! ✨

