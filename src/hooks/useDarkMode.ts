import { useEffect, useRef, useState } from 'react';
import useMediaQuery from './useMediaQuery';
import transition from '../utils/darkModeTransition';

const COLOR_SCHEME_QUERY = '(prefers-color-scheme: dark)';

function useDarkMode() {
  const isDarkOS = useMediaQuery(COLOR_SCHEME_QUERY);
  const [isCurrentlyDark, setIsCurrentlyDark] = useState<boolean>(isDarkOS);
  const { current: documentElement } = useRef(document.documentElement);

  useEffect(() => {
    transition();
    if (isCurrentlyDark) {
      documentElement.setAttribute('data-theme', 'dark');
    } else {
      documentElement.setAttribute('data-theme', 'light');
    }
  }, [isCurrentlyDark]);

  const toggleDarkMode = (togglerChecked: boolean) => {
    setIsCurrentlyDark(togglerChecked);
  };

  return { toggleDarkMode, isCurrentlyDark };
}

export default useDarkMode;
