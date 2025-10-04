<img width="1919" height="931" alt="Screenshot 2025-10-04 at 2 56 45 PM" src="https://github.com/user-attachments/assets/a3534441-6780-40cb-846e-0f16fa332585" /># 🛍️ Simple E-Commerce Website

A lightweight **e-commerce web application** built with **ReactJS (frontend)** and **NodeJS (backend)**.
This project demonstrates a full-stack implementation of a minimal shopping experience: browsing products, adding them to the cart, and placing an order.

---

## 🚀 Features

### 🔹 Frontend

* **Products Listing Page**

  * Responsive product grid layout
  * Each product card displays:

    * 🖼️ Image
    * 📝 Name & Description
    * 💲 Price
    * ➕ "Add to Cart" button

* **Cart Page**

  * Accessible via a **Cart icon in the header**
  * Displays selected products with:

    * Name, Price, Quantity
    * Editable quantity
  * Total cart price calculation
  * Checkout form with required fields:

    * First Name
    * Last Name
    * Address
  * "Place Order" button

* **Order Placement**

  * Form validation before submission
  * Sends request to backend API
  * Displays success or error messages accordingly

---

### 🔹 Backend

* **Products API**

  * Endpoint: `GET /products`
  * Returns a list of available products (in-memory / JSON data).

* **Place Order API**

  * Endpoint: `POST /orders`
  * Validates required fields (`firstName`, `lastName`, `address`).
  * Simulates order placement (logs to console, persists in JSON file).
  * Returns order ID and success message.

---

## ⚒️ Tech Stack

* **Frontend**: ReactJS, React Router v6, TailwindCSS, Framer Motion, Axios, Lucide Icons
* **Backend**: Node.js, Express.js, Express-Validator
* **Other**: TypeScript (backend), Context API (cart state), JSON file storage (orders)

---

## 📂 Project Structure

```
root/
 ├── backend/
 │   ├── src/
 │   │   ├── routes/
 │   │   │   ├── productRoutes.ts
 │   │   │   └── orderRoutes.ts
 │   │   ├── controllers/
 │   │   │   ├── productController.ts
 │   │   │   └── orderController.ts
 │   │   ├── repositories/
 │   │   │   └── ProductRepository.ts
 │   │   ├── model/
 │   │   │   └── Order.ts
 │   │   └── server.ts
 │   ├── data/
 │   │   ├── products.json
 │   │   └── orders.json
 │   └── nodemon.json
 │
 ├── frontend/
 │   ├── src/
 │   │   ├── api/axiosClient.ts
 │   │   ├── components/
 │   │   │   ├── Navbar.tsx
 │   │   │   ├── ProductCard.tsx
 │   │   │   └── Loader.tsx
 │   │   ├── context/CartContext.tsx
 │   │   ├── pages/
 │   │   │   ├── ProductsPage.tsx
 │   │   │   ├── ProductDetailsPage.tsx
 │   │   │   └── CartPage.tsx
 │   │   ├── App.tsx
 │   │   └── main.tsx
 │   ├── tailwind.config.js
 │   └── index.css
 └── README.md
```

---

## ▶️ Getting Started

### 🔹 Prerequisites

* Node.js (>= 18)
* Yarn or npm

### 🔹 Backend Setup

```bash
cd backend
yarn install
yarn dev    # starts server on http://localhost:5000
```

### 🔹 Frontend Setup

```bash
cd frontend
yarn install
yarn dev    # starts frontend on http://localhost:5173
```

---

## 🌐 API Endpoints

### `GET /products`

Fetch all products.

**Response Example**:

```json
[
  {
    "id": "1",
    "name": "Wireless Mouse",
    "description": "Ergonomic wireless mouse",
    "price": 25.99,
    "image": "mouse.jpg"
  }
]
```

### `POST /orders`

Place an order.

**Request Example**:

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "address": "123 Main St",
  "cart": [
    { "productId": "1", "quantity": 2 }
  ]
}
```

**Response Example**:

```json
{
  "success": true,
  "message": "Order placed successfully",
  "data": { "orderId": "a1b2c3d4" }
}
```

---

## 🎨 UI & UX

* Responsive layout (mobile-first)
* Smooth animations via Framer Motion
* Minimal, clean design with TailwindCSS
* User-friendly error handling

---

## ✅ Marking Criteria Alignment

* **Working properly**: All core features implemented
* **Naming conventions**: Clear, consistent naming
* **Readability**: Clean, modular code with comments
* **Reusable components**: Navbar, ProductCard, Loader, Cart context
* **Advanced React concepts**: Context API, custom Axios client, routing, animations

---

## 📸 Demo Screenshots

* **Products Page** → Grid of products with Add to Cart
* <img width="1280" height="700" alt="Screenshot 2025-10-04 at 2 52 06 PM" src="https://github.com/user-attachments/assets/bce4358d-fd90-42c6-9e9b-6c029fd202ff" />
* <img width="1280" height="700" alt="Screenshot 2025-10-04 at 2 53 15 PM" src="https://github.com/user-attachments/assets/74ba91d8-6d87-4ff4-bd88-79289b0d91c1" />

* **Product details page** → More details about individual product
* <img width="1280" height="700" alt="Screenshot 2025-10-04 at 2 54 51 PM" src="https://github.com/user-attachments/assets/3c21f67e-996e-4c16-855a-52556910f1fa" />
* <img width="1280" height="700" alt="Screenshot 2025-10-04 at 2 53 55 PM" src="https://github.com/user-attachments/assets/ae401341-6892-451f-a303-87cb908bf968" />

* **Cart Page** → Items, total, checkout form
* <img width="1280" height="700" alt="Screenshot 2025-10-04 at 2 55 36 PM" src="https://github.com/user-attachments/assets/40bff3a5-bd74-4cb3-a635-b3fb9c018243" />
* <img width="1280" height="700" alt="Screenshot 2025-10-04 at 2 57 02 PM" src="https://github.com/user-attachments/assets/6842665c-393f-4edf-9652-df6676b9acc1" />

---

## 📌 Notes

* No authentication required (per requirements).
* Data is persisted in **JSON files** for simplicity.
* `node_modules` excluded from submission.

---

## 🏁 Conclusion

This project demonstrates a clean and modern implementation of a **React + Node.js e-commerce system** with proper structure, reusable components, error handling, and responsive UI.
