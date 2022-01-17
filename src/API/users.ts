import { get } from '../helpers/fetchService';
import IGitHubUser from '../interfaces/IGitHubUser';

export async function getUserByUsername(username: string) {
  const response = await get<IGitHubUser>(
    `https://api.github.com/users/${username}`,
  );
  return response;
}
