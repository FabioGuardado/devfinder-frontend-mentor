import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const AddInfoItem: React.FunctionComponent<AddInfoItemProps> = ({
  data,
  icon,
}) => {
  return (
    <div
      className={`app-container__additional-information__item ${
        !data && 'disabled'
      }`}
    >
      <span className="app-container__additional-information__item__icon">
        <FontAwesomeIcon icon={icon} />
      </span>
      <span>{data ? data : 'Not available'}</span>
    </div>
  );
};

export default AddInfoItem;

type AddInfoItemProps = {
  data: string | null | undefined;
  icon: IconProp;
};
