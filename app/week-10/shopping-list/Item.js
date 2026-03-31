export default function GroceryItem({ name, quantity, category, onSelect }) {
  return (
    <li
      className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer hover:bg-gray-700"
      onClick={() => onSelect && onSelect({ name, quantity, category })}
    >
      <div className="text-xl font-semibold text-white">{name}</div>
      <div className="text-gray-300 mt-1">
        Buy {quantity} in {category}
      </div>
    </li>
  );
}
