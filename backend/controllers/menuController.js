const MenuItem = require('../models/MenuItem');

// @desc    Get all menu items
exports.getMenu = async (req, res) => {
  try {
    const items = await MenuItem.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching menu', error: err.message });
  }
};

// @desc    Add a new menu item
exports.addItem = async (req, res) => {
  const { name, price, calories, quantity, category } = req.body;
  try {
    const newItem = new MenuItem({ name, price, calories, quantity, category });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: 'Error adding item', error: err.message });
  }
};

// @desc    Delete a menu item by id
exports.deleteItem = async (req, res) => {
  const { id } = req.params; // Get the id from the route parameter
  try {
    const deletedItem = await MenuItem.findByIdAndDelete(id);
    if (!deletedItem) {
      return res.status(404).json({ message: 'Menu item not found' });
    }
    res.json({ message: 'Menu item deleted successfully', deletedItem });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting item', error: err.message });
  }
};

// @desc    Update a menu item by id
exports.updateItem = async (req, res) => {
  const { id } = req.params; // Get the id from the route parameter
  const { name, price, calories, quantity, category } = req.body; // Get the updated fields from the request body
  
  try {
    const updatedItem = await MenuItem.findByIdAndUpdate(id, { name, price, calories, quantity, category }, { new: true });
    if (!updatedItem) {
      return res.status(404).json({ message: 'Menu item not found' });
    }
    res.json(updatedItem);
  } catch (err) {
    res.status(400).json({ message: 'Error updating item', error: err.message });
  }
};
