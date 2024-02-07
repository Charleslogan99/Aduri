import Mission from "./Mission";
import GoogleTranslator from "./Translator";
import image from '../assets/Image2.jpg'
const links = [
  { name: "About Us", href: "" },
  { name: "Our Major Causes", href: "" },
  { name: "Our Values", href: "" },
  { name: "Meet Our Leadership", href: "" },
];

export default function About() {
  return (
    <>
      <GoogleTranslator />
      <div className="relative isolate h-full lg:h-screen overflow-hidden bg-gray-900 py-24 sm:py-32">
        {/* Background Image */}
        <img
          // src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
         src={image}
          alt=""
          className="absolute inset-0 -z-10 opacity-60   h-full w-full object-cover object-right md:object-center"
        />
        {/* Abstract Shapes */}
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        {/* Main Content */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-5xl  font-bold tracking-tight text-blue-200 sm:text-6xl">
              ABOUT US
            </h2>
          </div>
          {/* Links */}
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="pointer-events-none text-gray-200 text-xl"
                >
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
            {/* Additional Content Goes Here */}
          </div>
        </div>
      </div>
      {/* About Section */}
      <div className="container mx-auto px-4 py-16 h-full">
        <div className="max-w-3xl mx-auto">
          {/* About Us */}
          <h2 className="text-4xl text-blue-700 font-semibold mb-4">
            About Us
          </h2>
          <p className="text-lg mb-16">
            The Aduri El-shaddai Foundation is a compassionate non-profit
            organization dedicated to empowering women and children across
            communities. We stand firm on the pillars of compassion,
            empowerment, and social justice, aiming to be a guiding light for
            those encountering economic, social, and emotional hurdles.
          </p>
          {/* Mission */}
          <h2 className="text-4xl text-blue-700 font-semibold mb-4">
            Our Mission
          </h2>
          <p className="text-lg mb-16">
            Our mission at the Aduri El-shaddai Foundation is to provide
            steadfast support, resources, and opportunities for women and
            children to reconstruct their lives with dignity and resilience. We
            aspire to cultivate an environment where each individual can
            flourish, reclaim their autonomy, and contribute positively to
            society.
          </p>
          {/* Vision */}
          <h2 className="text-4xl text-blue-700 font-semibold mb-4">
            Our Vision
          </h2>
          <p className="text-lg mb-16">
            Our vision is to sculpt a world where women and children are not
            merely supported but celebrated for their fortitude and resilience.
            We envision a society where everyone has access to education,
            economic independence, healthcare, and social support systems,
            enabling them to lead fulfilling lives and become catalysts for
            change in their communities.
          </p>
          {/* Programs */}
          <h2 className="text-4xl text-blue-700 font-semibold mb-4">
            Our Programs
          </h2>
          <ol>
            <li className="text-lg mb-4">
              Financial Assistance: We offer financial aid to women and children
              to address their basic needs, including housing, nutrition, and
              medical expenses.
            </li>
            <li className="text-lg mb-4">
              Education and Skill Development: We provide scholarships,
              educational programs, and vocational training to equip women and
              children with essential skills for success.
            </li>
            <li className="text-lg mb-4">
              Healthcare Services: We advocate for the health and well-being of
              women and children through access to healthcare services, medical
              camps, and health education initiatives.
            </li>
            <li className="text-lg mb-16">
              Advocacy and Awareness: We champion the rights and equality of
              women and children, raising awareness on issues such as gender
              parity, child rights, and the eradication of violence against
              women.
            </li>
          </ol>
          {/* Join Us */}
          <h2 className="text-4xl text-blue-700 font-semibold mb-4">
            Join Us in Making a Difference
          </h2>
          <p className="text-lg mb-16">
            At the Aduri El-shaddai Foundation, we invite you to stand with us
            in making a meaningful impact in the lives of women and children.
            Together, we can forge a more inclusive and compassionate society
            where every individual has the opportunity to thrive with dignity.
            Join our cause, support our initiatives, and together, let's
            transform lives for the better.
          </p>
          {/* Core Values */}
        </div>
        <Mission />

        <div className="container mx-auto px-4 py-16 h-full">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl text-blue-700 font-semibold mb-4">
              Our Core Values
            </h2>
            <ol>
              <li className="text-lg mb-4">
                Compassion: We approach our endeavors with empathy,
                understanding, and a profound sense of care for those we serve.
              </li>
              <li className="text-lg mb-4">
                Empowerment: We empower individuals by equipping them with the
                tools, resources, and opportunities necessary for their growth
                and self-sufficiency.
              </li>
              <li className="text-lg mb-4">
                Equality: We advocate for equality, striving for fairness and
                inclusivity regardless of gender, age, ethnicity, or
                socio-economic status.
              </li>
              <li className="text-lg mb-4">
                Integrity: We uphold the highest standards of integrity,
                honesty, and transparency in all our actions and relationships.
              </li>
              <li className="text-lg mb-4">
                Collaboration: We believe in the power of collaboration and
                partnerships to amplify our impact and achieve sustainable
                change.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}
