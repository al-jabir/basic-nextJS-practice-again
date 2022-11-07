import React from 'react';
import styled from '../../styles/sass/navbar.module.scss';

const Navbar = () => {
  return (
    <header className={styled.header}>
      <a href='#' className='logo'>
        NextJS
      </a>
      <ul className={styled.menu}>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>about</a>
        </li>
        <li>
          <a href='#'>portfolio</a>
        </li>
        <li>
          <a href='#'>service</a>
        </li>
      </ul>
      <button className={styled.btn}>Contact Us</button>
    </header>
  );
};

export default Navbar;
