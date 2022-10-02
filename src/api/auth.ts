import { instance } from "./axios";

interface UserInput {
  email: string;
  password: string;
}

function SignUpUser(input: UserInput) {
  return instance.post("/auth/signup", input);
}

function SignInUser(input: UserInput) {
  return instance.post("/auth/signin", input);
}

export { SignUpUser, SignInUser };
