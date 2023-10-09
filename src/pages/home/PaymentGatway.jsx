import React from 'react';
import { Image } from 'react-bootstrap';
import payment from '../../assets/payments/payments.jpg'

const PaymentGatway = () => {
    return (
        <div className='w-auto'>
            <Image src={payment} className="img-fluid" alt="Responsive image"/>
        </div>
    );
};

export default PaymentGatway;