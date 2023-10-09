import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'; // Import your custom CSS file

function Footer() {
  return (

    <footer className="footer-distributed">

      <div className="footer-left">

        <h3>Metro<span>Mall</span></h3>

        <p className="footer-links">
          <a href="www.example.com" className="link-1">Home</a>

          <a href="www.example.com">All Products</a>

          <a href="www.example.com">Offer</a>

          <a href="www.example.com">Discount</a>

          <a href="www.example.com">Free Delivery</a>

          <a href="www.example.com">Contact</a>
        </p>

        <p className="footer-company-name">All Rights Received © 2023</p>
      </div>

      <div className="footer-center">

        <div>
          <i className="fa fa-map-marker"></i>
          <p><span>Hosen Market</span> Uttar Badda, Dhaka Bangladesh</p>
        </div>

        <div>
          <i className="fa fa-phone"></i>
          <p>+880615110890</p>
        </div>

        <div>
          <i className="fa fa-envelope"></i>
          <p><a href="mailto:support@company.com">metromall@company.com</a></p>
        </div>

      </div>

      <div className="footer-right">

        <p className="footer-company-about">
          <span>About the company</span>
          Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
        </p>

        {/* <div className="footer-icons">

          <a href="www.example.com"><i className="fa fa-facebook"></i></a>
          <a href="www.example.com"><i className="fa fa-twitter"></i></a>
          <a href="www.example.com"><i className="fa fa-linkedin"></i></a>
          <a href="www.example.com"><i className="fa fa-github"></i></a>

        </div> */}

      </div>

    </footer>
  );
}

export default Footer;
