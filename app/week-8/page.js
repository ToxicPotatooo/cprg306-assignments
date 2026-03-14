"use client";

import { useState } from "react";
import ItemList from "./ItemList";
import NewItem from "./NewItem";
import MealIdeas from "./MealIdeas";
import itemsData from "./items.json";

function cleanItemName(name) {
  const emojiRegex =
    /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{2702}-\u{27B0}\u{24C2}-\u{1F251}\u{1F900}-\u{1F9FF}\u{1F200}-\u{1F2FF}]/gu;

  let cleaned = name.replace(/,.*$/, "").trim();
  cleaned = cleaned.replace(emojiRegex, "").trim();

  return cleaned || name.replace(emojiRegex, "").trim();
}

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleItemSelect = (item) => {
    const cleanedName = cleanItemName(item.name);
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Shopping List
        </h1>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>

          <div className="flex-1">
            <MealIdeas ingredient={selectedItemName} />
          </div>
        </div>
      </div>
    </main>
  );
}
