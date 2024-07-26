"use client";
import { useEffect, useState } from "react";
import UserCard from "@/app/components/UserCard";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []); 



  const handleDelete = (user) => {
    fetch(`http://localhost:8080/users/${user._id}`, {
      method: 'DELETE',
    })
      .then(res => {
        if (res.ok) {
          setUsers(users.filter(u => u._id !== user._id));
        } else {
          console.error('Failed to delete user');
        }
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 gap-6">
        {users.map((user, index) => (
          <UserCard 
            key={index} 
            user={user} 
            onDelete={() => handleDelete(user)} 
          />
        ))}
      </div>
    </div>
  );
}
