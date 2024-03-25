import React, { useRef } from 'react';
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';

import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client';


const Cart = () => {
  const cartRef = useRef();
  const { cartItems, setShowCart } = useStateContext();



  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button
          type="button"
          className="cart-heading"
          onClick={() => setShowCart(false)}>
          <AiOutlineLeft />
          <span className="cart-num-items">Back</span>
        </button>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.5685694894223!2d75.91585217988693!3d22.520364582120727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962efcccbce7145%3A0x784e8cb69818596b!2sIndian%20Institute%20of%20Technology%20Indore!5e0!3m2!1sen!2sin!4v1706425558213!5m2!1sen!2sin" width="100%" height="600" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

      </div>
    </div>
  )
}

export default Cart