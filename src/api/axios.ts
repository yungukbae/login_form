import axios from "axios";

function createInstance() {
  return axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
  });
}

function InstanceWithAuth(url: string) {
  const instance = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}${url}`,
  });
  return instance;
}

export const instance = createInstance();
export const todos = InstanceWithAuth("/todos");
