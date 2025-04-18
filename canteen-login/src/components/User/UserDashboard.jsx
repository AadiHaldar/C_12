// src/components/user/UserDashboard.jsx
import React, { useState, useEffect } from 'react';
import { fetchMenu } from '../../api/CanteenAPI';
import PreferenceForm from './PreferenceForm';
import Recommendations from './Recommendations';

function UserDashboard() {
  const [menu, setMenu] = useState([]);
  const [preferences, setPreferences] = useState(null);
  const [recommendations, setRecommendations] = useState(null);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    loadMenu();
  }, []);
  
  const loadMenu = async () => {
    const data = await fetchMenu();
    setMenu(data);
  };
  
  const handlePreferencesSubmit = async (userPreferences) => {
    setPreferences(userPreferences);
    setLoading(true);
    
    try {
      // Get recommendations from API
      const response = await fetch('/api/recommendations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          budget: userPreferences.budget,
          dietaryPreference: userPreferences.dietaryPreference,
          menu: menu
        }),
      });
      
      const data = await response.json();
      setRecommendations(data);
    } catch (error) {
      console.error('Error getting recommendations:', error);
      // Fallback to client-side recommendations if API fails
      const filteredItems = clientSideRecommender(menu, userPreferences);
      setRecommendations({
        recommendedItems: filteredItems,
        explanation: "These items fit your budget and dietary preferences."
      });
    } finally {
      setLoading(false);
    }
  };
  
  // Simple client-side recommendation engine as backup
  const clientSideRecommender = (menu, preferences) => {
    return menu.filter(item => {
      const matchesBudget = item.price <= preferences.budget;
      const matchesPreference = preferences.dietaryPreference === 'Any' || 
                               item.macros.includes(preferences.dietaryPreference);
      return matchesBudget && matchesPreference;
    }).sort((a, b) => a.price - b.price);
  };

  return (
    <div className="user-dashboard">
      <h2>🍽️ Canteen Meal Recommendations</h2>
      
      {!preferences ? (
        <PreferenceForm onSubmit={handlePreferencesSubmit} />
      ) : (
        <div className="recommendations-container">
          <div className="preferences-summary">
            <h3>Your Preferences</h3>
            <p>Budget: ₹{preferences.budget}</p>
            <p>Dietary Preference: {preferences.dietaryPreference}</p>
            <button onClick={() => setPreferences(null)}>Change Preferences</button>
          </div>
          
          {loading ? (
            <div className="loading">Loading recommendations...</div>
          ) : (
            <Recommendations 
              recommendations={recommendations} 
              onOrder={(item) => console.log("Order placed for", item)}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default UserDashboard;