import React from 'react';
import { FaChild, FaHeart, FaBookReader,  FaFemale, FaRegHeart, FaGraduationCap, FaUserNurse, FaHandHoldingHeart, FaBuilding, FaBalanceScale, FaFistRaised } from 'react-icons/fa';

const Mission = () => {
  return (
    <div className="container mx-auto pb-16 mb-16 px-4 py-8">
      <div className='p-8'>
        <h1 className='font-semibold text-4xl sm:text-4xl md:text-4xl lg:text-6xl mb-4 text-blue-700 text-center'>Our Major Causes</h1>
        {/* <p className='text-sm pt-4 text-black'>Our organization is committed to addressing the diverse needs of women and children worldwide. Through our initiatives, we strive to create a safe, nurturing, and empowering environment where every woman and child can thrive and reach their full potential.</p> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {/* Card 1: Child Welfare */}
        <div className="bg-white shadow-sm rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
          <FaChild className="w-full h-40 text-blue-700 p-16" />
          <div className="p-4">
            <h3 className="text-3xl text-center text-blue-700 font-satoshi mb-2">Child Welfare</h3>
            <p className="text-gray-800">We prioritize the well-being and protection of children by providing essential services, support, and advocacy. Our goal is to create a nurturing and safe environment where children can grow, learn, and thrive.</p>
          </div>
        </div>

        {/* Card 2: Maternal Health */}
        <div className="bg-white shadow-sm rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
          <FaHeart className="w-full h-40 text-blue-700 p-16" />
          <div className="p-4">
            <h3 className="text-3xl text-center  text-blue-700 font-satoshi mb-4">Maternal Health</h3>
            <p className="text-gray-800 text-center">We support maternal health initiatives to ensure safe pregnancies and childbirth experiences for women. Our programs focus on providing access to prenatal care, medical assistance, and maternal education.</p>
          </div>
        </div>

        {/* Card 3: Education for Girls */}
        <div className="bg-white shadow-sm rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
          <FaBookReader className="w-full h-40 text-blue-700 p-16" />
          <div className="p-4">
            <h3 className="text-3xl text-center  text-blue-700 font-satoshi mb-4">Education for Girls</h3>
            <p className="text-gray-800 text-center">We advocate for girls' education to empower them with knowledge, skills, and opportunities for a brighter future. Our programs promote gender equality in education and provide resources for girls to pursue their academic aspirations.</p>
          </div>
        </div>

        {/* Card 4: Empowering Women */}
        <div className="bg-white shadow-sm rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
          <FaFemale className="w-full h-40 text-blue-700 p-16" />
          <div className="p-4">
            <h3 className="text-3xl text-center  text-blue-700 font-satoshi mb-4">Empowering Women</h3>
            <p className="text-gray-800 text-center">We empower women to achieve economic independence, leadership roles, and self-sufficiency. Through skills training, mentorship programs, and advocacy, we strive to break down barriers and create opportunities for women to thrive.</p>
          </div>
        </div>

        {/* Card 5: Support for Survivors */}
        <div className="bg-white shadow-sm rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
          <FaRegHeart className="w-full h-40 text-blue-700 p-16" />
          <div className="p-4">
            <h3 className="text-3xl text-center  text-blue-700 font-satoshi mb-4">Support for Survivors</h3>
            <p className="text-gray-800 text-center">We provide comprehensive support services to survivors of violence, trauma, and exploitation. Our programs offer counseling, legal aid, and shelter to help survivors rebuild their lives and find healing and empowerment.</p>
          </div>
        </div>

        {/* Card 6: Education Access */}
        <div className="bg-white shadow-sm rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
          <FaGraduationCap className="w-full h-40 text-blue-700 p-16" />
          <div className="p-4">
            <h3 className="text-3xl text-center  text-blue-700 font-satoshi mb-4">Education Access</h3>
            <p className="text-gray-800 text-center">We strive to ensure equitable access to quality education for all children, regardless of gender, socio-economic status, or geographic location. Our programs focus on eliminating barriers to education and providing resources for academic success.</p>
          </div>
        </div>

        {/* Card 7: Healthcare Access */}
        <div className="bg-white shadow-sm rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
          <FaUserNurse className="w-full h-40 text-blue-700 p-16" />
          <div className="p-4">
            <h3 className="text-3xl text-center  text-blue-700 font-satoshi mb-4">Healthcare Access</h3>
            <p className="text-gray-800 text-center">We work to ensure access to essential healthcare services for women and children, including prenatal care, vaccinations, and preventive screenings. Our programs aim to improve health outcomes and reduce disparities in healthcare access.</p>
          </div>
        </div>

        {/* Card 8: Emotional Support */}
        <div className="bg-white shadow-sm rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
          <FaHandHoldingHeart className="w-full h-40 text-blue-700 p-16" />
          <div className="p-4">
            <h3 className="text-3xl text-center  text-blue-700 font-satoshi mb-4">Emotional Support</h3>
            <p className="text-gray-800 text-center">We provide emotional support and counseling services to women and children facing adversity, trauma, and mental health challenges. Our programs offer a safe and nurturing space for individuals to express themselves and heal from emotional wounds.</p>
          </div>
        </div>

        {/* Card 9: Safe Shelter */}
        <div className="bg-white shadow-sm rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
          <FaBuilding className="w-full h-40 text-blue-700 p-16" />
          <div className="p-4">
            <h3 className="text-3xl text-center  text-blue-700 font-satoshi mb-4">Safe Shelter</h3>
            <p className="text-gray-800 text-center">We provide safe and supportive shelter for women and children experiencing homelessness, domestic violence, or displacement. Our shelters offer refuge, resources, and empowerment for individuals to rebuild their lives and pursue brighter futures.</p>
          </div>
        </div>

        {/* Card 10: Legal Assistance */}
        <div className="bg-white shadow-sm rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
          <FaBalanceScale className="w-full h-40 text-blue-700 p-16" />
          <div className="p-4">
            <h3 className="text-3xl text-center  text-blue-700 font-satoshi mb-4">Legal Assistance</h3>
            <p className="text-gray-800 text-center">We offer legal assistance and advocacy services to women and children facing legal challenges, discrimination, and human rights violations. Our programs work to uphold justice, protect rights, and empower individuals to seek legal recourse and access to justice.</p>
          </div>
        </div>

        {/* Card 11: Community Empowerment */}
        <div className="bg-white shadow-sm rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
          <FaFistRaised className="w-full h-40 text-blue-700 p-16" />
          <div className="p-4">
            <h3 className="text-3xl text-center  text-blue-700 font-satoshi mb-4">Community Empowerment</h3>
            <p className="text-gray-800 text-center">We empower communities to address systemic challenges, promote social justice, and advocate for change. Our programs engage community members, leaders, and stakeholders in collaborative efforts to create inclusive and equitable societies.</p>
          </div>
        </div>

        {/* Card 12: Advocacy and Policy Change */}
        <div className="bg-white shadow-sm rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
          <FaBuilding className="w-full h-40 text-blue-700 p-16" />
          <div className="p-4">
            <h3 className="text-3xl text-center  text-blue-700 font-satoshi mb-4">Advocacy and Policy Change</h3>
            <p className="text-gray-800 text-center">We advocate for policy changes and legislative reforms that advance the rights, well-being, and opportunities of women and children. Our advocacy efforts aim to shape laws, policies, and systems to create a more just and equitable society for all.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
