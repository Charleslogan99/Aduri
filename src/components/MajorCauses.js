import React from 'react';
import { FaDonate, FaLightbulb } from 'react-icons/fa';

const MajorCauses = () => {
    return (
        <div className="container mx-auto px-4 py-8 mb-20">
            <h1 className='text-center my-8 text-5xl text-blue-700 font-satoshi mb-10'>Our Major Causes</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Card 1: Give Donation */}
                <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
                    {/* Icon */}
                    <FaDonate className="w-12 h-12 text-blue-700" />
                    {/* Text */}
                    <p className="text-lg font-semibold text-blue-700 mt-4">Provide Lifeline through Donations</p>
                    <p className='text-sm text-center mt-2'>Your generous donations fuel our mission to provide essential resources and support to those in need. Together, we can make a significant difference in the lives of vulnerable communities. Every contribution counts towards creating a brighter future for all.</p>
                </div>

                {/* Card 2: Inspiration */}
                <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
                    {/* Icon */}
                    <FaLightbulb className="w-12 h-12 text-blue-700" />
                    {/* Text */}
                    <p className="text-lg font-semibold text-blue-700 mt-4">Inspiring Change and Empowerment</p>
                    <p className='text-sm text-center mt-2'>We believe in the power of inspiration to drive positive change. Through our initiatives, we aim to ignite hope, creativity, and innovation within communities. Together, let's foster a culture of empowerment and resilience that transcends boundaries and transforms lives.</p>
                </div>
            </div>
        </div>
    );
};

export default MajorCauses;
