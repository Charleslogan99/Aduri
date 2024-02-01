import React from 'react';
import { FaGraduationCap, FaMedkit, FaUtensils, FaTshirt } from 'react-icons/fa';

const Mission = () => {
  return (
    <div className="container mx-auto pb-16 px-4 py-8">
      <div className='p-8'>
        <h1 className='font-semibold text-4xl text-blue-700 text-center'>Our Mission</h1>
        <p className='text-sm pt-4 text-black text-center'>At our NGO, we are dedicated to empowering women and nurturing children to create a brighter, more equitable future. Our mission is rooted in the belief that every woman and child deserves access to education, healthcare, and opportunities for growth, regardless of their circumstances.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Card 1: Education for every child */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
          <FaGraduationCap className="w-full h-64 text-blue-700 p-16" />
          <div className="p-4">
            <h3 className="text-xl text-blue-700 font-satoshi mb-2">Education for every child</h3>
            <p className="text-gray-800">Access to quality education is fundamental in breaking the cycle of poverty. We strive to ensure that every child has the opportunity to learn, grow, and thrive in a nurturing environment. Through education, we empower the next generation to reach their full potential and build brighter futures.</p>
          </div>
        </div>

        {/* Card 2: Providing medical care */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
          <FaMedkit className="w-full h-64 text-blue-700 p-16" />
          <div className="p-4">
            <h3 className="text-xl text-blue-700 font-satoshi mb-2">Providing medical care</h3>
            <p className="text-gray-800">Access to quality healthcare is a fundamental human right. We are committed to providing essential medical services and support to those in need. Through preventative care, treatment, and health education initiatives, we aim to improve the well-being and resilience of individuals and communities.</p>
          </div>
        </div>

        {/* Card 3: Feeding the hungry people */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
          <FaUtensils className="w-full h-64 text-blue-700 p-16" />
          <div className="p-4">
            <h3 className="text-xl text-blue-700 font-satoshi mb-2">Providing food for them</h3>
            <p className="text-gray-800">Nutritious food is a basic necessity for a healthy and fulfilling life. We work tirelessly to address food insecurity and hunger within our communities. Through food distribution programs and sustainable agriculture initiatives, we strive to ensure that no one goes to bed hungry. Together, we can create a world where everyone has access to nutritious meals.</p>
          </div>
        </div>

        {/* Card 4: Providing clothing for people */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
          <FaTshirt className="w-full h-64 text-blue-700 p-16" />
          <div className="p-4">
            <h3 className="text-xl font-satoshi text-blue-700 mb-2">Providing clothing</h3>
            <p className="text-gray-800">Access to clean and adequate clothing is essential for dignity and well-being. We provide clothing assistance to individuals and families in need, ensuring that everyone has the warmth and protection they deserve. By promoting access to clothing, we empower individuals to participate fully in society and pursue their goals with confidence.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
