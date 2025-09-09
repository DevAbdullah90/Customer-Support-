import CTA from '@/components/CTA'
import DashboardShowcase from '@/components/DashboardShowcase'
import Features from '@/components/Features'
import Hero from '@/components/Hero'
import SalesAndListings from '@/components/SalesAndListings'
import PageWrapper from '@/components/shared/ui/PageWarpper'
import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const page = () => {
  return (
    // <PageWrapper>
     <div> 
      <Header />
      <Hero />
      <Features />
      <DashboardShowcase />
      <SalesAndListings />
      <CTA />
      <Footer />
          {/* </PageWrapper> */}
     </div> 
  )
}

export default page
