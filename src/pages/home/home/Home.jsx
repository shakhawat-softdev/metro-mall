import React, { useEffect } from 'react';
import Slider from '../Slider';
import NewArrivals from '../NewArrivals';
import Review from '../Review';
import Categories from '../Categories';
import Grabslid from '../GrabSlid';
import MarqueeTtile from '../MarqueeTtile';
import PaymentGatway from '../PaymentGatway';
import SubHeroBanner from '../SubHeroBanner';
import ScrollingOffer from '../ScrollingOffer';
import { Container } from 'react-bootstrap';
import "./Home.css"
import Subbanner3 from '../Subbanner3';
import EkshopItems from '../EkshopItems';

const Home = () => {
   useEffect(() => {
      window.scrollTo(0, 0)
   }, [])

   return (
      <>
         <Slider />
         <section className='mt-3'>
            <SubHeroBanner />
         </section>
         <section id='shopItems' className='mt-5'>
            <EkshopItems />
         </section>
         <section className='mt-5'>
            <Subbanner3 />
         </section>
         <section className='mt-5'>
            <Categories />
         </section>
         <section className='mt-5'>
            <Grabslid />
         </section>
         <section className='mt-5'>
            <NewArrivals />
         </section>
         <section className='mt-5'>
            <MarqueeTtile />
         </section>
         {/* <PaymentGatway /> */}
      </>
   );
};

export default Home;