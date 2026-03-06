export default function Item({ name, quantity, category }) {
  return (
    <li className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="text-xl font-semibold text-white">{name}</div>
      <div className="text-gray-300 mt-1">
        Buy {quantity} in {category}
      </div>
    </li>
  );
}
