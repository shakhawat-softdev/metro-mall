import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Title from '../../components/title/Title';
import useNewArrivalsProducts from '../../customHooks/useNewArrivalsProducts';
import ScrollingOffer from './ScrollingOffer';
import { Flip } from 'react-reveal';
import './NewArrivals.css'
import { useEffect } from 'react';

const NewArrivals = () => {
   const newArrivalsProducts = useNewArrivalsProducts();


   return (
      <>
         <Title title={"New Arrivals"} />

         <div className='mx-auto mt-3'>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 gy-3 mx-md-2">
               {newArrivalsProducts?.slice(0, 8).map(product => (
                  <div key={product.id} className="col mb-4">
                     <Flip bottom>
                        <Card id='newArrivalCard' style={{ width: '100%' }}>
                           <Card.Img id='cardImg' variant="top" src={product?.image} height={200} />
                           <Card.Body>
                              <Card.Title>{product?.title}</Card.Title>
                              <div id='cardDescription'>
                                 <Card.Text>
                                    {product.description.split(/\s+/).slice(0, 10).join(' ')} {/* Added space between words */}
                                 </Card.Text>
                              </div>
                              <Link to={`/productDetails/${product.id}`} className='mt-2'>
                                 <Button className='mt-2' variant="success">View Details</Button>
                                 {/* <Button variant="success">Success</Button>{' '} */}
                              </Link>
                           </Card.Body>
                        </Card>
                     </Flip>
                  </div>
               ))}
            </div>
         </div>
      </>
   );
};

export default NewArrivals;