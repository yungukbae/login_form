import { instance } from "./axios";

export const SignUpApi = async (input: UserInput) => {
  return await instance.post("/auth/signup", input);
};

export const SignInApi = (input: UserInput) => {
  return instance.post("/auth/signin", input);
};
