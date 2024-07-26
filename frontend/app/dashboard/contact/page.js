"use client";
import { useEffect, useState } from "react";
import ContactCard from "@/app/components/ContactCard";

export default function AdminDashboard() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/contacts')
      .then(res => res.json())
      .then(data => setContacts(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Contact Messages</h1>
      <div className="grid grid-cols-1 gap-6">
        {contacts.map((contact, index) => (
          <ContactCard key={index} contact={contact} />
        ))}
      </div>
    </div>
  );
}
