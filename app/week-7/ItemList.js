"use client";

import { useState } from "react";
import Item from "./Item";

export default function GroceryItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 rounded-md font-semibold transition-colors ${
            sortBy === "name"
              ? "bg-blue-600 text-white"
              : "bg-gray-600 text-gray-200 hover:bg-gray-500"
          }`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded-md font-semibold transition-colors ${
            sortBy === "category"
              ? "bg-blue-600 text-white"
              : "bg-gray-600 text-gray-200 hover:bg-gray-500"
          }`}
        >
          Sort by Category
        </button>
      </div>

      <ul className="space-y-4">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}
