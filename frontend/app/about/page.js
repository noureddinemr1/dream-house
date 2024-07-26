"use client";
import { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 400);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      {loading ? (
        <Loading />
      ) : (
        <>
        <Navbar/>
        
        
          <div className="sm:flex  min-h-screen left-10 bottom-20 items-center max-w-screen-xl">
            <div className="sm:w-1/2 p-10">
              <div className="image object-center text-center ">
                <Image
                src="/about.png"
                  alt="Our Company"
                  width={996}
                  height={667}
                />
              </div>
            </div>
            <div className="sm:w-1/2 p-5">
              <div className="text">
                <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">
                  About us
                </span>
                <h2 className="my-4 font-bold text-6xl sm:text-4xl">
                  About <span className="text-blue-500">DREAM HOUSE</span>
                </h2>
                <p className="text-gray-700">
                  Welcome to Dream House, your trusted partner in finding the perfect home. We offer a wide range of properties to suit your needs, from cozy city apartments to luxurious seaside villas. Discover your dream home with us today!
                </p>
              </div>
            </div>
            
          </div>
         <Footer/>
        </>
      )}
    </div>
  );
}
