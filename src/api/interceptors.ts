import { AxiosInstance } from "axios";

export function setInterceptors(instance: AxiosInstance, token: string) {
  instance.interceptors.request.use(function (config) {
    config.headers!.Authorization = `Bearer ${token}`;
    return config;
  });
  return instance;
}
