import React from "react";

const Item = ({ name, quantity, category }) => {
  return (
    <li className="group flex items-center justify-between p-4 mb-3 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 hover:border-blue-300">
      <div className="flex flex-col">
        <span className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
          {name}
        </span>
        <span className="text-sm text-gray-500 mt-1">
          Category:{" "}
          <span className="capitalize font-medium text-gray-700">
            {category}
          </span>
        </span>
      </div>

      <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
        <span className="text-sm font-bold text-gray-700">Qty: {quantity}</span>
      </div>
    </li>
  );
};

export default Item;
