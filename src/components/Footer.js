import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer__logo">
        <img src="./logo-white.png" alt="Logo de Kasa" />
      </div>
      <span>&#169; {new Date().getFullYear()} Kasa. All rights reserved</span>
    </footer>
  );
};

export default Footer;
