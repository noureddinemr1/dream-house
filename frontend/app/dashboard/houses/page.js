"use client"
import { useEffect, useState } from "react";
import { FaPlus } from 'react-icons/fa';
import CardDash from "@/app/components/CardDash";
import UpdateForm from "@/app/components/UpdateForm";
import AddHouse from "@/app/components/AddHouse";
import axios from 'axios';

export default function Houses() {
  const [items, setItems] = useState([]);
  const [selectedHouse, setSelectedHouse] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false); 

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const response = await axios.get('http://localhost:8080/houses');
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching houses:', error);
      }
    };

    fetchHouses();
  }, []);

  const handleUpdate = async (updatedData) => {
    try {
      const response = await axios.put(`http://localhost:8080/houses/${selectedHouse._id}`, updatedData);
      if (response.status === 200) {
        setItems(items.map(item =>
          item._id === selectedHouse._id ? { ...item, ...updatedData } : item
        ));
        setSelectedHouse(null);
      } else {
        console.error('Failed to update house');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDelete = async (item) => {
    try {
      const response = await axios.delete(`http://localhost:8080/houses/${item._id}`);
      if (response.status === 200) {
        setItems(items.filter(i => i._id !== item._id));
      } else {
        console.error('Failed to delete house');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleAdd = async (newHouse) => {
    try {
      const response = await axios.post('http://localhost:8080/addhouse', newHouse);
      if (response.status === 200) {
        setItems([...items, response.data]);
        setShowAddForm(false);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Houses</h1>
        <FaPlus 
          className="text-blue-500 cursor-pointer hover:text-blue-700 text-3xl"
          onClick={() => setShowAddForm(true)} 
        />
      </div>
      <div className="grid grid-cols-1 gap-6">
        {items.map((item, index) => (
          <CardDash 
            key={index} 
            item={item} 
            onUpdate={() => setSelectedHouse(item)} 
            onDelete={() => handleDelete(item)} 
          />
        ))}
      </div>
      {selectedHouse && (
        <UpdateForm 
          house={selectedHouse} 
          onClose={() => setSelectedHouse(null)} 
          onUpdate={handleUpdate} 
        />
      )}
      {showAddForm && (
        <AddHouse
          onClose={() => setShowAddForm(false)} 
          onAdd={handleAdd} 
        />
      )}
    </div>
  );
}
