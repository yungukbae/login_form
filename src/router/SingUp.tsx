import React, { useContext, useState } from "react";
import { CustomInput, CustomLabel, CustomPaper } from "./style";
import { Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const SignUp = () => {
  const [userInfo, setuserInfo] = useState<{ email: string; password: string }>(
    {
      email: "",
      password: "",
    }
  );
  const auth = useAuth();

  const handleInput = (input: { [x: string]: string }) => {
    setuserInfo({ ...userInfo, ...input });
  };

  const handleSubmit = async () => {
    const res = await auth.SignUp(userInfo);
    console.log(res);
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
          type="text"
        />
        <Button
          onClick={handleSubmit}
          fullWidth
          variant="contained"
          sx={{ margin: "30px auto 0" }}
        >
          회원가입
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
