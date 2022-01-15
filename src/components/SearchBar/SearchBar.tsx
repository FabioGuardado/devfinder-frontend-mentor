import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './SearchBar.scss';

const SearchBar: React.FunctionComponent = () => {
  return (
    <div className="search-bar">
      <form>
        <div className="search-bar__group">
          <div className="search-bar__input-container">
            <label className="search-bar__label" htmlFor="search-bar__input">
              <FontAwesomeIcon icon={faSearch} />
            </label>
            <input
              className="search-bar__input"
              id="search-bar__input"
              type="text"
              placeholder="Search GitHub username..."
            />
          </div>
          <button className="search-bar__btn--submit">Search</button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
