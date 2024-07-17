import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <p>
          ©copyright 2024 Desarrollado por KQ{" "}
          <Link to={"https://puntochar-informatic.site/"}>
            puntoChar Informatic
          </Link>
        </p>
      </footer>
    </>
  );
};

export default Footer;
