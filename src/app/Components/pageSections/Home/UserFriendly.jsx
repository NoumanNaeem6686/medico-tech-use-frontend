import React from 'react'

function UserFriendly() {
    const allProducts = [
        {
            title: "MEDICAL BILLING AND CODING",
            description: ": Expert coding for accurate claims and reduced denials."
        },
        {
            title: "REVENUE CYCLE MANAGEMENT (RCM)",
            description: "Optimize your revenue cycle with data-driven solutions that maximize efficiency and minimize losses."
        },
        {
            title: "IT CONSULTING",
            description: "Boost efficiency with our tailored MedicoTech IT solutions."
        },
        {
            title: "DIGITAL HEALTH SOLUTIONS",
            description: "Enhance patient care through innovative digital health solutions."
        },

    ]
    return (
        <>

            <h1 className='font-bold text-3xl lg:text-5xl text-center'>
                User-friendly and Specialty-Focused Products
            </h1>
            <p className='text-xs lg:text-base text-center'>
                Transcure offers purpose-built healthcare IT products to meet the needs of healthcare practices.
            </p>
        </>

    )
}

export default UserFriendly