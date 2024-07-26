"use client"
import { useEffect, useState } from "react";
import { FaPlus } from 'react-icons/fa';
import CardDash from "@/app/components/CardDash";
import UpdateForm from "@/app/components/UpdateForm";
import AddHouse from "@/app/components/AddHouse"; 

export default function Houses() {
  const [items, setItems] = useState([]);
  const [selectedHouse, setSelectedHouse] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false); 

  useEffect(() => {
    fetch('http://localhost:8080/houses')
      .then(res => res.json())
      .then(data => setItems(data));
  }, []); 

  const handleUpdate = (updatedData) => {
    fetch(`http://localhost:8080/houses/${selectedHouse._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    })
      .then(res => {
        if (res.ok) {
          setItems(items.map(item =>
            item._id === selectedHouse._id ? { ...item, ...updatedData } : item
          ));
          setSelectedHouse(null);
        } else {
          console.error('Failed to update house');
        }
      })
      .catch(error => console.error('Error:', error));
  };

  const handleDelete = (item) => {
    fetch(`http://localhost:8080/houses/${item._id}`, {
      method: 'DELETE',
    })
      .then(res => {
        if (res.ok) {
          setItems(items.filter(i => i._id !== item._id));
        } else {
          console.error('Failed to delete house');
        }
      })
      .catch(error => console.error('Error:', error));
  };

  const handleAdd = (newHouse) => {
    fetch('http://localhost:8080/addhouse', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newHouse),
    })
      .then(res => res.json())
      .then(data => {
        setItems([...items, data]);
        setShowAddForm(false);
      })
      .catch(error => console.error('Error:', error));
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
