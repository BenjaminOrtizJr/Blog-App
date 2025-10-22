import React from 'react';
import { MdLightMode } from "react-icons/md";
import { BsToggle2Off } from "react-icons/bs";

const Header = () => {
  return (
    <header>
      <h2>My Blog</h2>
      <nav aria-label="Main navigation">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <MdLightMode />
      <BsToggle2Off />
    </header>
  );
};

export default Header;