import Nav from '../Layout/Nav'
import Hero from './Hero'
import PopularProducts from './PopularProducts'
import SuperQuality from './SuperQuality'
import Services from './Services'
import SpecialOffer from './SpecialOffer'
import CustomerReviews from './CustomerReviews'
import Subscribe from './Subscribe'
import Footer from './Footer'

const NikeLandingPage = () => {
  return (
    <main className='relative'>
      <Nav />
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero />
      </section>
      <section className='padding'>
        <PopularProducts />
      </section>
      <section className='padding'>
        <SuperQuality />
      </section>
      <section className='padding-x py-10'>
        <Services />
      </section>
      <section className='padding'>
        <SpecialOffer />
      </section>
      <section className='bg-pale-blue padding'>
        <CustomerReviews />
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe />
      </section>
      <section className=' bg-black padding-x padding-t pb-8'>
        <Footer />
      </section>
    </main>
  )
}

export default NikeLandingPage