import { useState } from 'react';

export default function AddHouse({ onClose, onAdd }) {
  const [formData, setFormData] = useState({
    image: '',
    name: '',
    price: '',
    title: '',
    category: 'House',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Add New House</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Image URL</label>
            <input 
              type="text" 
              name="image" 
              value={formData.image} 
              onChange={handleChange} 
              className="w-full p-2 border border-gray-300 rounded"
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Name</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              className="w-full p-2 border border-gray-300 rounded"
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Price</label>
            <input 
              type="number" 
              name="price" 
              value={formData.price} 
              onChange={handleChange} 
              className="w-full p-2 border border-gray-300 rounded"
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Title</label>
            <input 
              type="text" 
              name="title" 
              value={formData.title} 
              onChange={handleChange} 
              className="w-full p-2 border border-gray-300 rounded"
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Category</label>
            <select 
              name="category" 
              value={formData.category} 
              onChange={handleChange} 
              className="w-full p-2 border border-gray-300 rounded"
              required 
            >
              <option value="House">House</option>
              <option value="Apartment">Apartment</option>
            </select>
          </div>
          <div className="flex justify-end space-x-2">
            <button 
              type="button" 
              onClick={onClose} 
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add House
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
