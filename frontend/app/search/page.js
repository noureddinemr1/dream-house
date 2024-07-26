"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';
import Details from '../components/Details';
import Card from '../components/Card';
import Loading from '../components/Loading';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Search() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All categories');
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setDropdownOpen(false);
  };

  const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:8080/houses'); 
      if (response.data) setItems(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchItems();
      setLoading(false);
    }, 400);
  }, []);

  const filteredItems = items.filter((item) => {
    const categoryMatch =
      selectedCategory === 'All categories' || item.category === selectedCategory;

    const searchMatch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());

    return categoryMatch && searchMatch;
  });

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          
          <div className='min-h-screen'>
            <form className="m-6 max-w-lg mx-auto">
              <div className="flex relative">
                <button
                  id="dropdown-button"
                  type="button"
                  className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100"
                  onClick={toggleDropdown}
                >
                  {selectedCategory}
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                {dropdownOpen && (
                  <div
                    id="dropdown"
                    className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 top-full left-0 mt-1"
                  >
                    <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdown-button">
                      <li>
                        <button
                          type="button"
                          className="inline-flex w-full px-4 py-2 hover:bg-gray-100"
                          onClick={() => handleCategorySelect('All categories')}
                        >
                          All categories
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="inline-flex w-full px-4 py-2 hover:bg-gray-100"
                          onClick={() => handleCategorySelect('Luxury')}
                        >
                          Luxury
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="inline-flex w-full px-4 py-2 hover:bg-gray-100"
                          onClick={() => handleCategorySelect('Apartment')}
                        >
                          Apartment
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="inline-flex w-full px-4 py-2 hover:bg-gray-100"
                          onClick={() => handleCategorySelect('Cottage')}
                        >
                          Cottage
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="inline-flex w-full px-4 py-2 hover:bg-gray-100"
                          onClick={() => handleCategorySelect('Beach House')}
                        >
                          Beach House
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
                <div className="relative w-full">
                  <input
                    type="search"
                    id="search-dropdown"
                    className="block p-2.5 w-full z-20 text-sm text-gray-500 bg-white rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="What do you want?"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    required
                  />
                  <svg
                    className="w-4 h-4 absolute top-3 right-10"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <span className="sr-only">Search</span>
                </div>
              </div>
            </form>

            <div className="container mx-auto p-4">
              {selectedItem ? (
                <Details item={selectedItem} onBack={() => setSelectedItem(null)} />
              ) : (
                <div className="grid lg:grid-cols-4 gap-3">
                  {filteredItems.map((item, index) => (
                    <Card key={index} item={item} onClick={() => setSelectedItem(item)} />
                  ))}
                </div>
              )}
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}
