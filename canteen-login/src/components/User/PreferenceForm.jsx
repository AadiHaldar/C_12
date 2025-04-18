// src/components/user/PreferenceForm.jsx
import React, { useState } from 'react';

function PreferenceForm({ onSubmit }) {
  const [budget, setBudget] = useState(100);
  const [dietaryPreference, setDietaryPreference] = useState('Any');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      budget,
      dietaryPreference
    });
  };

  return (
    <div className="preference-form-container">
      <h3>Set Your Meal Preferences</h3>
      <form onSubmit={handleSubmit} className="preference-form">
        <div className="form-group">
          <label htmlFor="budget">Your Budget (₹):</label>
          <input
            id="budget"
            type="number"
            min="10"
            step="10"
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="preference">Dietary Preference:</label>
          <select
            id="preference"
            value={dietaryPreference}
            onChange={(e) => setDietaryPreference(e.target.value)}
          >
            <option value="Any">Any</option>
            <option value="Veg">Vegetarian</option>
            <option value="Non-Veg">Non-Vegetarian</option>
            <option value="Protein-rich">Protein-rich</option>
            <option value="Carb-rich">Carb-rich</option>
          </select>
        </div>
        
        <button type="submit" className="get-recommendations-btn">
          Get AI Recommendations
        </button>
      </form>
    </div>
  );
}

export default PreferenceForm;