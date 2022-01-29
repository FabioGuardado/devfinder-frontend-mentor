import IFetchError from '../interfaces/IFetchError';

export const isFetchError = (error: unknown): error is IFetchError => {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof (error as Record<string, unknown>).message === 'string'
  );
};
