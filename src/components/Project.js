import React from "react";
import backgroundImage from "../assets/Herologo2.jpg";
import Carousel from "./Carousel";
import { useSpring, animated } from 'react-spring';

const images = [
  require("../assets/Children1.JPG"),
  require("../assets/Children2.JPG"),
  require("../assets/Children3.JPG"),
  require("../assets/Children4.JPG"),
  require("../assets/Children5.JPG"),
  require("../assets/Children6.JPG"),
  require("../assets/Children7.JPG"),
  require("../assets/Children8.JPG"),
  require("../assets/Children9.JPG"),
  require("../assets/Children10.JPG"),
  require("../assets/Children11.JPG"),
  require("../assets/Children12.JPG"),
  require("../assets/Children13.JPG"),
  require("../assets/Children14.JPG"),
  require("../assets/Children15.jpg"),
  require("../assets/Children16.jpg"),
  require("../assets/Children17.jpg"),
  // Add more image paths as needed
];
const Project = ({ title, description, details }) => {
  
  return (
    <div className="bg-white mt-24 rounded-lg shadow-md p-8 mb-8 transition duration-300 ease-in-out transform hover:scale-105">
      <h2 className="text-3xl text-blue-700 font-bold mb-4">{title}</h2>
      <p className="text-lg text-gray-700 mb-6">{description}</p>
      <p className="text-base text-gray-600">{details}</p>
    </div>
  );
};

const ProjectsPage = () => {
  const heroSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(-50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 200, friction: 80 }, // Adjust tension and friction as needed
  });
  return (
    <div>
      {/* Hero Section */}
      <animated.div
        // className="bg-gradient-to-br from-purple-700 to-zinc-900 py-12 h-screen px-4 sm:px-6 lg:px-8 flex items-center justify-center"
        style={heroSpring} // Apply the spring animation style
      >
      <div
        className="bg-cover bg-center h-screen flex items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="text-white text-center">
          <h1 className="text-4xl text-blue-700 font-bold lg:text-7xl">
            Our Projects
          </h1>
          <p className="text-lg mt-4 lg:text-lg">
            Explore our initiatives to support women and children in need
          </p>
        </div>
      </div>
</animated.div>
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* <h2 className="text-3xl font-bold text-center mb-8">Our Projects</h2> */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Project
            title="Medical Care"
            description="Our Medical Care project aims to provide women and children with access to quality healthcare services. We organize medical camps, health check-ups, and provide support for treatments, medications, and surgeries, ensuring they receive the care they need to live healthy and fulfilling lives."
            details="We collaborate with healthcare professionals and partner organizations to ensure women and children receive comprehensive medical support."
          />
          <Project
            title="Community Sensitization"
            description="Community Sensitization is a crucial aspect of our work. Through awareness campaigns, workshops, and interactive sessions, we educate communities about the challenges women and children face, promote empathy, challenge stereotypes, and advocate for their rights and dignity."
            details="We conduct regular community outreach programs, engage with local leaders, and leverage media platforms to raise awareness about the issues affecting women and children."
          />
          <Project
            title="Advocacy"
            description="Advocacy is at the heart of our mission. We advocate for policy reforms, legal protections, and social support systems that address the unique needs of women and children. Through lobbying, campaigning, and strategic partnerships, we strive to create a more inclusive and supportive environment for them."
            details="We work closely with government agencies, policymakers, and civil society organizations to push for legislative changes and social reforms that benefit women and children."
          />
        </div>
      </div>
      <Carousel images={images} />
    </div>
  );
};

export default ProjectsPage;
