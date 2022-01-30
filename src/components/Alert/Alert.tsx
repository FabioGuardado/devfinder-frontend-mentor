import React, { useContext } from 'react';
import { createPortal } from 'react-dom';

import './Alert.scss';
import AlertContext from '../../context/AlertContext';

const domAlertNode = document.getElementById('alert');

const Alert: React.FunctionComponent = () => {
  const alertContext = useContext(AlertContext);

  if (domAlertNode && alertContext && alertContext.alert) {
    return createPortal(
      <div className={`alert ${alertContext.alert.type}`}>
        <h3 className="alert__text">{alertContext.alert.text}</h3>
      </div>,
      domAlertNode,
    );
  } else {
    return null;
  }
};

export default Alert;
