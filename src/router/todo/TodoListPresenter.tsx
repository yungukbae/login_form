import { Box } from "@mui/material";
import { AxiosResponse } from "axios";
import React from "react";
import TodoItem from "./TodoItem";

interface Props {
  data: Array<{
    id: number;
    todo: string;
    isCompleted: boolean;
    userId: number;
  }>;
  handleDelete: (id: number) => Promise<void | AxiosResponse<any, any>>;
  handleUpdate: (
    id: number,
    body: {
      todo: string;
      isCompleted: boolean;
    }
  ) => Promise<void | AxiosResponse<any, any>>;
}

const TodoListPresenter: React.FC<Props> = ({
  data,
  handleDelete,
  handleUpdate,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      {data.map((v) => {
        return (
          <React.Fragment key={v.id}>
            <TodoItem
              item={v}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
            />
          </React.Fragment>
        );
      })}
    </Box>
  );
};

export default TodoListPresenter;
