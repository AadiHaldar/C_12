// src/components/Admin/AddMenuItemPage.jsx
import React from 'react';
import MenuItemForm from './MenuItemForm';
import { useNavigate } from 'react-router-dom';

const AddMenuItemPage = () => {
  const navigate = useNavigate();

  const handleAddItem = (newItem) => {
    // 💡 Later this will hit the backend API to save the item
    console.log("✅ New Menu Item Submitted:", newItem);

    // Redirect back to dashboard after submission
    navigate('/admin');
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <MenuItemForm
        initialItem={{}} // 👈 empty item for adding
        onSubmit={handleAddItem}
        onCancel={() => navigate('/admin')}
      />
    </div>
  );
};

export default AddMenuItemPage;
