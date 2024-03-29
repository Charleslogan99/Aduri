import React from 'react';
import { useSpring, animated } from 'react-spring';
import backgroundImage from '../assets/Herologo3.jpg'; 

export default function Support() {
  const heroSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(-50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 200, friction: 80 }, // Adjust tension and friction as needed
  });

  return (
    <div className='mt-'>
      <animated.div
        // className="bg-gradient-to-br from-purple-700 to-zinc-900 py-12 h-screen px-4 sm:px-6 lg:px-8 flex items-center justify-center"
        style={heroSpring} // Apply the spring animation style
      >
         <div
      className="relative bg-cover bg-center h-screen flex items-center justify-center sm:mt-10  md:mt-0 xl:mt-0"
      style={{ backgroundImage: `url(${backgroundImage})` }} // Set background image dynamically
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="text-center z-10 text-white">
        <h1 className="text-4xl text-blue-700 md:text-6xl lg:text-8xl font-bold mb-8">Support Our Initiatives</h1>
       
       <p className="text-md text-gray-300 lg:text-xl">
            Your contributions help us make a difference in the lives of those in need. 
            Join us in our mission to bring hope and assistance to women & chidren.
          </p>
      </div>
   </div>
      </animated.div>

      {/* Support information */}
      <div className="container mx-auto px-4 sm:px-0 mt-20 h-full">
        <h1 className=' text-blue-700 text-4xl font-satoshi mb-16 lg:text-center'>Our Support Details</h1>
        <h3 className="text-4xl font-semibold leading-7 text-gray-900 mb-4 sm:text-md">Naira Account</h3>
        <dl className="divide-y divide-gray-400">
          {/* Information details */}
          <div className=" py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-lg font-satoshi leading-6 text-gray-900">Bank Name</dt>
            <dd className="mt-1 text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Guaranty Trust Bank (Gt Bank)</dd>
          </div>
          <div className=" py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-lg font-medium leading-6 text-gray-900">Account Number</dt>
            <dd className="mt-1 text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">0899586286</dd>
          </div>
         

          
        </dl>
      </div>
      <div className="container mx-auto px-4 sm:px-0 mt-16 mb-16 h-full">
        <h3 className="text-4xl font-semibold leading-7 text-gray-900 mb-4">Foreign Accounts</h3>
        <dl className="divide-y divide-gray-400">
          {/* Information details */}
          <div className=" py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-lg font-medium leading-6 text-gray-900">Bank Name</dt>
            <dd className="mt-1 text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Guaranty Trust Bank (Gt Bank)</dd>
          </div>
          <div className=" py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-lg font-medium leading-6 text-gray-900">Dollar Account Number</dt>
            <dd className="mt-1 mb-1 text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">0900139586</dd>
            <dt className="text-lg mt-2 font-medium leading-6 text-gray-900">Euro Account Number</dt>
            <dd className="mt-1 mb-1 text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">0900139603</dd>
            <dt className="text-lg mt-2 font-medium leading-6 text-gray-900">Pounds Account Number</dt>
            <dd className="mt-1 text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">0900139593</dd>
            <dt className="text-lg mt-2 font-medium leading-6 text-gray-900"> Sort Code</dt>
            <dd className="mt-1 text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">058083257</dd>
            <dt className="text-lg mt-2 font-medium leading-6 text-gray-900">Swift Code</dt>
            <dd className="mt-1 text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">GTBINGLA</dd>
            <dt className="text-lg mt-2 font-medium leading-6 text-gray-900">Bank Address:</dt>
            <dd className="mt-1 text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Plot 1473 Ahmadu Bello Way, Area 11 Garki, Abuja FCT</dd>
         
          </div>
          {/*  */}

          
        </dl>
      </div>
    </div>
  );
}
