import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './SearchBar.scss';
import SearchBarProps from '../../types/SearchBarProps';
import AlertContext from '../../context/AlertContext';

const SearchBar: React.FunctionComponent<SearchBarProps> = ({
  setUsername,
}) => {
  const [textInput, setTextInput] = useState<string>('');
  const alertContext = useContext(AlertContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextInput(e.target.value);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (textInput.trim().length > 0) {
      setUsername(textInput);
      setTextInput('');
    } else
      alertContext?.showErrorAlert(
        'Type something in the searchbar to get a user',
      );
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
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
              onChange={handleChange}
              value={textInput}
            />
          </div>
          <button type="submit" className="search-bar__btn--submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
