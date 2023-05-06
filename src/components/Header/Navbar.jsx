// src/components/Navbar.js

import React, { useState, useEffect } from "react";
import { debounce } from "../../utilities/helpers";

const Navbar = (props) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos < currentScrollPos &&
        prevScrollPos + currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  const navbarStyles = {
    position: "fixed",
    height: "80px",
    width: "100%",
    backgroundColor: "#fff",
    textAlign: "center",
    transition: "top 0.6s",
    lineHeight: "80px",
    webkitBoxShadow: "0 3px 5px rgba(57, 63, 72, 0.3)",
    mozBoxShadow: "0 3px 5px rgba(57, 63, 72, 0.3)",
    boxShadow: "0 3px 5px rgba(57, 63, 72, 0.3)",
  };

  return (
    <div style={{ ...navbarStyles, top: visible ? "0" : "-80px" }}>
      {props.children}
    </div>
  );
};

export default Navbar;
