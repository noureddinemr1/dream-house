"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [object, setObject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  const handleSubmit = async () => {
    try {
      
      await axios.post('http://localhost:8080/contact', {
        name,
        email,
        object,
        message
      });
      toast.success('Message sent successfully',100);
      setName("");
      setEmail("");
      setObject("");
      setMessage("");
    } catch (error) {
      toast.error('Failed to send message');
  };
}

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 400);
  }, []);

  return (
    loading ? (
      <Loading />
    ) : (
      <>
        <Navbar />
        <div className="font-[sans-serif] max-w-6xl mx-auto relative bg-white shadow-md rounded-3xl overflow-hidden mt-4">
          <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-blue-500"></div>
          <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-blue-500"></div>

          <div className="grid md:grid-cols-2 gap-8 py-8 px-6">
            <div className="text-center flex flex-col items-center justify-center">
              <Image src="/house.png" width={800} height={200} alt="Next.js logo" />
            </div>

            <form className="rounded-tl-3xl rounded-bl-3xl" onSubmit={e => e.preventDefault()}>
              <h2 className="text-2xl text-blue-600 font-bold text-center mb-6">Contact us</h2>
              <div className="max-w-md mx-auto space-y-3 relative">
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-gray-100 rounded-md border-none py-3 px-4 text-sm outline-blue-600 focus:bg-transparent"
                  disabled={loading}
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-100 rounded-md border-none py-3 px-4 text-sm outline-blue-600 focus:bg-transparent"
                  disabled={loading}
                />
                <input
                  type="text"
                  placeholder="Object"
                  value={object}
                  onChange={(e) => setObject(e.target.value)}
                  className="w-full bg-gray-100 rounded-md border-none py-3 px-4 text-sm outline-blue-600 focus:bg-transparent"
                  disabled={loading}
                />
                <textarea
                  placeholder="Message"
                  rows="6"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-gray-100 rounded-md border-none px-4 text-sm pt-3 outline-blue-600 focus:bg-transparent"
                  disabled={loading}
                ></textarea>

                <button
                  type="button"
                  onClick={handleSubmit}
                  className={`text-white w-full relative bg-blue-500 hover:bg-blue-600 rounded-md text-sm px-6 py-3 mt-6 ${loading ? "cursor-not-allowed" : ""}`}
                  disabled={loading}
                >
            
                    
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16px"
                        height="16px"
                        fill="#fff"
                        className="mr-2 inline"
                        viewBox="0 0 548.244 548.244"
                      >
                        <path
                          fillRule="evenodd"
                          d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                          clipRule="evenodd"
                          data-original="#000000"
                        />
                      </svg>
                      Send Message
                  
                
                </button>
              </div>
            </form>
          </div>
        </div>
        <ToastContainer />
        <Footer />
      </>
    )
  )
  }
