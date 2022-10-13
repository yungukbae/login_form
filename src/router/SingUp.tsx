import React, { useState } from "react";
import { CustomInput, CustomLabel, CustomPaper } from "./style";
import { Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { validateEmail, validatePassword } from "../util/validation";

const SignUp = () => {
  const { registerApi } = useAuth();
  const [valid, setValid] = useState<{ email: boolean; password: boolean }>({
    email: false,
    password: false,
  });
  const btnState = valid.email && valid.password;
  const [userInfo, setuserInfo] = useState<{ email: string; password: string }>(
    {
      email: "",
      password: "",
    }
  );

  const handleInput = (input: { [x: string]: string }) => {
    const key = Object.keys(input)[0];
    if (key === "email") {
      setValid({ ...valid, email: validateEmail(input[key]) });
    } else {
      setValid({ ...valid, password: validatePassword(input[key]) });
    }
    setuserInfo({ ...userInfo, ...input });
  };

  const handleSubmit = async () => {
    try {
      const res = await registerApi(userInfo);
      console.log(res);
    } catch (e) {
      alert("로그인에 실패하였습니다. 다시 시도해주세요.");
    }
  };

  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CustomPaper sx={{ width: "400px" }}>
        <Typography
          variant="h4"
          sx={{
            width: "100%",
            height: "100px",
            textAlign: "center",
            lineHeight: "100px",
          }}
        >
          회원가입
        </Typography>
        <CustomLabel>이메일</CustomLabel>
        <CustomInput
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleInput({ email: e.target.value })
          }
          id="email"
          type="text"
        />
        <CustomLabel>비밀번호</CustomLabel>
        <CustomInput
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleInput({ password: e.target.value })
          }
          id="password"
          type="password"
        />
        <Button
          fullWidth
          disabled={!btnState}
          onClick={handleSubmit}
          variant="contained"
          sx={{ margin: "30px auto 0" }}
        >
          회원가입(로그인)
        </Button>
        <Link to="/">
          <Button fullWidth variant="text" sx={{ margin: "10px auto 0" }}>
            로그인
          </Button>
        </Link>
      </CustomPaper>
    </Container>
  );
};

export default SignUp;
