"use client";

const GrowthNumbers = () => {
    const stats = [
        {
            value: "500+",
            title: "Healthcare Practices Supported",
            description:
                "We have empowered over 500 healthcare organizations to improve efficiency and patient outcomes.",
        },
        {
            value: "$55M",
            title: "Revenue Saved for Clients",
            description:
                "Our tailored solutions have helped healthcare providers save millions in operational costs and maximize reimbursements.",
        },
        {
            value: "89+",
            title: "Projects in Progress",
            description:
                "We are actively managing 89+ ongoing projects to streamline operations and deliver measurable results.",
        },
        {
            value: "175+",
            title: "Experts on Our Team",
            description:
                "Our team of 175+ skilled professionals ensures the highest quality in consulting, training, and outsourcing services.",
        },
    ];


    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-6 flex flex-col lg:flex-row">
                <div className="text-start mb-12 w-full lg:w-[45%] md:px-6">
                    <h2
                        data-aos="fade-right"
                        className="text-5xl text-secondaryColor font-bold mb-4 text-start">

                        Our Growth
                        in Numbers
                    </h2>
                    <p
                        data-aos="fade-up"
                        className="text-gray-600 text-start">
                        Our journey in healthcare and consulting is reflected in our achievements.
                        From empowering healthcare organizations with innovative solutions to
                        delivering measurable results, our numbers showcase our commitment to excellence.
                    </p>
                    <p className="text-gray-600 mt-4 text-start">
                        We have helped streamline operations, improve patient care, and drive
                        revenue growth for countless practices worldwide. With each project,
                        we aim to exceed expectations and set new benchmarks for success in the healthcare industry.
                    </p>

                    <button className="mt-8 px-8  py-3 text-lg bg-primaryColor text-white rounded-2xl ">
                        JOIN NOW
                    </button>
                </div>

                <div className="w-full lg:w-6/12 grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            data-aos="flip-left"
                            className="w-full h-full p-3.5 hover:scale-[1.05] hover:bg-slate-100 cursor-pointer rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex"

                        >
                            <h3 className="text-4xl font-bold text-secondaryColor mb-2">
                                {stat.value}
                            </h3>
                            <h4 className="text-xl font-semibold mb-2">{stat.title}</h4>
                            <p className="text-gray-600">{stat.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GrowthNumbers;
