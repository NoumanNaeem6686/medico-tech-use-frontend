import React from 'react'
import MainServicesPage from '../Components/pageSections/Services/MainServicesPage'
import { redirect } from 'next/navigation'

const page = () => {
  redirect("/")
  return (
    <div>
      {/* <MainServicesPage/> */}
    </div>
  )
}

export default page
