import React, { useState, createContext } from 'react';

import IAlertStatus from '../interfaces/IAlertStatus';
import {
  AlertContextValue,
  AlertProviderProps,
} from '../types/AlertContextTypes';

const AlertContext = createContext<AlertContextValue | null>(null);

export const AlertProvider: React.FunctionComponent<AlertProviderProps> = ({
  children,
}) => {
  const [alert, setAlert] = useState<IAlertStatus | null>(null);

  const showSuccessAlert = (text: string) => {
    setAlert({
      type: 'success',
      text: text,
    });
    clearAlerts();
  };

  const showErrorAlert = (text: string) => {
    setAlert({
      type: 'error',
      text: text,
    });
    clearAlerts();
  };

  const clearAlerts = () => {
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };

  return (
    <AlertContext.Provider
      value={{
        alert,
        showSuccessAlert,
        showErrorAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
