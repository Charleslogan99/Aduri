import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import logo from '../assets/Image2.jpg'

export default function Section() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              {/* <p className="text-base font-semibold leading-7 text-indigo-600">
                Our Vision
             </p> */}
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-blue-700 sm:text-4xl">
                Our Vision
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                We are nonprofit team and work worldwide Their multiply doesn't
                behold shall appear living heaven second roo lights. Itself hath
                thing for won't herb forth gathered good bear fowl kind give fly
                form winged for reason Land their given the seasons herb lights
                fowl beast whales it after multiply fifth under to it waters
                waters created heaven very fill agenc to. Dry creepeth subdue
                them kind night behold rule stars him grass waters our without
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            // src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            src={logo}
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
               
Certainly! Below is a detailed and comprehensive vision statement for the NGO site:

Our Vision: Empowering Communities for Sustainable Progress
At our NGO, we envision a world where every individual, regardless of their background or circumstances, has the opportunity to lead a fulfilling and dignified life. Our vision is rooted in the belief that sustainable progress is achievable through collective action, empathy, and empowerment.

Creating Equitable Opportunities
We aspire to create equitable opportunities for all members of society, ensuring that marginalized communities have access to the resources, support, and opportunities they need to thrive. By addressing systemic barriers and promoting inclusivity, we strive to build a world where everyone has the chance to reach their full potential.

Fostering Resilient Communities
We are committed to fostering resilient communities that can withstand challenges and adapt to change. Through capacity-building initiatives, disaster preparedness programs, and community-led development projects, we empower individuals and communities to build stronger, more resilient societies.

Promoting Education and Lifelong Learning
Education is the cornerstone of progress and empowerment. We advocate for universal access to quality education and lifelong learning opportunities for people of all ages. By investing in education, we empower individuals to break the cycle of poverty, unlock their potential, and contribute meaningfully to society.

Advancing Health and Well-being
Health is a fundamental human right. We work tirelessly to promote access to healthcare services, improve nutrition, and prevent disease. By addressing health disparities and promoting holistic well-being, we strive to create healthier, happier communities where everyone can thrive.

Protecting the Environment
Environmental sustainability is essential for the well-being of present and future generations. We are dedicated to protecting the environment, conserving natural resources, and mitigating the impact of climate change. Through environmental conservation efforts, sustainable development practices, and community engagement, we aim to preserve our planet for future generations.

Fostering Social Justice and Human Rights
We are unwavering in our commitment to social justice and human rights. We advocate for equality, justice, and dignity for all individuals, regardless of race, gender, ethnicity, religion, or socioeconomic status. By amplifying marginalized voices, challenging systemic injustices, and promoting human rights education, we strive to create a more just and inclusive world for everyone.

Cultivating Empathy and Compassion
At the heart of our vision is a commitment to empathy and compassion. We believe in the power of kindness, empathy, and solidarity to bridge divides and build stronger, more connected communities. By fostering empathy and understanding, we create a world where compassion guides our actions and drives positive change.

In pursuit of our vision, we are guided by our values of integrity, collaboration, transparency, and accountability. Together, we can build a brighter future for all, where every individual has the opportunity to thrive and flourish.

This vision statement reflects the NGO's commitment to holistic development, social justice, environmental sustainability, and the promotion of human rights and dignity. It articulates a bold and aspirational vision for a better world, driven by compassion, empathy, and collective action.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon
                    className="mt-1 h-5 w-5 flex-none text-blue-700"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Our Vision.
                    </strong>{" "}
                    We are nonprofit team and work worldwide Their multiply
                    doesn't behold shall appear living heaven second roo lights.
                    Itself hath thing for won't herb forth gathered good bear
                    fowl kind give fly form winged for reason Land their given
                    the seasons herb lights fowl beast whales it after multiply
                    fifth under to it waters waters created heaven very fill
                    agenc to. Dry creepeth subdue them kind night behold rule
                    stars him grass waters our without
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon
                    className="mt-1 h-5 w-5 flex-none text-blue-700"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Our Vision.
                    </strong>{" "}
                    We are nonprofit team and work worldwide Their multiply
                    doesn't behold shall appear living heaven second roo lights.
                    Itself hath thing for won't herb forth gathered good bear
                    fowl kind give fly form winged for reason Land their given
                    the seasons herb lights fowl beast whales it after multiply
                    fifth under to it waters waters created heaven very fill
                    agenc to. Dry creepeth subdue them kind night behold rule
                    stars him grass waters our without
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    className="mt-1 h-5 w-5 flex-none text-blue-700"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Database backups.
                    </strong>{" "}
                    Ac tincidunt sapien vehicula erat auctor pellentesque
                    rhoncus. Et magna sit morbi lobortis.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                We are nonprofit team and work worldwide Their multiply doesn't
                behold shall appear living heaven second roo lights. Itself hath
                thing for won't herb forth gathered good bear fowl kind give fly
                form winged for reason Land their given the seasons herb lights
                fowl beast whales it after multiply fifth under to it waters
                waters created heaven very fill agenc to. Dry creepeth subdue
                them kind night behold rule stars him grass waters our without
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
               Our Vision
              </h2>
              <p className="mt-6">
                We are nonprofit team and work worldwide Their multiply doesn't
                behold shall appear living heaven second roo lights. Itself hath
                thing for won't herb forth gathered good bear fowl kind give fly
                form winged for reason Land their given the seasons herb lights
                fowl beast whales it after multiply fifth under to it waters
                waters created heaven very fill agenc to. Dry creepeth subdue
                them kind night behold rule stars him grass waters our without
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
