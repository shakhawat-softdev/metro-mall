import React, { useEffect } from "react";
import "./Details.css"
import ReactImageMagnify from "react-image-magnify";
import useEkshopAllProducts from "../../customHooks/useEkshopAllProducts";
import { useParams } from "react-router-dom";
import { Image } from 'react-bootstrap';
import item6 from '../../assets/newArrivals/img6.jpg';
import item7 from '../../assets/newArrivals/img7.jpg';
import item8 from '../../assets/newArrivals/img8.jpg';
import item9 from '../../assets/newArrivals/img9.jpg';
import './ProductDetails.css';
import { useState } from "react";
import { BsStar, BsStarHalf } from "react-icons/bs";
import Button from 'react-bootstrap/Button';

const Details = () => {
   const baseUrl = "https://ekshop-com-bd-v3.sgp1.vultrobjects.com/";
   const fakeImageUrl = "https://i.ibb.co/Y8dgHhV/img8.jpg";
   const [itemImage, setItemImage] = useState(null);

   const allData = useEkshopAllProducts()
   const { data, productsReview, totalCount } = allData;

   const { id } = useParams();
   const currentProduct = data?.find(product => product._id === id);

   console.log(currentProduct);

   const productImages = currentProduct?.images;
   const mainProductImage = currentProduct?.images[0];



   useEffect(() => {
      window.scrollTo(0, 0)
      const url = `${baseUrl}${mainProductImage}`;
      setItemImage(url)

   }, [mainProductImage]);

   const handleShowingSmallImage = (smallProductImageUrl) => {
      const url = `${baseUrl}${smallProductImageUrl}`;
      setItemImage(url)
   };

   return (
      <div>
         <div className="fluid">
            <div className="fluid__image-container">
               <ReactImageMagnify {...{
                  smallImage: {
                     alt: 'Wristwatch by Ted Baker London',
                     isFluidWidth: true,
                     src: itemImage,

                     sizes: '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px'
                  },
                  largeImage: {
                     src: itemImage,
                     width: 1200,
                     height: 1800
                  },
                  enlargedImageContainerDimensions: {
                     width: '230%',
                     height: '160%'
                  }
               }} />

               <div id="productAnotherImages">
                  {productImages?.map(imageUrl => <div>
                     <Image onClick={() => handleShowingSmallImage(imageUrl)} className="img-fluid responsive-image" src={`${baseUrl}${imageUrl}`} fluid alt="Preview" />
                  </div>)}
               </div>
            </div>

            <div className="fluid__instructions">

               <h3>{currentProduct?.name || "No Product"}</h3>
               <p className="fw-bold">Price: <span className="fw-normal">${currentProduct?.price || "No price Available"}</span></p>
               <span className="d-flex justify-content-start align-items-center gap-1 my-2">
                  <BsStar />
                  <BsStar />
                  <BsStar />
                  <BsStarHalf />
                  <span>& Reviews</span>
               </span>

               <div className="my-3">
                  <p className="my-1">100% Specify dimensions as percentage of small image or number of pixels. </p>
                  <p className="my-1"> May be percentage for one dimension and number for the other. </p>
                  <p className="my-1"> Not applied when enlargedImagePosition is set to 'over', the default for touch input. </p>
                  <p className="my-1"> Please see </p>
               </div>


               <div className="col-8">
                  <div className="d-flex justify-content-between align-items-center my-2">
                     <div>
                        <p className="text-dark fw-bold p-0 m-0" style={{ fontWeight: "bold" }}>Quantity</p>
                     </div>
                     <div>
                        <input type="button" value="-" className="button-minus border rounded-circle  icon-shape icon-sm mx-1 " data-field="quantity" />
                        <input type="number" step="1" max="10" value="1" name="quantity" className="quantity-field border-0 text-center w-25" />
                        <input type="button" value="+" className="button-plus border rounded-circle icon-shape icon-sm " data-field="quantity" />
                     </div>
                  </div>

                  <Button variant="outline-secondary">Add to Cart</Button>
               </div>


            </div>
            {/* <div style={{ height: '500px' }} /> */}
         </div>

         <div className="container similar-products my-4">
            <hr />
            <p className="display-5">Similar Products</p>

            <div className="row">
               <div className="col-md-3">
                  <div className="similar-product">
                     <Image className="img-fluid responsive-image" src={item6} fluid alt="Preview" />
                     <p className="title">Lovely black dress</p>
                     <p className="price">$100</p>
                  </div>
               </div>
               <div className="col-md-3">
                  <div className="similar-product">
                     <Image className="img-fluid responsive-image" src={item7} fluid alt="Preview" />
                     <p className="title">Lovely Dress with patterns</p>
                     <p className="price">$85</p>
                  </div>
               </div>
               <div className="col-md-3">
                  <div className="similar-product">
                     <Image className="img-fluid responsive-image" src={item8} fluid alt="Preview" />
                     <p className="title">Lovely fashion dress</p>
                     <p className="price">$200</p>
                  </div>
               </div>
               <div className="col-md-3">
                  <div className="similar-product">
                     <Image className="img-fluid responsive-image" src={item9} fluid alt="Preview" />
                     <p className="title">Lovely red dress</p>
                     <p className="price">$120</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );

}

export default Details;