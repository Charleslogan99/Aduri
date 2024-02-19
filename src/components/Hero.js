// import React from 'react';
// import backgroundImage from '../assets/Image1.jpg'; 

// const Hero = () => {
//   return (
//     <div
//       className="relative  bg-cover bg-center h-screen flex items-center justify-center"
//       style={{ backgroundImage: `url(${backgroundImage})` }} // Set background image dynamically
//     >
//       <div className="absolute inset-0 bg-black opacity-70"></div>
//       <div className="text-center z-10 text-white">
//         <h1 className="text-4xl text-blue-50 md:text-6xl lg:text-8xl font-bold mb-8">
//           Help The Women
//         </h1>
//         <h1 className="text-4xl text-blue-600 md:text-6xl lg:text-7xl font-bold mb-4">
//           And
//         </h1>
//         <h1 className="text-4xl text-blue-50 md:text-6xl lg:text-8xl  font-bold mb-4">
//           Save The Children
//         </h1>
//       </div>
//     </div>
//   );
// };

// export default Hero;
// // sm:mt-10 md:mt-10 xl:mt-28


import React from 'react';
import { useSpring, animated } from 'react-spring';

const Hero = () => {
  // Define animation properties using useSpring
  const animationProps = useSpring({
    from: { opacity: 0, transform: 'translateY(-50px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { duration: 1000 },
  });

  return (
    <div className="relative h-screen">
      {/* SVG Background */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <rect width="100" height="100" fill="url(#gradient)" />
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor="#1E3A8A" />
            <stop offset="100%" stopColor="#4299E1" />
          </linearGradient>
        </defs>
      </svg>

      {/* Content with Animation */}
      <animated.div
        className="absolute inset-0 flex flex-col justify-center items-center text-white"
        style={animationProps}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="text-center z-10 text-white">
          <h1 className="text-4xl text-blue-50 md:text-6xl lg:text-8xl font-bold mb-8">Help The Women</h1>
          <h1 className="text-4xl text-blue-600 md:text-6xl lg:text-7xl font-bold mb-4">And</h1>
          <h1 className="text-4xl text-blue-50 md:text-6xl lg:text-8xl font-bold mb-4">Save The Children</h1>
        </div>
      </animated.div>
    </div>
  );
};

export default Hero;
