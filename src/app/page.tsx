import Hero from '@/components/Hero'
import ProductShowcase from '@/components/ProductShowcase'
import Features from '@/components/Features'
import CustomerSupport from '@/components/CustomerSupport'
// import Testimonials from '@/components/Testimonial'
import Pricing from '@/components/Pricing'
import CTA from '@/components/CTA'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LiveChat from '@/components/LiveChat'
import React from 'react'
import TechStack from '@/components/TechStack'

const page = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <ProductShowcase />
      <CustomerSupport />
      <TechStack />
      {/* <Testimonials /> */}
      <Pricing />
      <CTA />
      <Footer />
      <LiveChat />
    </div>
  )
}

export default page
