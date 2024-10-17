import { AxiosResponseWithError } from "@/lib/http";
import { AppDispatch } from "../configureStore";

type ApiRequestParams<T> = {
  httpFn:() => Promise<AxiosResponseWithError<T>>;
  onStart?: string;
  onSuccess?: string;
  onError?: string;
};

export const apiRequest = <T>({ httpFn, onStart, onError, onSuccess }: ApiRequestParams<T>) => {
  return async (dispatch: AppDispatch) => {
    const response = await httpFn();
    if (onStart) {
      dispatch({ type: onStart });
    }

    if (response.isError) {
      if (onError) dispatch({ type: onError, payload: response });
      return { response, isError: response.isError };
    }

    if (onSuccess) {
      dispatch({ type: onSuccess, payload: response.data, status: response.status, message: response.statusText });
      return { data: response.data, isError: response.isError };
    }
  };
};
export default apiRequest;
