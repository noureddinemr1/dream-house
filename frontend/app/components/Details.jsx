/* eslint-disable @next/next/no-img-element */
export default function Details({ item, onBack }) {
  
    return (
      <div className="container mx-auto p-4">
        <button onClick={onBack} className="mb-4 text-blue-500">Back</button>
        <div className="bg-white shadow-md rounded-lg overflow-hidden dark:bg-gray-800 dark:text-white dark:border dark:border-gray-700">
          <img className="w-full h-64 object-cover" src={item.image} alt="Product" />
          <div className="p-5">
            <h2 className="text-2xl font-semibold mb-4">{item.name}</h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-2">{item.price}$</p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{item.title}</p>
            <p className="text-gray-700 dark:text-gray-300">{item.category}</p>
          </div>
        </div>
      </div>
    );
  }
  