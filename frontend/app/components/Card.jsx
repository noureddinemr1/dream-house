/* eslint-disable @next/next/no-img-element */
export default function Cards({ item, onClick }) {
    return (
      <div className="my-6 mx-auto max-w-sm" onClick={onClick}>
        <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
          <img className="w-full h-48 object-cover" src={item.image} alt="Product" />
          <div className="p-5">
            <h2 className="text-xl font-semibold mb-2 flex justify-between items-center">
              {item.name}
              <span className="badge badge-secondary text-sm bg-blue-500 text-white px-2 py-1 rounded">{item.price}$</span>
            </h2>
            <p className="text-gray-700 ">{item.title}</p>
            <div className="flex justify-between items-center">
              <span className="badge badge-outline text-sm bg-gray-200 text-gray-800 ">{item.category}</span>
              <button className="bg-blue-500 text-white text-sm px-4 py-2 rounded-full border-2 border-blue-500 hover:bg-white hover:text-blue-500 transition-colors duration-200">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  