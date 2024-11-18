import React from 'react';

function OurServices() {
    const services = [
        {
            title: 'Consultation and Advisory Services',
            description: 'Get beneficial consultation and advisory services from our consultancy experts.',
            cta: 'Book your Free Consultation',
            icon: (
                <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5Z"
                        stroke="#4F46E5"
                        strokeWidth="2"
                    />
                    <path
                        d="M15 10V15M15 20H15.01"
                        stroke="#4F46E5"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
        },
        {
            title: 'Training and Development',
            description: 'Enhance your skills with our comprehensive training programs.',
            cta: 'Join Now',
            icon: (
                <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M15 3L3 11V19H11V11H19V19H27V11L15 3Z"
                        stroke="#4F46E5"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
        },
        {
            title: 'Outsourcing Services',
            description: 'Reduce costs and scale effortlessly with MTS’s expert outsourcing solutions tailored for healthcare.',
            cta: 'Connect Us Now',
            icon: (
                <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M15 25C18.866 25 22 21.866 22 18C22 14.134 18.866 11 15 11C11.134 11 8 14.134 8 18C8 21.866 11.134 25 15 25Z"
                        stroke="#4F46E5"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M15 5V11"
                        stroke="#4F46E5"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
        },
        {
            title: 'Strategic Business Development',
            description: 'Drive sustainable growth with expert business development consulting.',
            cta: 'Elevate Your Business',
            icon: (
                <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M3 27L27 27M3 3L15 15M15 15L27 3"
                        stroke="#4F46E5"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
        },
    ];

    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10 lg:mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 leading-[3.25rem]">
                        Discover Our Services
                    </h2>
                    <p className="text-lg text-gray-500 mt-4">
                        Explore our professional solutions designed to elevate your healthcare practice.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative w-full bg-gray-100 rounded-2xl p-6 transition-all duration-500 max-w-md mx-auto lg:w-1/4 hover:bg-indigo-600"
                        >
                            <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14">
                                {service.icon}
                            </div>
                            <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">
                                {service.title}
                            </h4>
                            <p className="text-sm font-normal text-gray-500 leading-5 mb-6 transition-all duration-500 group-hover:text-white">
                                {service.description}
                            </p>
                            <a
                                href="#"
                                className="text-base font-semibold text-indigo-600 group-hover:text-white"
                            >
                                {service.cta}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default OurServices;
