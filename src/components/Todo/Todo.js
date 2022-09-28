import React from "react";
import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import Input from "@mui/material/Input";
import { Button, Card, CardActionArea } from "@mui/material";

export default function NewTodo(props) {
  const [addTask, setAddTask] = useState();
  const [taskToBeUpdated, setTaskToBeUpdated] = useState();

  const [updateTask, setUpdateTask] = useState({
    Title: props?.todos[taskToBeUpdated]?.Title,
  });

  const [isUpdate, setIsUpdate] = useState(false);
  const [checked, setChecked] = useState([false]);
  const handleChecked = (e, index) => {
    const temp = JSON.parse(JSON.stringify(checked));

    temp[index] = e.target.checked;
    setChecked(temp);
  };
  const handleClickAdd = () => {
    const temp = JSON.parse(JSON.stringify(props.todos));
    temp.push({ Title: addTask });
    props.setTodos(temp);
    clear();
  };
  const handleClickIsUpdate = (index) => {
    setIsUpdate(true);
    setTaskToBeUpdated(index);
  };
  const handleClickUpdate = () => {
    const temp = JSON.parse(JSON.stringify(props.todos));
    temp[taskToBeUpdated].Title = updateTask;
    props.setTodos(temp);
    setIsUpdate(false);
  };
  const handleClickComplete = (index) => {
    const temp = JSON.parse(JSON.stringify(props.todos));
    temp.splice(index, 1);
    props.setTodos(temp);
  };
  const clear = () => {
    setAddTask("");
  };

  return (
    <>
      <Card sx={{ maxWidth: 1500, maxHeight: 1500 }}>
        <CardActionArea>
          <div>
            {props.todos.map((todo, index) => {
              return (
                <>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "10px",
                    }}
                  >
                    <Checkbox
                      keys={index}
                      value={checked[index]}
                      onClick={(e) => handleChecked(e, index)}
                    ></Checkbox>
                    {todo.Title}

                    {checked[index] ? (
                      <Button
                        variant="contained"
                        style={{ marginLeft: "7px" }}
                        onClick={() => handleClickIsUpdate(index)}
                      >
                        Update Task
                      </Button>
                    ) : (
                      <div></div>
                    )}
                    {checked[index] ? (
                      <Button
                        variant="contained"
                        style={{ marginLeft: "7px" }}
                        onClick={() => handleClickComplete(index)}
                      >
                        Mark As Complete
                      </Button>
                    ) : (
                      <div></div>
                    )}
                  </div>
                </>
              );
            })}
          </div>
          <Input
            style={{ marginRight: "7px" }}
            type="text"
            value={addTask}
            onChange={(e) => {
              setAddTask(e.target.value);
            }}
          ></Input>
          <Button
            variant="contained"
            style={{ marginTop: "10px" }}
            onClick={handleClickAdd}
          >
            Add Task
          </Button>
          {isUpdate ? (
            <Input
              style={{ marginLeft: "7px" }}
              type="text"
              defaultValue={props?.todos[taskToBeUpdated]?.Title}
              onChange={(e) => {
                setUpdateTask(e.target.value);
              }}
            ></Input>
          ) : (
            <div></div>
          )}
          {isUpdate ? (
            <Button
              variant="contained"
              style={{ marginTop: "10px", marginLeft: "15px" }}
              onClick={handleClickUpdate}
            >
              Update
            </Button>
          ) : (
            <div></div>
          )}
        </CardActionArea>
      </Card>
    </>
  );
}
