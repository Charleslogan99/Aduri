const people = [
  {
    name: '(Mrs.) Rosemary Chike',
    role: 'Founder / Chairman',

    description:
    'She is an ordained minister of God in the Redeemed Christian church of God and a provincial Cordinator for counseling and follow-up in Abuja. She worked as a resource person (Volunteer) for UNICEF. She was also the project lead for a Non- Governmental organization by name CENFET in Abuja. She is the Founder / Chairman of Enouri Jehovah Jireh foundation for Widows and Aduri El Shaddai foundation for women and children. Educational Qualifications: MA Theology- Redeemed Christian Bible College. PGD Theology-Redeemed Christian Bible College. BSc Marketing  - Abia state university WASC - Girls Secondary School, Okigwe First School leaving certificate - Ohabuike primary school,  Afikpo.',
    
      imageUrl: require('../assets/Rosemary.JPG'),
  },

  {
    name: '(Barr.) Mirian Okoro',
    role: 'Executive Director',
    description:
      'She is a Lawyer, Writer and Human Rights Activist with several years of experience in the Nonprofit sector. She graduated from Madonna University, Okija, Nigeria in the year 2014, where she obtained her Bachelors Degree in Law with a Second Class Honors (Upper Division). Afterwards, She enrolled for the nine-month professional training at the Nigerian Law School, and after satisfying all the requirements of the Council of Legal Education, she was called to the Nigerian Bar in the year 2015. Since then, she has been actively involved in the Nigerian Civil Society in the area of Women and Children Advocacy, as well as Youth Rehabilitation through Agriculture. She is the Executive Director(Legal) of Enouri Jehovah Jireh Foundation for Widows and Aduri El Shaddai Foundation for women and children',
    imageUrl:
require('../assets/Mimi.jpg') 
    },

  {
    name: '(Dr.) Babasola Olukoya',
    role: 'Director',
    
    description:
    'He is a senior Pastor in charge of a province in the Redeemed Christian Church of God. He is also a special protocol officer to the General Overseer of the Redeemed Christian Church of God and his wife - Pastor and Pastor Mrs Enoch Adeboye. He is a Director  in Triple A micro finance Bank, Abuja and Chairman of CB construction company, an engineering outfit. He is the project lead in a Non-Governmental organization- Habitation of Hope, Abuja. He is also the Director of projects for Enouri Jehovah Jireh foundation for Widows and Aduri El Shaddai foundation for women and children. Educational Qualifications: Honorary Doctorate degree - ISGG University MBA Leadership- Faith lead  University, Florida MA Theology- Redeemed Christian Bible College BSc Quantity Surveying- Obafemi Awolowo University. WASC New state Secondary school Ladi lak primary School,Lagos.',  
      imageUrl: require('../assets/Person2.JPG'),
  },

  {
    name: '(Lady.) Agbasi Ifeoma O',
    role: 'Director',
    description: 'She is a minister of God & She is the Director / CEO of New Era Secondary School, Nnewi,She is a Director of operations and Administration in Enouri Jehovah Jireh Foundation for widows & Aduri El-Shaddai Foundation for women and children  Educational Qualification: Nnewi Girls Secondary school (WAEC) Institute of Management and Technology, Enugu State OND(Business administration) University of PortHarcourt, Rivers State. BSc...Sociology Nnamdi Azikiwe University... MSc Criminology.',
    imageUrl: require('../assets/Person3.JPG'),
  },

  {
    name: '(Dr.) Agbasi Chukwudum',
    role: 'Director',
    description:
    'He is a Medical Doctor, He is the Director of finance for Enouri Jehovah Jireh Foundation for widows & Aduri El-Shaddai Foundation for women & children, Educational Qualification:  New Era  Model Secondary School, Uruagu, Nnewi, Anambra State... WASSCE University of Nigeria, Nsukka, Enugu State (MBBS).',
    imageUrl: require('../assets/Person4.JPG'),
  },
]

export default function Team() {
  return (
    <div className='bg-white py-24 sm:py-32'>
      <h2 className='text-3xl grid px-6 lg:text-center font-bold tracking-tight text-blue-700 sm:text-4xl'>
            Meet our leadership
          </h2>
          <p className='container mx-auto grid px-6 mt-6 text-lg  leading-8 text-gray-600'>
            At the heart of our organization dedicated to women & children, our esteemed
            leaders embody the values and aspirations we hold dear. With a
            wealth of experience and a profound commitment to serving others,
            our leadership team sets the standard for excellence and compassion
            in all our endeavors.
          </p>
      <div className='mx-auto grid max-w-7xl gap-x-8 gap-y-20 mt-16 px-6 lg:px-8 xl:grid-cols-2'>
        {/* <div className='max-w-2xl'>
          
         
        </div> */}
        <ul className='grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2'>
          {people.map((person) => (
            <li key={person.name}>
              <div className='flex items-center gap-x-6'>
                <div className='flex-none h-24 w-24 rounded-full'>
                  <img
                    className='h-full w-full rounded-full object-cover'
                    src={person.imageUrl}
                    alt=''
                  />
                </div>
                <div>
                  <h3 className='text-base font-semibold leading-7 tracking-tight text-gray-900'>
                    {person.name}
                  </h3>
                  <p className='text-md font-semibold leading-6 text-blue-600'>
                    {person.role}
                  </p>
                  <p className='text-xs font-semibold leading-6 text-gray-600'>
                    {person.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}