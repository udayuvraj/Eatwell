import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { runFireworks } from '../lib/utils';

const Map = () => {

  useEffect(() => {
    runFireworks();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          Visit Us Here
        </p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15217.034149469093!2d78.4927732!3d17.5428734!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb85714bab2f81%3A0x905d77ed06da1138!2sEat%20well!5e0!3m2!1sen!2sin!4v1707393687281!5m2!1sen!2sin" width="100%" height="600" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      </div>
    </div>
  )
}

export default Map