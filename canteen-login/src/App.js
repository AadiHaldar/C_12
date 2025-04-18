// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";

// Component Imports
import LoginPage from './components/Login/LoginPage';
import AdminDashboard from "./components/Admin/AdminDashboard";
import UserDashboard from "./components/User/UserDashboard";
import MenuItemForm from "./components/Admin/MenuItemForm"; // 👈 Assuming the form component is named menuitem.jsx
import MenuList from './components/Admin/MenuList'; // add this
import MenuItemPage from './components/Admin/MenuItemPage'; // 💡
import AddMenuItemPage from "./components/Admin/AddMenuItemPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/user" element={<UserDashboard />} />
      <Route path="/menuitem" element={<MenuItemForm />} /> {/* 👈 Add Item Form */}
      <Route path="/menu" element={<MenuList />} />
      <Route path="/menuitem/:id" element={<MenuItemPage />} />
      <Route path="/admin/add-item" element={<AddMenuItemPage />} />
    </Routes>
  );
}

export default App;
