import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faLink,
  faBuilding,
} from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import './UserSection.scss';
import defaultPicture from '../../assets/defaultPicture.png';

const UserSection: React.FunctionComponent = () => {
  return (
    <div className="app-container">
      <div className="app-container__picture-section">
        <img
          src={defaultPicture}
          alt="Profile"
          className="app-container__image"
        />
      </div>
      <div className="app-container__information-section">
        <div className="app-container__information-header">
          <div className="app-container__information-header__first-col">
            <h1>The Octocat</h1>
            <span>
              <a href="#">@octocat</a>
            </span>
          </div>
          <div className="app-container__information-header__second-col">
            <h3>Joined 25 Jan 2011</h3>
          </div>
        </div>

        <div className="app-container__bio">
          <p>This profile has no bio</p>
        </div>

        <div className="app-container__stats">
          <div className="app-container__stats__stats-group">
            <span className="app-container__stats__title">Repos</span>
            <h3 className="app-container__stats__data">8</h3>
          </div>
          <div className="app-container__stats__stats-group">
            <span className="app-container__stats__title">Followers</span>
            <h3 className="app-container__stats__data">3938</h3>
          </div>
          <div className="app-container__stats__stats-group">
            <span className="app-container__stats__title">Following</span>
            <h3 className="app-container__stats__data">9</h3>
          </div>
        </div>

        <div className="app-container__additional-information">
          <div className="app-container__additional-information__item">
            <span className="app-container__additional-information__item__icon">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </span>
            <span>San Francisco</span>
          </div>

          <div className="app-container__additional-information__item disabled">
            <span className="app-container__additional-information__item__icon">
              <FontAwesomeIcon icon={faTwitter} />
            </span>
            <span>Not available</span>
          </div>

          <div className="app-container__additional-information__item">
            <span className="app-container__additional-information__item__icon">
              <FontAwesomeIcon icon={faLink} />
            </span>
            <span>https://github.blog</span>
          </div>

          <div className="app-container__additional-information__item">
            <span className="app-container__additional-information__item__icon">
              <FontAwesomeIcon icon={faBuilding} />
            </span>
            <span>@github</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSection;
