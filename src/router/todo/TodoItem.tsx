import { Paper, Typography, Box, Button, Checkbox } from "@mui/material";
import { AxiosResponse } from "axios";
import React, { useState } from "react";
import { CustomInput } from "../style";

interface Props {
  item: {
    id: number;
    todo: string;
    isCompleted: boolean;
    userId: number;
  };
  handleDelete: (id: number) => Promise<void | AxiosResponse<any, any>>;
  handleUpdate: (
    id: number,
    body: {
      todo: string;
      isCompleted: boolean;
    }
  ) => Promise<void | AxiosResponse<any, any>>;
}

const TodoItem: React.FC<Props> = ({ item, handleDelete, handleUpdate }) => {
  const [mode, setMode] = useState(false);
  const [value, setValue] = useState("");

  const handleState = () => {
    setValue(item.todo);
    setMode(!mode);
  };

  const handleCheckBox = async (isChecked: boolean) => {
    const res = await handleUpdate(item.id, {
      todo: item.todo,
      isCompleted: isChecked,
    });
    if (res) {
      res.status >= 400 && alert("수정에 실패하였습니다.");
    }
  };

  const handleSubmit = async () => {
    const res = await handleUpdate(item.id, {
      todo: value,
      isCompleted: item.isCompleted,
    });
    if (res) {
      !(res.status >= 400) && handleState();
    }
  };

  return (
    <Paper
      sx={{
        display: "flex",
        width: 330,
        height: 30,
        padding: "10px",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      {!mode ? (
        <Typography
          variant="body1"
          textAlign="left"
          sx={{
            width: "150px",
            height: "30px",
            lineHeight: "30px",
            paddingLeft: "10px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {item.todo}
        </Typography>
      ) : (
        <CustomInput
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
          value={value}
          sx={{
            width: "180px",
            height: 30,
            "& input": {
              height: 30,
              padding: "0px 10px",
            },
          }}
          type="text"
        />
      )}
      {!mode && (
        <Checkbox
          sx={{ width: "30px", height: "30px" }}
          checked={item.isCompleted}
          onChange={(_, value) => handleCheckBox(value)}
        />
      )}
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        {mode && (
          <Button
            onClick={handleSubmit}
            disabled={value.length < 1}
            size="small"
            color="primary"
            variant="contained"
          >
            저장
          </Button>
        )}
        <Button
          onClick={handleState}
          size="small"
          color={!mode ? "primary" : "warning"}
          variant={!mode ? "outlined" : "text"}
        >
          {!mode ? "수정" : "취소"}
        </Button>
        {!mode && (
          <Button
            onClick={() => handleDelete(item.id)}
            size="small"
            color="error"
            variant="text"
          >
            삭제
          </Button>
        )}
      </Box>
    </Paper>
  );
};

export default TodoItem;
