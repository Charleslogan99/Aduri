import React, { useState } from 'react';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqList = [
    { question: 'What is Aduri El-Shaddai Foundation?', answer: 'Aduri El-Shaddai Foundation is a non-profit organization dedicated to empowering women and children, providing them with resources and opportunities for a brighter future.' },
    { question: 'Who can benefit from Aduri El-Shaddai Foundation?', answer: 'Women and children from marginalized communities who are in need of support and assistance can benefit from the services provided by Aduri El-Shaddai Foundation.' },
    { question: 'What services does Aduri El-Shaddai Foundation offer?', answer: 'Aduri El-Shaddai Foundation offers a range of services including financial assistance, education and skill development programs, healthcare services, and advocacy for women and children\'s rights.' },
    { question: 'How can I donate to Aduri El-Shaddai Foundation?', answer: 'You can donate to Aduri El-Shaddai Foundation through our website using various payment methods. We also accept donations through bank transfers and other channels.' },
    { question: 'Is Aduri El-Shaddai Foundation a registered NGO?', answer: 'Yes, Aduri El-Shaddai Foundation is a registered non-governmental organization, recognized for its commitment to women and children empowerment.' },
    { question: 'How can I volunteer with Aduri El-Shaddai Foundation?', answer: 'You can volunteer with Aduri El-Shaddai Foundation by contacting our volunteer coordinator or filling out a volunteer application form available on our website.' },
    { question: 'What are the major causes supported by Aduri El-Shaddai Foundation?', answer: 'Aduri El-Shaddai Foundation supports causes related to women\'s empowerment, child education, healthcare access, and advocacy for women and children\'s rights.' },
    { question: 'How does Aduri El-Shaddai Foundation ensure transparency in its operations?', answer: 'Aduri El-Shaddai Foundation maintains transparency in its operations through regular financial audits, reporting mechanisms, and open communication with stakeholders.' },
    { question: 'Can I sponsor a child through Aduri El-Shaddai Foundation?', answer: 'Yes, Aduri El-Shaddai Foundation offers child sponsorship programs where individuals or organizations can sponsor a child\'s education, healthcare, and other basic needs.' },
    { question: 'Does Aduri El-Shaddai Foundation provide emergency assistance?', answer: 'Yes, Aduri El-Shaddai Foundation provides emergency assistance to women and children in crisis situations, including natural disasters, conflicts, and emergencies.' },
    { question: 'How does Aduri El-Shaddai Foundation measure its impact?', answer: 'Aduri El-Shaddai Foundation measures its impact through various metrics such as the number of beneficiaries served, improvements in quality of life indicators, and success stories from program participants.' },
    { question: 'Does Aduri El-Shaddai Foundation collaborate with other organizations?', answer: 'Yes, Aduri El-Shaddai Foundation collaborates with other NGOs, government agencies, and community-based organizations to maximize its impact and reach more beneficiaries.' },
    { question: 'Can I visit Aduri El-Shaddai Foundation projects?', answer: 'Yes, Aduri El-Shaddai Foundation welcomes visitors to its projects and facilities. Please contact our office to schedule a visit and learn more about our work.' },
    { question: 'How can I stay updated with Aduri El-Shaddai Foundation\'s activities?', answer: 'You can stay updated with Aduri El-Shaddai Foundation\'s activities by subscribing to our newsletter, following us on social media, and visiting our website regularly for news and updates.' },
    { question: 'Is Aduri El-Shaddai Foundation affiliated with any religious or political organization?', answer: 'No, Aduri El-Shaddai Foundation is a secular organization and operates independently of any religious or political affiliations.' },
  ];

  return (
    <div>
      {faqList.map((item, index) => (
        <div key={index} className="border-b border-gray-200 py-8">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold cursor-pointer text-blue-700" onClick={() => handleToggle(index)}>
              {item.question}
            </h3>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 text-blue-700 w-6 transform transition-transform duration-300 ease-in-out" viewBox="0 0 20 20" fill="currentColor" rotate={activeIndex === index ? '180' : '0'} onClick={() => handleToggle(index)}>
              <path fillRule="evenodd" d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
          {activeIndex === index && (
            <p className="text-gray-900 mt-8">{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
