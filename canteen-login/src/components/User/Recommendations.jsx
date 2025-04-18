// src/components/user/Recommendations.jsx
import React from 'react';

function Recommendations({ recommendations, onOrder }) {
  if (!recommendations || !recommendations.recommendedItems) {
    return <div>No recommendations available</div>;
  }

  const { recommendedItems, explanation } = recommendations;
  
  return (
    <div className="recommendations">
      <h3>Recommended Meals</h3>
      
      <div className="ai-explanation">
        <h4>AI Recommendation Explanation:</h4>
        <p>{explanation}</p>
      </div>
      
      {recommendedItems.length === 0 ? (
        <p>No meals found matching your criteria. Try adjusting your budget or preferences.</p>
      ) : (
        <div className="recommendation-cards">
          {recommendedItems.map((item, index) => (
            <div key={index} className="meal-card">
              <h4>{item.name}</h4>
              <div className="meal-details">
                <span className="price">₹{item.price}</span>
                <span className="category">{item.macros}</span>
                {item.calories && <span className="calories">{item.calories} cal</span>}
              </div>
              {item.description && <p>{item.description}</p>}
              <button 
                className="order-btn"
                onClick={() => onOrder(item)}
              >
                Order Now
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Recommendations;