import IFetchError from '../interfaces/IFetchError';
import { isFetchError } from './typeGuards';

function getError(maybeError: unknown): IFetchError {
  if (isFetchError(maybeError)) return maybeError;

  try {
    return new Error(JSON.stringify(maybeError));
  } catch {
    return new Error(String(maybeError));
  }
}

export default getError;
