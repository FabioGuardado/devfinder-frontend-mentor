import React from 'react';
import './Header.scss';

const Header: React.FunctionComponent = () => {
  return (
    <div className="header">
      <h1 className="header__brand">devfinder</h1>
      <div className="header__theme-switcher">Light</div>
    </div>
  );
};

export default Header;
