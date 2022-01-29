import React, { useEffect, useState } from 'react';
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
import AddInfoItem from './AddInfoItem/AddInfoItem';
import moment from 'moment';
import IFetchError from '../../interfaces/IFetchError';
import getError from '../../utils/getErrorMessage';

const UserSection: React.FunctionComponent<UserSectionProps> = ({
  username,
}) => {
  const [notFound, setNotFound] = useState<IFetchError | null>(null);
  const [userDetails, setUserDetails] = useState<null | IGitHubUser>(null);
  const isMounted = useIsMounted();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getUserByUsername(
          username ? username : 'octocat',
        );
        if (isMounted()) {
          setNotFound(null);
          setUserDetails(response);
        }
      } catch (error) {
        if (getError(error).errorCode === 404) {
          setNotFound(getError(error));
          setUserDetails(null);
        }
      }
    };

    getData();
  }, [username, isMounted]);

  const joinDate: string | null = userDetails
    ? moment(userDetails.created_at).format('DD MMM YYYY')
    : null;

  return (
    <>
      {notFound && !userDetails ? (
        <div className="not-found">
          <h1 className="not-found__text">{notFound.message}</h1>
        </div>
      ) : null}
      {!notFound && !userDetails ? <h1>Loading...</h1> : null}
      {userDetails && !notFound ? (
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
                    rel="noreferrer"
                  >
                    @{userDetails.login}
                  </a>
                </span>
              </div>
              <div className="app-container__information-header__second-col">
                <h3>Joined {joinDate}</h3>
              </div>
            </div>

            <div className="app-container__bio">
              <p>
                {userDetails.bio ? userDetails.bio : 'This profile has no bio'}
              </p>
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
              <AddInfoItem data={userDetails.location} icon={faMapMarkerAlt} />

              <AddInfoItem
                data={
                  userDetails.twitter_username
                    ? `@${userDetails.twitter_username}`
                    : null
                }
                icon={faTwitter}
              />

              <AddInfoItem data={userDetails.blog} icon={faLink} />

              <AddInfoItem data={userDetails.company} icon={faBuilding} />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default UserSection;
