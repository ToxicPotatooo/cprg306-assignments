"use client";

import { useState } from "react";

const initialState = {
  name: "",
  quantity: 1,
  category: "produce",
};

export default function NewGroceryItem({ onAddItem }) {
  const [item, setItem] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      ...item,
      id: Math.random().toString(36).substring(2, 9),
    };

    onAddItem(newItem);
    setItem(initialState);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-gray-800 rounded-lg shadow-xl mb-8"
    >
      {/* Name Field */}
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-white text-sm font-bold mb-2"
        >
          Item Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={item.name}
          onChange={handleChange}
          required
          className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none"
          placeholder="Enter item name"
        />
      </div>

      {/* Quantity and Category Row */}
      <div className="flex gap-4 mb-6">
        {/* Quantity Field */}
        <div className="flex-1">
          <label
            htmlFor="quantity"
            className="block text-white text-sm font-bold mb-2"
          >
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            max="99"
            value={item.quantity}
            onChange={handleChange}
            className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none"
          />
        </div>

        {/* Category Field */}
        <div className="flex-1">
          <label
            htmlFor="category"
            className="block text-white text-sm font-bold mb-2"
          >
            Category
          </label>
          <select
            id="category"
            name="category"
            value={item.category}
            onChange={handleChange}
            className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none"
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
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition duration-200 ease-in-out transform hover:scale-105"
      >
        +
      </button>
    </form>
  );
}
