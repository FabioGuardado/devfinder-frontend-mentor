async function http<T>(path: string, config: RequestInit): Promise<T> {
  const request = new Request(path, config);
  const response = await fetch(request);

  if (!response.ok) {
    throw {
      message:
        response.status === 404
          ? 'The user that you were searching was not found.'
          : 'Something ocurred while getting data.',
      errorCode: response.status,
    };
  }

  const data = await response.json();

  return data;
}

export async function get<T>(path: string, config?: RequestInit): Promise<T> {
  const init = { method: 'get', ...config };
  return http<T>(path, init);
}
