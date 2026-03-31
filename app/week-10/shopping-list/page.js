"use client";

import { useState, useEffect } from "react";
import { getItems, addItem } from "../_services/shopping-list-service";
import { useUserAuth } from "../contexts/AuthContext";

export default function ShoppingList() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [newItemName, setNewItemName] = useState("");
  const [newItemQuantity, setNewItemQuantity] = useState(1);
  const [newItemCategory, setNewItemCategory] = useState("produce");

  // Load items function
  async function loadItems() {
    if (user) {
      const shoppingItems = await getItems(user.uid);
      setItems(shoppingItems);
    }
  }

  // useEffect to load items when component mounts or user changes
  useEffect(() => {
    loadItems();
  }, [user]); // Dependency: user - reload when user changes

  // Handle adding an item
  async function handleAddItem() {
    if (!newItemName.trim()) return;

    const newItem = {
      name: newItemName,
      quantity: parseInt(newItemQuantity),
      category: newItemCategory,
    };

    // Add to Firestore and get the new ID
    const newItemId = await addItem(user.uid, newItem);

    // Update local state with the new item including its ID
    const itemWithId = { id: newItemId, ...newItem };
    setItems([...items, itemWithId]);

    // Clear form
    setNewItemName("");
    setNewItemQuantity(1);
    setNewItemCategory("produce");
  }

  // Render your component here
  return (
    <div>
      <h1>Shopping List</h1>
      {!user ? (
        <p>Please sign in to view your shopping list</p>
      ) : (
        <>
          {/* Add item form */}
          <div>
            <input
              type="text"
              placeholder="Item name"
              value={newItemName}
              onChange={(e) => setNewItemName(e.target.value)}
            />
            <input
              type="number"
              min="1"
              value={newItemQuantity}
              onChange={(e) => setNewItemQuantity(e.target.value)}
            />
            <select
              value={newItemCategory}
              onChange={(e) => setNewItemCategory(e.target.value)}
            >
              <option value="produce">Produce</option>
              <option value="dairy">Dairy</option>
              <option value="bakery">Bakery</option>
              <option value="meat">Meat</option>
              <option value="frozen foods">Frozen Foods</option>
              <option value="canned goods">Canned Goods</option>
              <option value="dry goods">Dry Goods</option>
              <option value="beverages">Beverages</option>
              <option value="snacks">Snacks</option>
              <option value="household">Household</option>
              <option value="other">Other</option>
            </select>
            <button onClick={handleAddItem}>Add Item</button>
          </div>

          {/* Display items list */}
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                {item.name} - Quantity: {item.quantity} - Category:{" "}
                {item.category}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
