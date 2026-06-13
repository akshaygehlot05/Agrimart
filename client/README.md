🌱 AgriMart - Smart Agriculture Marketplace

📖 Project Overview

AgriMart is a full-stack agriculture marketplace platform that connects farmers, retail customers, and wholesale buyers through a modern digital ecosystem.

The platform supports both:

* 🌱 Retail Marketplace (B2C)
* 🏢 Wholesale Marketplace (B2B)

Users can browse agricultural products, add items to cart, contact the business, and explore agricultural categories.

Administrators can manage products through a secure admin dashboard.

⸻

🚀 Features

🌱 Retail Mode (B2C)

* Browse agricultural products
* Product categories
* Shopping cart
* Checkout page
* Contact section
* About section
* Responsive UI

⸻

🏢 Wholesale Mode (B2B)

* Bulk purchasing interface
* Wholesale product display
* Business-oriented marketplace
* Category-based navigation
* Bulk order support

⸻

👨‍💼 Admin Dashboard

Admin can:

* Add products
* Delete products
* Manage inventory
* View stock levels
* Filter products
* Search products
* Manage categories

⸻

🔐 Admin Authentication

Admin Route

/admin

Admin Password

agrimart123

⸻

🛒 Cart Features

* Add products to cart
* Remove products from cart
* Cart item count
* Total amount calculation
* Checkout page

⸻

📁 Project Structure

AgriMart
│
├── public
│   ├── products
│   └── favicon.png
│
├── src
│
│   ├── assets
│   │   ├── agrimart-logo.jpeg
│   │   ├── agrimart-mode.jpeg
│   │   └── images
│   │
│   ├── components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Categories.jsx
│   │   ├── ProductList.jsx
│   │   ├── ModeBanner.jsx
│   │   └── ModeSelection.jsx
│   │
│   ├── context
│   │   └── CartContext.jsx
│   │
│   ├── pages
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Admin.jsx
│   │   └── AdminLogin.jsx
│   │
│   ├── services
│   │   └── api.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── server
│
│   ├── models
│   │   └── Product.js
│   │
│   ├── routes
│   │   └── productRoutes.js
│   │
│   ├── config
│   │   └── db.js
│   │
│   ├── server.js
│   └── package.json
│
├── package.json
├── README.md
└── .env

⸻

⚙️ Technologies Used

Frontend

* React.js
* React Router DOM
* Tailwind CSS
* React Icons
* Context API

Backend

* Node.js
* Express.js

Database

* MongoDB

⸻

🌐 API Endpoints

Get All Products

GET /api/products

⸻

Add Product

POST /api/products

⸻

Delete Product

DELETE /api/products/:id

⸻

🧑‍💻 Installation Guide

Clone Repository

git clone https://github.com/yourusername/agrimart.git

⸻

Install Frontend Dependencies

npm install

⸻

Install Backend Dependencies

cd server
npm install

⸻

Run Frontend

npm run dev

Frontend runs on:

http://localhost:5173

⸻

Run Backend

npm start

Backend runs on:

http://localhost:8000

⸻

📞 Contact Information

Address

Jodhpur, Rajasthan, India

Email

support@agrimart.com

Phone

+91 9876543210

Website

www.agrimart.com

⸻

🔮 Future Enhancements

* Online Payments
* Order Tracking
* Farmer Dashboard
* User Authentication
* Product Reviews
* Wishlist
* AI Product Recommendation
* Sales Analytics
* Inventory Reports
* Order Management System

⸻

📸 Screens Included

* Home Page
* Product Listing
* Retail Marketplace
* Wholesale Marketplace
* Cart Page
* Checkout Page
* Contact Page
* About Page
* Admin Dashboard

⸻

👨‍🎓 Developer

Akshay Gehlot

Bachelor of Computer Applications (BCA)

Project

AgriMart - Smart Agriculture Marketplace

Academic Purpose

Developed as a Full Stack MERN Project for learning modern web development and agricultural marketplace management.

⸻

📄 License

This project is created for educational and academic purposes.
All rights reserved © 2026 AgriMart.

## Environment Variables

PORT=8000
MONGO_URI=mongodb+srv://akshayrajgehlot_db_user:trY8aQHtTnVcmSnG@agrimart.y0zhxkg.mongodb.net/?appName=Agrimart

## GitHub Repository

Repository URL:
https://github.com/akshaygehlot05/Agrimart