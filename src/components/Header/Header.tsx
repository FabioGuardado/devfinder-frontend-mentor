import React from 'react';
import './Header.scss';
import Switch from './Switch/Switch';

const Header: React.FunctionComponent = () => {
  return (
    <div className="header">
      <h1 className="header__brand">devfinder</h1>
      <Switch />
    </div>
  );
};

export default Header;
