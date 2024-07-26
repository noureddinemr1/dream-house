"use client"
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Card from './components/Card';
import Details from './components/Details';
import Loading from './components/Loading';
import Navbar from './components/Navbar';
import Footer from './components/Footer';



export default function Home() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const targetRef = useRef(null);
  const [loading, setLoading] = useState(true);


  const scrollToDiv = () => {
    targetRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("http://localhost:8080/home");
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Failed to fetch items:', error); 
    };
  }
    setTimeout(()=>{
      fetchItems();
      setLoading(false);
      
    },400)
    
  },[]);

  if (loading) {
    return <Loading />;
  }

  return (

    <>

    {loading ? <Loading/> : 
    <>
      <Navbar/>
      <div className={`bg-white flex-items-center ${selectedItem ? 'blur' : ''}`}>
        <div className="container mx-auto px-7 flex justify-center relative py-16">
          <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
            <span className="w-20 h-2 bg-gray-800 mb-12"></span>
            <h1 className=" uppercase sm:text-6xl font-black flex flex-col leading-none text-gray-800">
              Find your dream 
              <span className="text-5xl sm:text-7xl">House</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-700">
              Welcome to Dream House, your trusted partner in finding the perfect home. We offer a wide range of properties to suit your needs, from cozy city apartments to luxurious seaside villas. Discover your dream home with us today!
            </p>
            <div className="flex mt-8">
              <button onClick={scrollToDiv} className="uppercase py-2 px-4 rounded-lg bg-blue-500 border-2 border-transparent text-white text-md mr-4 hover:bg-blue-600">
                Top houses
              </button>
            </div>
          </div>
          <div className="hidden sm:block relative bottom-100 sm:w-1/3 lg:w-3/5 relative">
          <Image src="/house.png" width={800} height={200} alt="Next.js logo" />
          </div>
        </div>
      </div>
      <div className="grid-cols-5 gap-5 h-20">
      </div>

      <div ref={targetRef} className="container mx-auto p-4">
        {selectedItem ? (
          <Details item={selectedItem} onBack={() => setSelectedItem(null)} />
        ) : (
          <div className="grid lg:grid-cols-4 gap-3">
            {items.map((item, index) => (
              <Card key={index} item={item} onClick={() => setSelectedItem(item)} />
            ))}
          </div>
        )}
      </div>
      <Footer/>
      </>
      }

    </>
  );
}
