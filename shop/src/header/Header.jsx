import React from "react";
import Logo from "./Logo";
import Backet from "./Backet";
import Style from "./Header.module.css";

const Header = () => {
  return (
    <header className={Style}>
      <Logo />
      <Backet />
    </header>
  );
};

export default Header;
