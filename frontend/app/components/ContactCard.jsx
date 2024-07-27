"use client";
export default function ContactCard({ contact }) {
  return (
    <div className="flex flex-col p-6 bg-white shadow-lg rounded-lg mb-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">{contact.name}</h2>
        <span className="text-sm text-gray-500">{contact.email}</span>
      </div>
      <div className="mb-2">
        <h3 className="text-lg font-semibold text-gray-600">Subject:</h3>
        <p className="text-gray-700">{contact.object}</p>
      </div>
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold text-gray-600">Message:</h3>
        <p className="text-gray-700 overflow-auto max-h-40 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          {contact.message}
        </p>
      </div>
    </div>
  );
}
