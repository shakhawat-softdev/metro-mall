import React, { useEffect, useState } from 'react';
import { Form, Link, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Image } from 'react-bootstrap';
import useNewArrivalsProducts from '../../customHooks/useNewArrivalsProducts';
import exampleImg from '../../assets/newArrivals/img2.jpg';
import './ProductDetails.css';
import item1 from '../../assets/newArrivals/img1.jpg';
import item2 from '../../assets/newArrivals/img2.jpg';
import item3 from '../../assets/newArrivals/img3.jpg';
import item4 from '../../assets/newArrivals/img4.jpg';
import item5 from '../../assets/newArrivals/img5.jpg';
import item6 from '../../assets/newArrivals/img6.jpg';
import item7 from '../../assets/newArrivals/img7.jpg';
import item8 from '../../assets/newArrivals/img8.jpg';
import item9 from '../../assets/newArrivals/img9.jpg';
import item10 from '../../assets/newArrivals/img10.jpg';
import item11 from '../../assets/newArrivals/img11.jpg';
import item12 from '../../assets/newArrivals/img12.jpg';
import { Scrollbars } from 'react-custom-scrollbars';
import ReactImageMagnify from 'react-image-magnify';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Scrollbar, Mousewheel } from 'swiper/modules';


const ProductDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            {/* <div id='parentIMGandDetails' className='my-3'>
                <div id='section1' className='main-imgs'>
                    <div id='mainImg' style={{ width: "50%" }} >
                        <ReactImageMagnify
                            {...{
                                smallImage: {
                                    alt: 'Product',
                                    isFluidWidth: true,
                                    src: item1,
                                },
                                largeImage: {
                                    src: item1,
                                    width: 1000,
                                    height: 1000,
                                },
                                shouldUsePositiveSpaceLens: true,
                            }}
                        />
                    </div>
                </div>

                <div id='productDetails' >
                    <div className="main-description px-2 ">
                        <div className="category text-bold">
                            Category: Regular uses
                        </div>
                        <div className="product-title text-bold">
                            Good Item
                        </div>

                        <div className="price-area my-4">
                            <p className="old-price mb-1"><del>$100</del> <span className="old-price-discount text-danger">(20% off)</span></p>
                            <p className="new-price text-bold mb-1">$80</p>
                            <p className="text-secondary mb-1">(Additional tax may apply on checkout)</p>
                        </div>


                        <div className="buttons d-flex">
                            <div className="block">
                                <Link>
                                    <span href="#" className="shadow btn custom-btn ">Wishlist</span>
                                </Link>
                            </div>
                            <div className="block">
                                <button className="shadow btn custom-btn">Add to cart</button>
                            </div>

                            <div className="block quantity">
                                <input type="number" className="form-control" id="cart_quantity" value="1" min="0" max="5" placeholder="Enter email" name="cart_quantity" />
                            </div>
                        </div>
                    </div>

                    <div className="product-details my-4">
                        <p className="details-title text-color mb-1">Product Details</p>
                        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat excepturi odio recusandae aliquid ad impedit autem commodi earum voluptatem laboriosam? </p>
                    </div>

                    <div className="questions bg-light p-1">
                        <div className="col-md-1 icon">
                            <i className="fa-brands fa-rocketchat questions-icon"></i>
                        </div>
                        <div className="col-md-11 text">
                            Have a question about our products at E-Store? Feel free to contact our representatives via live chat or email.
                        </div>
                    </div>


                </div>

            </div> */}

            <div className="perimeter">
                <div className="image">
                    <ReactImageMagnify
                        {...{
                            smallImage: {
                                alt: "Wristwatch by Ted Baker London",
                                isFluidWidth: true,
                                src: { item9 },
                                // srcSet: this.srcSet, 
                                sizes:
                                    "(min-width: 800px) 33.5vw, (min-width: 415px) 50vw, 100vw"
                            },
                            largeImage: {
                                alt: "",
                                src: { item9 },
                                width: 1200,
                                height: 1800
                            },
                            isHintEnabled: true
                        }}
                    />
                </div>
                <div className="copy">
                    <h3>Touch</h3>
                    <p className="App-intro">
                        Press (long touch) image to magnify. Pan (drag) to traverse image.
                    </p>
                    <p className="App-intro">
                        Note the page can be scrolled when touch begins on image.
                    </p>
                    <h3>Mouse</h3>
                    <p>Hover image to magnify</p>
                </div>
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
        </>

    )
}

export default ProductDetails;