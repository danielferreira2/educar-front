import axios from 'axios';
import { UserTokenManager } from '../userTokenManager';

let authHeadersInterceptorIds: number[] = [];
let unauthorizedInterceptorIds: number[] = [];

export function unauthorizedInterceptor() {
  unauthorizedInterceptorIds.forEach((id) =>
    axios.interceptors.response.eject(id)
  );
  unauthorizedInterceptorIds = [];

  const interceptorId = addUnauthorizedInterceptorId();
  authHeadersInterceptorIds.push(interceptorId);
}

export function addUnauthorizedInterceptorId() {
  return axios.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      if (error.response.status === 401) {
        UserTokenManager.remove();
        location.reload();
      }

      return Promise.reject(error);
    }
  );
}

export function authHeadersInterceptor(idToken: string) {
  authHeadersInterceptorIds.forEach((id) =>
    axios.interceptors.request.eject(id)
  );
  authHeadersInterceptorIds = [];

  const insterceptorId = addAuthHeadersInterceptorId(idToken);
  authHeadersInterceptorIds.push(insterceptorId);
}

function addAuthHeadersInterceptorId(idToken: string) {
  return axios.interceptors.request.use(function (config: any) {
    config.headers.Authorization = `Bearer ${idToken}`;

    return config;
  });
}
