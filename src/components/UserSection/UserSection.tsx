import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faLink,
  faBuilding,
} from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import './UserSection.scss';
import UserSectionProps from '../../types/UserSectionProps';
import IGitHubUser from '../../interfaces/IGitHubUser';
import useIsMounted from '../../hooks/useIsMounted';
import { getUserByUsername } from '../../API/users';

const UserSection: React.FunctionComponent<UserSectionProps> = ({
  username,
}) => {
  const [userDetails, setUserDetails] = useState<null | IGitHubUser>(null);
  const isMounted = useIsMounted();

  useEffect(() => {
    const getData = async () => {
      const response = await getUserByUsername(username ? username : 'octocat');
      if (isMounted()) setUserDetails(response);
    };

    getData();
  }, [username]);

  return userDetails ? (
    <div className="app-container">
      <div className="app-container__picture-section">
        <img
          src={userDetails.avatar_url}
          alt="Profile"
          className="app-container__image"
        />
      </div>
      <div className="app-container__information-section">
        <div className="app-container__information-header">
          <div className="app-container__information-header__first-col">
            <h1>{userDetails.name}</h1>
            <span>
              <a
                href={`https://github.com/${userDetails.login}`}
                target="_blank"
              >
                @{userDetails.login}
              </a>
            </span>
          </div>
          <div className="app-container__information-header__second-col">
            <h3>Joined {userDetails.created_at}</h3>
          </div>
        </div>

        <div className="app-container__bio">
          <p>{userDetails.bio ? userDetails.bio : 'This profile has no bio'}</p>
        </div>

        <div className="app-container__stats">
          <div className="app-container__stats__stats-group">
            <span className="app-container__stats__title">Repos</span>
            <h3 className="app-container__stats__data">
              {userDetails.public_repos}
            </h3>
          </div>
          <div className="app-container__stats__stats-group">
            <span className="app-container__stats__title">Followers</span>
            <h3 className="app-container__stats__data">
              {userDetails.followers}
            </h3>
          </div>
          <div className="app-container__stats__stats-group">
            <span className="app-container__stats__title">Following</span>
            <h3 className="app-container__stats__data">
              {userDetails.following}
            </h3>
          </div>
        </div>

        <div className="app-container__additional-information">
          <div
            className={`app-container__additional-information__item ${
              !userDetails.location && 'disabled'
            }`}
          >
            <span className="app-container__additional-information__item__icon">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </span>
            <span>
              {userDetails.location ? userDetails.location : 'Not available'}
            </span>
          </div>

          <div
            className={`app-container__additional-information__item ${
              !userDetails.twitter_username && 'disabled'
            }`}
          >
            <span className="app-container__additional-information__item__icon">
              <FontAwesomeIcon icon={faTwitter} />
            </span>
            <span>
              {userDetails.twitter_username
                ? `@${userDetails.twitter_username}`
                : 'Not available'}
            </span>
          </div>

          <div
            className={`app-container__additional-information__item ${
              !userDetails.blog && 'disabled'
            }`}
          >
            <span className="app-container__additional-information__item__icon">
              <FontAwesomeIcon icon={faLink} />
            </span>
            <span>{userDetails.blog ? userDetails.blog : 'Not available'}</span>
          </div>

          <div
            className={`app-container__additional-information__item ${
              !userDetails.company && 'disabled'
            }`}
          >
            <span className="app-container__additional-information__item__icon">
              <FontAwesomeIcon icon={faBuilding} />
            </span>
            <span>
              {userDetails.company ? `${userDetails.company}` : 'Not available'}
            </span>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

export default UserSection;
