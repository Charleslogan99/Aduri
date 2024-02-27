import Mission from "./Mission";
import { useSpring, animated } from 'react-spring';
import backgroundImage from '../assets/Herologo2.jpg';

const links = [
  { name: "About Us", href: "" },
  { name: "Our Major Causes", href: "" },
  { name: "Our Values", href: "" },
  { name: "Meet Our Leadership", href: "" },
];

export default function About() {
  const animationProps = useSpring({
    from: { opacity: 0, transform: 'translateY(-50px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { duration: 1000 },
  });
  return (
    <>
      {/* <div className="relative isolate h-full lg:h-screen overflow-hidden bg-gray-900 py-24 sm:py-32"> */}

      <animated.div
        // className="absolute inset-0 flex flex-col justify-center items-center p-16 text-white"
        style={animationProps}
      >
        <div
          className="relative bg-cover bg-center h-screen flex items-center justify-center sm:mt-10 md:mt-0 xl:mt-0"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className=" max-w-2xl lg:mx-0">
              <h2 className="text-4xl font-bold tracking-tight text-white md:text-7xl">
                ABOUT US
              </h2>
            </div>
            <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="pointer-events-none text-white text-xl"
                  >
                    {link.name} <span aria-hidden="true">&rarr;</span>
                  </a>
                ))}
              </div>
              <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4"></dl>
            </div>
          </div>
        </div>
      </animated.div>

      {/* </div> */}
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
            those encountering economic, social, and emotional hurdles.Aduri El-Shaddai Foundation
            started off as a Community based organization in the year 2020 with
            several project collaborations with the Non-governmental
            Organization, Star Advocacy for African Women and Children (SAFAWAC)
            It was eventually incorporated into a full-blown Non-governmental
            Organization in the year 2024 to further actualize its goals and
            expand its reach across the Nigerian States.
          </p>
          <h2 className="text-4xl text-blue-700 font-semibold mb-4">
            Our Objectives
          </h2>
          <p className="text-lg mb-16">
            To Advocacy against child abuse and child trafficking, To Promote
            girl child education & training especially in rural communities To
            Promote Empowerment programmes for women and Children, To provide
            ⁠Medical & wellness outreaches for women and children in urban and
            rural communities against Malaria & Cancer (Breast & Cervical
            cancer), To Promote Trainings and Sensitizations for women and
            Children in rural communities, To Promote ⁠Advocacy against
            repugnant customs and inhuman practices against women and children
            and to advocate against discrimination of all kinds, To promote
            Advocacy against gender based violence, female genital mutilation
            and other inhuman practices against women and children, To
            collaborate with other Associations and agencies of government on
            any project that impact positively on life.
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
