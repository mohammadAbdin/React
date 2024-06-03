import React, { useState, useRef } from "react";
import logo from "../../assets/logo.svg";
import { FaBars } from "react-icons/fa";

import { links, social } from "../../data";
function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const navbarRef = useRef(null);
  const linksRef = useRef(null);

  const handleShow = () => {
    console.log(navbarRef.current.getBoundingClientRect().height);
    for (let i = 0; i < linksRef.current.children.length; i++) {
      if (showLinks) {
        linksRef.current.children[i].style.display = "flex";
      } else linksRef.current.children[i].style.display = "none";
    }
    if (showLinks)
      navbarRef.current.style.height = `${
        linksRef.current.getBoundingClientRect().height
      }px`;
    else navbarRef.current.style.height = "50px";

    setShowLinks(!showLinks);
  };
  return (
    <nav className="nav-container" ref={navbarRef}>
      <div className="nav-responsive">
        <img src={logo} alt="" />
        <button className="faBars">
          <FaBars onClick={handleShow} />
        </button>
      </div>
      <div ref={linksRef} className="Links">
        <ul className="nav-links">
          {links.map((link, index) => (
            <il className="link" key={index}>
              <a href={link.url}>{link.text}</a>
            </il>
          ))}
        </ul>
        <ul className="nav-social-links">
          {social.map((link, index) => (
            <il className="social-link" key={index}>
              <a href={link.url}>{link.icon}</a>
            </il>
          ))}
        </ul>
      </div>
      {/* </div> */}
    </nav>
  );
}

export default Navbar;
