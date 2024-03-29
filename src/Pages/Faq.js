import Accordion from '../components/Accordion';
import Footer from '../components/Footer';
import { useSpring, animated } from 'react-spring';
// import Nav from '../components/Header';
import GoogleTranslator from '../components/Translator';
import backgroundImage from '../assets/Herologo3.jpg'; 

const FAQPage = () => {
  const animationProps = useSpring({
    from: { opacity: 0, transform: 'translateY(-50px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { duration: 1000 },
  });
  return (
    <div>
      {/* <Nav /> */}
      <GoogleTranslator />
      {/* Hero Section with Gradient Background */}
      <animated.div
        // className="absolute inset-0 flex flex-col justify-center items-center p-16 text-white"
        style={animationProps}
      >
     
      <div
      className="relative bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }} // Set background image dynamically
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="text-center z-10 text-white">
      <div className="text-center text-white">
            <h1 className="text-4xl text-blue-700 md:text-8xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-2xl">
              Find answers to common questions below.
            </p>
          </div>
      </div>
   </div>
</animated.div>
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 mb-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8">Questions & Answers</h2>
          {/* Accordion Component */}
          <Accordion />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQPage;
// mt-10 sm:mt-14 md:mt-2 lg:mt-20 