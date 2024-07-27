/* eslint-disable @next/next/no-img-element */
import { FaEdit, FaTrash } from 'react-icons/fa';

export default function CardDash({ item, onUpdate, onDelete }) {
  return (
    <div className="my-6 mx-auto w-full max-w-5xl">
      <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 flex">
        <img className="w-48 h-48 object-cover" src={item.image} alt="Product" />
        <div className="p-5 flex flex-col justify-between flex-1">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold mb-2 flex-grow">
              {item.name}
            </h2>
            <div className="flex space-x-2">
              <FaEdit 
                className="text-blue-500 cursor-pointer hover:text-blue-700"
                onClick={onUpdate}
              />
              <FaTrash 
                className="text-red-500 cursor-pointer hover:text-red-700"
                onClick={onDelete}
              />
            </div>
          </div>
          <span className="badge badge-secondary text-sm bg-blue-500 text-white px-2 py-1 rounded mb-2">{item.price}$</span>
          <p className="text-gray-700 mb-2">{item.title}</p>
          <div className="flex justify-between items-center">
            <span className="badge badge-outline text-sm bg-gray-200 text-gray-800">{item.category}</span>
            
          </div>
        </div>
      </div>
    </div>
  );
}
