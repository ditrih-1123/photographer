// Request interceptor
export function requestInterceptor(config: RequestInit): RequestInit {
  // TODO: Add auth token, custom headers, etc.
  return config;
}

// Response interceptor
export function responseInterceptor<T>(response: Response): Promise<T> {
  // TODO: Handle errors, transform data, etc.
  return response.json() as Promise<T>;
}



