import React, { useState } from 'react'
import './Navbar.scss'
import { images } from '../../constants';
import { easeOut, motion } from 'framer-motion';
import { HiMenuAlt4, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo"/>
      </div>
      <ul className="app__navbar-menu">
        {['Home', 'About', 'Contact', 'Education', 'Skills'].map((item) => (
          <li className="menu-item app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-mobile">
        <HiMenuAlt4 className="navbar-toggle" onClick={() => setToggle(true)}></HiMenuAlt4>
        
        {toggle && (
          <motion.div 
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="motion-div"
          >
            <HiX className="navbar-toggle" onClick={() => setToggle(false)} />

            <ul>
            {['Home', 'About', 'Contact', 'Education', 'Skills'].map((item) => (
              <li key={item}>
                <div />
                <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
              </li>
            ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar