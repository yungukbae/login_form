import { Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CustomPaper } from "./style";

const NotFound = () => {
  const [time, setTime] = useState(5);
  const navigate = useNavigate();
  useEffect(() => {
    const handleCount = setInterval(() => {
      setTime((x) => {
        if (x === 0) {
          navigate(-1);
          return x;
        }
        return x - 1;
      });
    }, 1000);
    return () => clearInterval(handleCount);
  }, [navigate]);

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
          Page Not Found
        </Typography>

        <Typography
          sx={{
            width: "100%",
            height: "100px",
            textAlign: "center",
            lineHeight: "100px",
          }}
        >
          잘못된 접근입니다. {time}초후 이전 페이지로 이동합니다.
        </Typography>
      </CustomPaper>
    </Container>
  );
};

export default NotFound;
