import { AxiosCacheInstance, CacheAxiosResponse, CacheRequestConfig } from 'axios-cache-interceptor';
import { AxiosErrorWithError, AxiosResponseWithError } from './http.d';
import { AxiosInstance,  HttpStatusCode, Method } from 'axios';

export const axiosIntercptorResponse = <T>(response: CacheAxiosResponse<T>) => ({
  ...response,
  isError: false,
  errorPayload: null,
});

export const axiosIntercptorError = (error: AxiosErrorWithError) => {
  const errorMessage = {
    statusCode: error.response?.status ?? error.code,
    statusText: error.response?.statusText,
    message: error.message,
    isError: true,
    errorPayload: error.response?.data,
  };
  const payload = { ...errorMessage, errorPayload: errorMessage.errorPayload ?? errorMessage };
  return payload;
};

export function instanceRequest(instance: AxiosCacheInstance) {
  return function request<T = any, R = AxiosResponseWithError<T>, D = unknown>(
    config: CacheRequestConfig<D>
  ): Promise<R> {
    return instance.request(config);
  };
}

export function instancePostForm(instance: AxiosCacheInstance) {
  return function postForm<T = any, R = AxiosResponseWithError<T>, D = unknown>(
    url: string,
    data?: D,
    config?: CacheRequestConfig<D>
  ): Promise<R> {
    return instance.postForm(url, data, config);
  };
}
export function instancePutForm(instance: AxiosInstance) {
  return function putForm<T = any, R = AxiosResponseWithError<T>, D = unknown>(
    url: string,
    data?: D,
    config?: CacheRequestConfig<D>
  ): Promise<R> {
    return instance.putForm(url, data, config);
  };
}

export { HttpStatusCode };
export type { Method as HttpMethod };
