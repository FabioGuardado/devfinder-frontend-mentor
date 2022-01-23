import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Switch.scss';
import useDarkMode from '../../../hooks/useDarkMode';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const Switch: React.FunctionComponent = () => {
  const { toggleDarkMode, isCurrentlyDark } = useDarkMode();

  const handleClick = () => {
    toggleDarkMode(!isCurrentlyDark);
  };
  return (
    <div className="theme-switch" onClick={handleClick}>
      <span className="theme-switch__text">
        {isCurrentlyDark ? 'Light' : 'Dark'}
      </span>
      <FontAwesomeIcon
        className="theme-switch__icon"
        icon={isCurrentlyDark ? faSun : faMoon}
      />
    </div>
  );
};

export default Switch;
