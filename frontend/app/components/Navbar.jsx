"use client"
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaUser } from 'react-icons/fa';
import EditUser from './EditUser';

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isEditUserOpen, setIsEditUserOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    router.push('/login');
  };

  const openEditUser = () => {
    setDropdownOpen(false);
    setIsEditUserOpen(true);
  };

  const closeEditUser = () => {
    setIsEditUserOpen(false);
  };

  return (
    <nav className="bg-white w-full px-8 md:px-auto">
      <div className="container mx-auto flex items-center justify-between flex-wrap md:flex-nowrap py-4">
        <div className="flex items-center text-black-500 font-bold">
          <Link href="/">
            <svg
              x="0px"
              y="0px"
              width="70"
              height="70"
              viewBox="0 0 130 70"
              className="fill-blue-500"
            >
              <path d="M 32 3 L 1 28 L 1.4921875 28.654297 C 2.8591875 30.477297 5.4694688 30.791703 7.2304688 29.345703 L 32 9 L 56.769531 29.345703 C 58.530531 30.791703 61.140812 30.477297 62.507812 28.654297 L 63 28 L 54 20.742188 L 54 8 L 45 8 L 45 13.484375 L 32 3 z M 32 13 L 8 32 L 8 56 L 56 56 L 56 35 L 32 13 z M 26 34 L 38 34 L 38 52 L 26 52 L 26 34 z"></path>
            </svg>
          </Link>
        </div>
        <div className="block lg:hidden">
        </div>
        <div className="hidden w-full lg:flex lg:items-center lg:w-auto" id="menu">
          <ul className="flex flex-col lg:flex-row text-gray-500 font-semibold justify-between w-full lg:w-auto">
            <li className="md:px-4 md:py-2 hover:text-indigo-400"><Link href="/">Home</Link></li>
            <li className="md:px-4 md:py-2 hover:text-indigo-400"><Link href="/search">Search</Link></li>
            <li className="md:px-4 md:py-2 hover:text-indigo-400"><Link href="/about">About</Link></li>
            <li className="md:px-4 md:py-2 hover:text-indigo-400"><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="order-2 md:order-3 relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl flex items-center gap-2"
          >
            <FaUser className="h-5 w-5" />
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-xl z-50">
              <p
                onClick={openEditUser}
                className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white transition-colors duration-200 rounded-t-lg cursor-pointer"
              >
                Edit User
              </p>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white transition-colors duration-200 rounded-b-lg"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
      <EditUser isOpen={isEditUserOpen} onClose={closeEditUser} />
    </nav>
  );
}
