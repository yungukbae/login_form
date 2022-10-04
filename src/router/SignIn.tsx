import { Theme } from "@emotion/react";
import {
  Button,
  Container,
  Paper,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import { SignUpUser } from "../api/auth";
import { createTodo } from "../api/todo";
import { AuthContext } from "../context/AuthProvider";

const CustomPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(5),
  backgroundColor: "#fff",
}));

const CustomInput = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  "& input": {
    padding: theme.spacing(1.5),
  },
}));

const CustomLabel = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: 600,
}));

const SignIn = () => {
  const { token, getToken } = useContext(AuthContext);
  const [auth, isAuth] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  const handleId = (e: React.ChangeEvent<HTMLInputElement>) => {
    isAuth({ email: e.target.value, password: auth.password });
  };

  const handlePW = (e: React.ChangeEvent<HTMLInputElement>) => {
    isAuth({ password: e.target.value, email: auth.email });
  };

  const handleSubmit = async () => {
    try {
      const res = await SignUpUser(auth);
      if (res) {
        getToken(res.data.access_token);
      }
      console.log("response:", res);
    } catch (e) {
      console.log(e);
    }
  };

  const create = async () => {
    try {
      const res = await createTodo(token, "test");
      console.log("create:", res);
    } catch (e) {
      console.log("error:", e);
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
          로그인
        </Typography>
        <CustomLabel>이메일</CustomLabel>
        <CustomInput onChange={handleId} id="email" type="text" />
        <CustomLabel>비밀번호</CustomLabel>
        <CustomInput onChange={handlePW} id="password" type="text" />
        <Button
          onClick={handleSubmit}
          variant="contained"
          sx={{ marginTop: "30px" }}
        >
          로그인
        </Button>
      </CustomPaper>
    </Container>
  );
};

export default SignIn;
