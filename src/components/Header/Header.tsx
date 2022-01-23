import React from 'react';
import useDarkMode from '../../hooks/useDarkMode';
import './Header.scss';

const Header: React.FunctionComponent = () => {
  const { toggleDarkMode, isCurrentlyDark } = useDarkMode();

  const handleCheck = () => {
    toggleDarkMode(!isCurrentlyDark);
  };

  return (
    <div className="header">
      <h1 className="header__brand">devfinder</h1>
      <div>
        <label htmlFor="theme">{isCurrentlyDark ? 'Light' : 'Dark'}</label>
        <input id="theme" name="theme" type="checkbox" onClick={handleCheck} />
      </div>
    </div>
  );
};

export default Header;
