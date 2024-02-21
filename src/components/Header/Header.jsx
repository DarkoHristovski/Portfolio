import { useState } from "react";

import cv from '../../../public/Darko_Hristovski.pdf'
import "./header.css";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu((state) => !state);
  };
  const openMenu = menu ? "open-menu" : "";

  console.log(menu);

  return (
    <header className={`section ${openMenu}`}>
      <div className="container flex header-content">
        <div className="logo">
          <a href="/">Darko</a>
        </div>
        <div className="header-left flex flex-center">
          <nav className="navigation">
            <ul className="flex">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
           <a href={cv} target="_blank" rel="noreferrer" className='btn'>Resume</a>
        </div>
        <button onClick={toggleMenu} type="button" className="menu-btn" href="/">
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
