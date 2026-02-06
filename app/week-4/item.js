export default function Item({ name, quantity, category }) {
  return (
    <li className="p-2 m-1 bg-gray-50 border border-gray-300 rounded">
      <div className="flex justify-between items-center">
        <span className="font-medium text-gray-800">{name}</span>
        <span className="text-sm text-gray-600">x{quantity}</span>
      </div>
      <p className="text-xs text-gray-500 capitalize mt-1">{category}</p>
    </li>
  );
}
