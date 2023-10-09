import React from 'react';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Marquee from 'react-fast-marquee';
import logo1 from '../../assets/murqueeTitle/logo-1.jpg'
import logo2 from '../../assets/murqueeTitle/logo-2.jpg'
import logo3 from '../../assets/murqueeTitle/logo-3.jpg'
import logo4 from '../../assets/murqueeTitle/logo-4.jpg'
import logo5 from '../../assets/murqueeTitle/logo-5.jpg'
import logo6 from '../../assets/murqueeTitle/logo-6.jpg'
import Title from '../../components/title/Title';

const MarqueeTtile = () => {

  return (
    <>
      <Title title={"Hot Brands"} />
      <Marquee direction="left">
        <Image className='img-thumbnail' src={logo1} style={{ width: '100%', marginRight: '20px' }} />
        <Image className='img-thumbnail' src={logo2} style={{ width: '100%', marginRight: '20px' }} />
        <Image className='img-thumbnail' src={logo3} style={{ width: '100%', marginRight: '20px' }} />
        <Image className='img-thumbnail' src={logo4} style={{ width: '100%', marginRight: '20px' }} />
        <Image className='img-thumbnail' src={logo5} style={{ width: '100%', marginRight: '20px' }} />
        {/* <Image className='img-thumbnail' src={logo6} style={{ width: '100%', marginRight: '20px' }} /> */}
      </Marquee>
    </>
  );
};

export default MarqueeTtile;
