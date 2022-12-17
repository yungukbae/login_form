import { Paper, TextField, styled as muiSt } from "@mui/material";
import { ReactNode } from "react";

export const CustomPaper = muiSt(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(5),
  backgroundColor: "#fff",
}));

export const CustomInput = muiSt(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  "& input": {
    padding: theme.spacing(1.5),
  },
}));

export const CustomLabel = (props: { children: ReactNode; name: string }) => {
  return <label htmlFor={props.name}>{props.children}</label>;
};

// styled.label(() => ({
//   fontSize: "16px",
//   fontWeight: 600,
// }));
