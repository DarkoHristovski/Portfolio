import { motion } from "framer-motion";
import { useState } from "react";

import cv from "../../../src/Darko_Hristovski.pdf";
import "./header.css";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu((state) => !state);
  };

  const openMenu = menu ? "open-menu" : "";

  const fadInNav = {
    initial: {
      opacity: 0,
      translateY: -50,
      translateX: 0,
    },
    animate: {
      opacity: 1,
      translateY: 0,
      translateX: 0,
    },
  };

  return (
    <header className={`section ${openMenu}`}>
      <div className="container flex header-content">
        <motion.div
          variants={fadInNav}
          initial="initial"
          whileInView="animate"
          transition={{ delay: 0 }}
          viewport={{
            once: true,
          }}
          className="logo"
        >
          <a href="/">Darko</a>
        </motion.div>
        <div className="header-left flex flex-center">
          <nav className="navigation">
            <ul className="flex">
              <motion.li
                variants={fadInNav}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                transition={{ delay: 0 }}
              >
                <a href="#about">About</a>
              </motion.li>
              <motion.li
                variants={fadInNav}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                transition={{ delay: 0.2 }}
              >
                <a href="#projects">Projects</a>
              </motion.li>
              <motion.li
                variants={fadInNav}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                transition={{ delay: 0.4 }}
              >
                <a href="#contact">Contact</a>
              </motion.li>
            </ul>
          </nav>
          <motion.a
            variants={fadInNav}
            initial="initial"
            whileInView="animate"
            transition={{delay: 0.6 }}
            href={cv}
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Resume
          </motion.a>
        </div>
        <button
          onClick={toggleMenu}
          type="button"
          className="menu-btn"
          href="/"
        >
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
