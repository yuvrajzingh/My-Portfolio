import React from 'react';
//images
import logo from '../assets/logo.svg';
import { Link } from 'react-scroll';

const Header = () => {
  return <header className=" py-8">

      <div className="container mx-auto ">
        <div className='flex justify-between items-center'>
          {/* logo */}
          <a href="#" className='text-gradient btn-link text-[40px]'>YUZI</a>
          {/* button */}
          <Link to='contact' activeClass='active' smooth={true}><button className='btn btn-lg'>Work with Me</button></Link>


        </div>
      </div>

  </header>
};

export default Header;
