import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Title from '../../components/title/Title';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './EkshopItems.css';
import Image from 'react-bootstrap/Image';
import { FiArrowRight } from "react-icons/fi";
import { Link } from 'react-router-dom';
import useEkshopAllProducts from '../../customHooks/useEkshopAllProducts';


const EkshopItems = () => {
   const allData = useEkshopAllProducts()
   const { data, productsReview, totalCount } = allData;
   const [cardImg, setCardImg] = useState(null)

   const baseUrl = "https://ekshop-com-bd-v3.sgp1.vultrobjects.com/";

   return (
      <div className='mt-4'>
         <Title title={"Shop Items"} />

         <div id='productContainer' >
            {data?.slice(0, 8).map(item => (
               <div className="product-card " key={item._id} >
                  <span className="offer-tag">Offer</span>
                  <div className="product-image">

                     {cardImg ? <Image src={`${baseUrl}${cardImg}`} style={{ width: "200px", height: "200px" }} alt={item?.name} /> : <Image src={`${baseUrl}${item?.images[0]}`} style={{ width: "200px", height: "200px" }} alt={item?.name} />}

                  </div>

                  <div className="product-details">
                     <h2 className=''><small>{item.name}</small></h2>
                     <p className='py-0'>description: <small>{"xxxx"}</small></p>
                     <p className='spaceY'>Price: <small>${item?.price}</small></p>
                     {/* <div id='cardRightArrowContainer'>
                        <h2 id='cardRightArrow'><FiArrowRight /></h2>
                     </div> */}
                     <p className='spaceY'>Rating: <small>{item?.product_discount[0]?.priority}</small></p>
                  </div>
                  <Link to={`/productDetails/${item._id}`}>
                     <div id='cardRightArrowContainer'>
                        <h4 id='cardRightArrow'><FiArrowRight /></h4>
                     </div>
                  </Link>
               </div>
            ))}
         </div>

      </div>
   );
};

export default EkshopItems;