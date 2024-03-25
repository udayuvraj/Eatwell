import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'
import { BiMap } from "react-icons/bi";

import { Cart } from './';
import { useStateContext } from '../context/StateContext';

const Navbar = () => {

  return (
    <div className="navbar-container">
      <p className="logo">
        <img src="/favicon.ico" alt="eatwell" width="32" height="32" />
        <Link href="/">EAT WELL</Link>
      </p>
      <p className="logo cursor-change">
        <Link href={`/map`}>
          <div>
            Our Locations
            <BiMap />
          </div>
        </Link>
      </p>

    </div>
  )
}

export default Navbar