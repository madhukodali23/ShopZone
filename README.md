# 🛒 ShopZone - E-Commerce React App

ShopZone is a modern **Single Page Application (SPA)** built using React. It allows users to browse products, view details, add items to a cart, and simulate a checkout process — all without page reloads.

---

## 🚀 Features

### 🔹 Core Features

* Multi-page navigation using **React Router**
* Dynamic product pages (`/product/:id`)
* Fetching products from API
* Clean and responsive UI

### 🛍️ Cart Functionality

* Add products to cart
* Quantity handling
* Total price calculation
* Cart persists even after refresh (localStorage)

### 🔐 Authentication

* Simple "Login as Guest" feature
* Protected route for checkout
* Redirect to login if not authenticated

---

## 🧠 Concepts Used

* React Functional Components
* React Hooks (`useState`, `useEffect`, `useContext`)
* Context API (Global State Management)
* React Router v6
* Dynamic Routing
* Protected Routes
* localStorage (Persistence)

---

## 📦 Tech Stack

* React.js
* JavaScript (ES6)
* HTML5 & CSS3
* DummyJSON API

---

## 🌐 API Used

```
https://dummyjson.com/products
```

---

## 📁 Project Structure

```
src/
│
├── components/
│   └── Navbar.jsx
│
├── context/
│   ├── CartContext.jsx
│   └── AuthContext.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Shop.jsx
│   ├── Product.jsx
│   ├── Cart.jsx
│   ├── Login.jsx
│   ├── Contact.jsx
│   └── Checkout.jsx
│
├── routes/
│   └── ProtectedRoute.jsx
│
├── App.jsx
└── index.js
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```
git clone https://github.com/your-username/shop-zone.git
cd shop-zone
```

### 2. Install dependencies

```
npm install
```

### 3. Run the app

```
npm start
```

---

## 🚀 Deployment (Vercel Fix)

Create a file named `vercel.json` in root:

```
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

---

## 📸 Demo (Add your link here)

Live Link: https://your-app.vercel.app
Video Demo: (Add your video link)

---

## 🧩 Future Improvements

* Add remove from cart
* Add quantity buttons (+ / -)
* Improve UI (modern design)
* Add search & filter
* Integrate real authentication

---

## 🙌 Acknowledgements

* DummyJSON API for product data
* React Router documentation
* Learning through hands-on building

---

## 👨‍💻 Author

**Madhu Kanth Kodali**
B.Tech CSE | Full Stack Developer

---

## ⭐ If you like this project

Give it a ⭐ on GitHub and share with others!
