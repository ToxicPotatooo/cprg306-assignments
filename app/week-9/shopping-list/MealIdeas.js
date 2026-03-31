"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  if (!ingredient) return [];

  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`,
    );
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching meal ideas:", error);
    return [];
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadMealIdeas() {
      let isMounted = true;

      setLoading(true);
      try {
        const mealIdeas = await fetchMealIdeas(ingredient);
        if (isMounted) {
          setMeals(mealIdeas);
        }
      } catch (error) {
        console.error("Error loading meal ideas:", error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }

      return () => {
        isMounted = false;
      };
    }

    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold text-white mb-4">
        Meal Ideas {ingredient && `with ${ingredient}`}
      </h2>

      {loading ? (
        <p className="text-gray-400">Loading meal ideas...</p>
      ) : !ingredient ? (
        <p className="text-gray-400">Select an item to see meal ideas</p>
      ) : meals.length === 0 ? (
        <p className="text-gray-400">No meal ideas found for {ingredient}</p>
      ) : (
        <ul className="space-y-4">
          {meals.map((meal) => (
            <li
              key={meal.idMeal}
              className="bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <image
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <span className="text-white font-medium">{meal.strMeal}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
