import { Paper, TextField, Typography, styled } from "@mui/material";

export const CustomPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(5),
  backgroundColor: "#fff",
}));

export const CustomInput = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  "& input": {
    padding: theme.spacing(1.5),
  },
}));

export const CustomLabel = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: 600,
}));
