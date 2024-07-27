"use client";
import { useEffect, useState } from "react";
import UserCard from "@/app/components/UserCard";
import axios from 'axios';

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8080/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []); 

  const handleDelete = async (user) => {
    try {
      const response = await axios.delete(`http://localhost:8080/users/${user._id}`);
      if (response.status === 200) {
        setUsers(users.filter(u => u._id !== user._id));
      } else {
        console.error('Failed to delete user');
      }
    } catch (error) {
      console.error('Error:', error);
    }
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
