import React, { useContext, useState } from "react";
import { CustomInput, CustomLabel, CustomPaper } from "./style";
import { Button, Container, Typography } from "@mui/material";
import { AuthContext } from "../context/AuthProvider";

const SignUp = () => {
  const { SignUp } = useContext(AuthContext);

  const [userInfo, setuserInfo] = useState<{ email: string; password: string }>(
    {
      email: "",
      password: "",
    }
  );

  const handleId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setuserInfo({ email: e.target.value, password: userInfo.password });
  };

  const handlePW = (e: React.ChangeEvent<HTMLInputElement>) => {
    setuserInfo({ password: e.target.value, email: userInfo.email });
  };

  const handleSubmit = async () => {
    const res = await SignUp(userInfo);
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
        <CustomInput onChange={handleId} id="email" type="text" />
        <CustomLabel>비밀번호</CustomLabel>
        <CustomInput onChange={handlePW} id="password" type="text" />
        <Button onClick={handleSubmit} fullWidth variant="contained" sx={{ margin: "30px auto 0" }}>
          회원가입
        </Button>
        <Button fullWidth variant="text" sx={{ margin: "10px auto 0" }}>
          로그인
        </Button>
      </CustomPaper>
    </Container>
  );
};

export default SignUp;
