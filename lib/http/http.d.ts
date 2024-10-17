import { AxiosError, AxiosResponse } from "axios";

export interface AxiosResponseWithError<T> extends AxiosResponse<T> {
    isError: boolean;
    errorPayload?: Record<string, any> | null;
  }
export interface AxiosErrorWithError extends AxiosError {
    isError: boolean;
    errorPayload: Record<string, any> | null;
  } 
export type headersType = { authorization: string;};
