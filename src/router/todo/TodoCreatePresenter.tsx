import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { AxiosResponse } from "axios";
import React, { useState } from "react";
import { CustomInput } from "../style";

interface Props {
  handleCreate: (todo: string) => Promise<void | AxiosResponse<any, any>>;
}

const TodoCreatePresenter: React.FC<Props> = ({ handleCreate }) => {
  const [input, setInput] = useState<string>("");

  const handleSubmit = async () => {
    const res = await handleCreate(input);
    if (res && res.status >= 400) {
      alert("수정에 실패하였습니다.");
    } else {
      setInput("");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: "30px",
        width: "350px",
        justifyContent: "center",
      }}
    >
      <CustomInput
        fullWidth
        placeholder="항목을 입력해주세요."
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInput(e.target.value)
        }
        value={input}
        className="todoInput"
        type="text"
      />
      <Button
        onClick={handleSubmit}
        size="small"
        variant="contained"
        sx={{ height: 47 }}
      >
        추가
      </Button>
    </Box>
  );
};

export default TodoCreatePresenter;
