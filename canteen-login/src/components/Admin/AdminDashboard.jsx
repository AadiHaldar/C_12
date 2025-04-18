import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Card, CardContent } from "../ui/card";
import { BarChart4, Users, Utensils, DollarSign } from "lucide-react";
import './AdminDashboard.css';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleAddItem = () => {
    navigate("/admin/add-item"); // ✅ Add item route
  };

  const handleViewMenu = () => {
    navigate("/admin/menu"); // ✅ View all menu items
  };

  return (
    <div className="admin-dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <h1>Admin Dashboard 🍽️</h1>
        <Input
          placeholder="Search here..."
          className="dashboard-input"
        />
      </header>

      {/* Main content */}
      <main className="dashboard-main">

        {/* Summary cards */}
        <section className="dashboard-cards">
          <Card className="dashboard-card">
            <CardContent className="dashboard-card-content">
              <Users className="icon blue" />
              <div>
                <h2>Users</h2>
                <p>👤👤👤</p>
              </div>
            </CardContent>
          </Card>

          <Card className="dashboard-card">
            <CardContent className="dashboard-card-content">
              <Utensils className="icon green" />
              <div>
                <h2>Menu Items</h2>
                <p>🍛🍜🍲</p>
              </div>
            </CardContent>
          </Card>

          <Card className="dashboard-card">
            <CardContent className="dashboard-card-content">
              <DollarSign className="icon yellow" />
              <div>
                <h2>₹8,430</h2>
                <p>Today's Revenue</p>
              </div>
            </CardContent>
          </Card>

          <Card className="dashboard-card">
            <CardContent className="dashboard-card-content">
              <BarChart4 className="icon purple" />
              <div>
                <h2>88%</h2>
                <p>Order Rate</p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Action buttons */}
        <div className="dashboard-buttons">
          <Button className="dashboard-btn blue-btn" onClick={handleAddItem}>
            ➕ Add New Item
          </Button>

          <Button className="dashboard-btn green-btn" onClick={handleViewMenu}>
            📋 View Menu
          </Button>

          <Button className="dashboard-btn yellow-btn">
            💰 Manage Payments
          </Button>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
