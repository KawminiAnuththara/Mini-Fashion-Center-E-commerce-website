import React from 'react'
import Hero from '../../../FrontEnd1/src/components/Hero/Hero'
import Popular from '../../../FrontEnd1/src/components/popular/Popular'
import Offers from '../../../FrontEnd1/src/components/offers/Offers'
import Collection from '../../../FrontEnd1/src/components/newcollection/Collection'
import NewsLetter from '../../../FrontEnd1/src/components/newsLetter/NewsLetter'
import About from '../components/About/About'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Popular/>
      <Offers/>
      <Collection/>
      <NewsLetter/>
    </div>
  )
}

export default Shop




