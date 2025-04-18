import React, { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./MenuList.css";

const mockMenu = [
  {
    id: "1",
    name: "Paneer Butter Masala",
    calories: 300,
    servingSize: 2,
    category: "Veg",
  },
  {
    id: "2",
    name: "Chicken Biryani",
    calories: 550,
    servingSize: 3,
    category: "Non-Veg",
  },
];

const MenuList = () => {
  const [menuItems, setMenuItems] = useState(mockMenu);
  const navigate = useNavigate();

  const handleEdit = (itemId) => {
    navigate(`/menuitem/${itemId}`);
  };

  const handleDelete = (itemId) => {
    const confirmed = window.confirm("Delete this item?");
    if (confirmed) {
      setMenuItems((prev) => prev.filter((item) => item.id !== itemId));
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🍛 All Menu Items</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <div key={item.id} className="border p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p>Category: {item.category}</p>
            <p>Calories: {item.calories} kcal</p>
            <p>Serving Size: {item.servingSize} people</p>

            <div className="flex justify-between mt-4">
              <button
                onClick={() => handleEdit(item.id)}
                className="text-blue-600 hover:underline flex items-center gap-1"
              >
                <Pencil size={18} /> Edit
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                className="text-red-600 hover:underline flex items-center gap-1"
              >
                <Trash2 size={18} /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuList;
