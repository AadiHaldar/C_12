# 🍔 Canteen Management System with AI-Powered Recommendations

## 📌 Project Overview
This **Canteen Management System** is designed for **college students and canteen staff**. It provides a **seamless food ordering experience**, integrates **AI-powered meal recommendations**, and allows canteen admins to **dynamically manage the menu**.

🚀 **Key Features:**
- **AI Meal Recommendations** 📊 (Powered by Groq AI)
- **Dynamic Menu Management** (Add/Delete Menu Items)
- **Budget-Based Food Suggestions** 💰
- **Order Placement & Tracking** 📦
- **DSA Implementation:** ✅ Fenwick Tree for budget tracking, Stack for undo, Queue for order processing

---

## 🛠️ Tech Stack
- **Frontend:** Streamlit (User Interface)
- **Backend:** Flask (API and Data Handling)
- **AI Integration:** Groq API (AI-based meal suggestions)
- **DSA Concepts:** Fenwick Tree, Stack, Queue

---

## 🔧 Setup Instructions

### 1️⃣ Install Dependencies
```bash
pip install flask streamlit requests pandas groq
```

### 2️⃣ Run the Backend (Flask API)
```bash
python canteen_backend.py
```

### 3️⃣ Run the Frontend (Streamlit App)
```bash
streamlit run user_frontend.py
```

### 4️⃣ Open the Application
Visit `http://localhost:8501` in your browser to access the **User Interface**.

---

## 🚀 Features & Functionality

### 🔹 **User Side (Students & Customers)**
- 📋 **View Live Menu** (Fetched from backend)
- 🧠 **AI-Powered Meal Recommendations** (Based on budget & diet preferences)
- 🛒 **Add Items to Cart & Place Orders**
- 🔙 **Undo Last Item (Stack Implementation)**

### 🔸 **Admin Side (Canteen Staff)**
- ➕ **Add New Menu Items**
- ❌ **Delete Items from Menu**
- 📦 **View All Orders**

---

## 🏗️ Future Enhancements
- 🔐 **Role-Based Access** (Admin vs. User authentication)
- 🗄️ **Database Integration** (Store orders & menu permanently)
- 📊 **Order History & Analytics** (Track spending patterns)
- 🤖 **Voice Assistant for Orders** (Voice-based meal selection)

---

## 🤝 Contributing
Feel free to **fork this repo** and submit pull requests! Contributions are welcome! 😊

---

## 📜 License
This project is **open-source** and free to use.

---

🌟 **Enjoy Your AI-Powered Canteen Experience!** 🍽️ 🚀

