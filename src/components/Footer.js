import React from "react";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"; // Adding icons for Facebook and Twitter
const Footer = () => {
  return (
    <footer className="bg-gray-950 shadow-lg py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div className="text-white">
            <h4 className="text-lg font-semibold mb-4">
              ADURI EL-SHADDAI FOUNDATION
            </h4>
            <p className="text-blue-400 text-sm space-y-2">
              At Aduri El-Shaddai Foundation, we are dedicated to empowering
              women and children, ensuring their rights, and fostering a
              brighter future for generations to come.
            </p>
          </div>

          {/* Column 2 */}
          <div className="text-white xl:ml-20">
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="flex flex-col space-y-2">
              <a href="/" className="text-blue-400 hover:text-gray-200 ">
                Home
              </a>
              <a href="/about" className="text-blue-400 hover:text-gray-200">
                About
              </a>
              <a href="/contact" className="text-blue-400 hover:text-gray-200">
                Contact
              </a>
              <a href="/projects" className="text-blue-400 hover:text-gray-200">
                Projects
              </a>
              <a href="/faq" className="text-blue-400 hover:text-gray-200">
                Faq
              </a>
              {/* Add more programs */}
            </ul>
          </div>

          {/* Column 3 */}
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h4>
            <p className="text-blue-400">
              <MdLocationOn className="inline-block mr-2" /> X14b Patrick
              FLuret, Sunnyvale homes, Abuja
            </p>

            <p className="text-blue-400">
              <MdPhone className="inline-block mr-2" /> +234 803 320 7833
            </p>
            <p className="text-blue-400">
              <MdEmail className="inline-block mr-2" /> adurielshaddai@gmail.com
            </p>
            {/* Add more contact information */}
          </div>

          {/* Column 4 */}
          <div className="text-white xl:ml-20">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <ul className="space-y-2">
              <li className="text-blue-400">
                <FaFacebook className="inline-block mr-2" /> Facebook: Available
                soon
              </li>
              <li className="text-blue-400">
                <FaTwitter className="inline-block mr-2" /> Twitter: Available
                soon
              </li>
              <li className="text-blue-400">
                <FaInstagram className="inline-block mr-2" /> Instagram:
                Available soon
              </li>
              {/* Add more social media links */}
            </ul>
          </div>
        </div>
        <div className="lg:text-center text-white mt-24">
          <p>
            &copy; {new Date().getFullYear()} ADURI-EL-SHADDAI-FOUNDATION. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
