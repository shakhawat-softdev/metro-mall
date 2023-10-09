import banner1 from '../../assets/subbanner3/img1.jpg'
import banner2 from '../../assets/subbanner3/img2.jpg';
import './Subbanner3.css'
const Subbanner3 = () => {
   return (
      <div id='subbanner3' className='d-md-flex justify-content-center align-items-center gap-2 my-3' >
         <div >
            <img src={banner1} alt='imag-1' className='img-fluid' style={{ height: "200px" }} />
         </div >
         <div>
            <img src={banner2} alt='imag-1' className='img-fluid' style={{ height: "200px" }} />
         </div>
      </div >
   );
};

export default Subbanner3;