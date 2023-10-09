import React from 'react';
import Marquee from 'react-fast-marquee';
import "./ScrollingOffer.css"

const ScrollingOffer = () => {
    return (

        <div className="marquee-container m-3">
            <Marquee gradientColor={['#009688', '#005b5e']} speed={40}>
                <h4 className="marquee-text">
                    <i className="fa fa-star" /> Save Big Today! <i className="fa fa-star" />
                </h4>
                <h4 className="marquee-text">Get Up to 50% Off!</h4>
                <h4 className="marquee-text">Exclusive Discounts Await!</h4>
                <h4 className="marquee-text">Enjoy Extra Savings!</h4>
                <h4 className="marquee-text">Upgrade Your Style for Less!</h4>
                <h4 className="marquee-text">Grab Unbelievable Deals!</h4>
                <h4 className="marquee-text">Buy One, Get One Free: Double the Joy!</h4>
            </Marquee>
        </div>
    );
};

export default ScrollingOffer;  