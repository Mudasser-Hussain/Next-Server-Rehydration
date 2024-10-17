import axios from "axios";
import { setupCache } from "axios-cache-interceptor";
import {
  axiosIntercptorError,
  axiosIntercptorResponse,
  instancePostForm,
  instancePutForm,
  instanceRequest,
} from "./http";

const instance = axios.create({
  baseURL: process.env.serverUrl,
});

const serverRequest = setupCache(instance);

serverRequest.interceptors.response.use(axiosIntercptorResponse,axiosIntercptorError);

export const setServerAuthToken = (authToken: string) => {
  serverHttp.defaults.headers.common.Authorization = authToken;
};

export const serverHttp = {
  ...serverRequest,
  request: instanceRequest(serverRequest),
  postForm: instancePostForm(serverRequest),
  putForm: instancePutForm(serverRequest),
};
