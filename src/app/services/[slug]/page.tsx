import React from 'react'
import ServicesDetail from '../../../components/ServicesDetail'
function page({ params }: any) {
    console.log("🚀 ~ page ~ params:", params)
    const { slug } = params
    return (
        <ServicesDetail slug={slug} />
    )
}

export default page