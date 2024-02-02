// import Nav from "./Header";
import GoogleTranslator from '../components/Translator'
const About = () => {
  return (
    <div>
{/* <div className="p-1 inset-x-0 top-0 bg-white shadow-xl fixed z-50"> */}
{/* <Nav /> */}
<GoogleTranslator />
{/* </div> */}
      {/* Hero Section with Gradient Background */}
      <div className="relative mt-24  md:mt-2 lg:mt-20 bg-gradient-to-r from-blue-700 to-white bg-cover bg-center h-96 md:h-screen">
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Organization</h1>
            <p className="text-lg md:text-xl">Learn more about our mission, vision, and values.</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
          <p className="text-lg mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at accumsan ligula, in vestibulum nisl. Donec quis augue quis libero tincidunt fermentum ut eget urna. Sed eleifend tellus sit amet odio tincidunt, a vestibulum nisl fermentum. Proin hendrerit est id diam condimentum consectetur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur gravida lectus quam, eu dapibus velit ultrices eu.
          </p>
          {/* Add more content */}
        </div>
      </div>
    </div>
  );
};

export default About;
