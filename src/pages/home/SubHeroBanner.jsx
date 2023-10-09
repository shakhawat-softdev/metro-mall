import banner from '../../assets/subHeroBanner/img2.jpg';
import './SubHeroBanner.css'


const SubHeroBanner = () => {
   return (
      <div id='subbannerContainer' className='w-100 mx-auto my-3'>
         <img className="w-100 mx-auto" src={banner} alt='imag-1' />
      </div>
   );
};

export default SubHeroBanner;