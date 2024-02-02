
import { FaFacebook, FaTwitter, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaInstagram } from 'react-icons/fa';
// import Nav from './Header';
import GoogleTranslator from '../components/Translator'
const Contact = () => {
  return (
    <div>
        {/* <Nav /> */}
        <GoogleTranslator />
      {/* Hero Section with Gradient Background */}
      <div className="relative bg-gradient-to-r from-blue-700 to-white mt-2 sm:mt-2 md:mt-2 lg:mt-20 h-screen md:h-screen">
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg md:text-xl">Get in touch with us</p>
          </div>
        </div>
      </div>

      
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Detail 1: Phone */}
          <div className="bg-white transition duration-300 ease-in-out transform hover:scale-105 shadow-none rounded-lg p-6 flex flex-col items-center">
            <FaPhoneAlt className="text-4xl text-blue-700 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <p className="text-gray-700">+123 456 7890</p>
          </div>

          <div className="bg-white transition duration-300 ease-in-out transform hover:scale-105 shadow-none rounded-lg p-6 flex flex-col items-center">
            <FaEnvelope className="text-4xl text-blue-700 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-gray-700">contact@ngo.org</p>
          </div>

          <div className="bg-white transition duration-300 ease-in-out transform hover:scale-105 shadow-none rounded-lg p-6 flex flex-col items-center">
            <FaMapMarkerAlt className="text-4xl text-blue-700 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Address</h3>
            <p className="text-gray-700">123 NGO Street, City, Country</p>
          </div>
          <div className="bg-white transition duration-300 ease-in-out transform hover:scale-105 shadow-none rounded-lg p-6 flex flex-col items-center">
            <FaInstagram className="text-4xl text-blue-700 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Address</h3>
            <p className="text-gray-700">123 NGO Street, City, Country</p>
          </div>
          <div className="bg-white transition duration-300 ease-in-out transform hover:scale-105 shadow-none rounded-lg p-6 flex flex-col items-center">
            <FaTwitter className="text-4xl text-blue-700 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Address</h3>
            <p className="text-gray-700">123 NGO Street, City, Country</p>
          </div>
          <div className="bg-white transition duration-300 ease-in-out transform hover:scale-105 shadow-none rounded-lg p-6 flex flex-col items-center">
            <FaFacebook className="text-4xl text-blue-700 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Address</h3>
            <p className="text-gray-700">123 NGO Street, City, Country</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;