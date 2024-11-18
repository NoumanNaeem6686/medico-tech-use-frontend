import React from 'react'

function Certification() {
    return (
        <>
            <div className=' w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 p-5'>
                <div className='flex flex-col '>

                    <h3 className=' text-2xl xl:text-4xl font-bold' data-aos="fade-right">
                        Our Certifications
                    </h3>
                    <p className='text-sm' data-aos="fade-down">
                        We strictly adhere to compliance and state regulations and our certifications exhibit that well.
                    </p>
                </div>
                <img src="certification-1.png" alt="" className='w-full' />
                <img src="certification-2.png" alt="" className='w-full' />
                <img src="certification-3.png" alt="" className='w-full' />
            </div>

        </>
    )
}

export default Certification