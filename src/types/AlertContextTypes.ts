import IAlertStatus from '../interfaces/IAlertStatus';

export type AlertProviderProps = {
  children: React.ReactNode;
};

export type AlertContextValue = {
  alert: IAlertStatus | null;
  showSuccessAlert: CallableFunction;
  showErrorAlert: CallableFunction;
};
