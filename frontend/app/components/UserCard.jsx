/* eslint-disable @next/next/no-img-element */
import { FaTrash } from 'react-icons/fa';

export default function UserCard({ user, onDelete }) {
  return (
    <div className="my-6 mx-auto w-full max-w-4xl">
      <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 p-5">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold mb-2 flex-grow">
            {user.username}
          </h2>
          <div className="flex space-x-2">
            <FaTrash 
              className="text-red-500 cursor-pointer hover:text-red-700"
              onClick={onDelete}
            />
          </div>
        </div>
        <p className="text-gray-700 mb-2">Email: {user.email}</p>
        <p className="text-gray-700 mb-2">Password: {user.password}</p>
      </div>
    </div>
  );
}
