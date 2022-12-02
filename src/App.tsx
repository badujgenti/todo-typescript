import React, { ChangeEvent, FC, useState } from "react";
import "./App.css";
import styled from "styled-components";
import { ITask } from "./interfaces";
import TodoTask from "./Components/TodoTask";
import Boy from "./assets/boy3.jpeg";
import Boy1 from "./assets/boy2.png";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todo, setTodo] = useState<ITask[]>([]);

  const HandleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTask(e.target.value);
  };

  const HandleChange1 = (e: ChangeEvent<HTMLInputElement>): void => {
    console.log(e.target);
    setDeadline(e.target.valueAsNumber);
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadLine: deadline };
    setTodo([...todo, newTask]);
    console.log(todo);
    setTask("");
    setDeadline(0);
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodo(
      todo.filter((task) => {
        return task.taskName != taskNameToDelete;
      })
    );
  };

  return (
    <FullDiv>
      <Header></Header>
      <BoyImg src={Boy} alt="" />
      <TodoList>
        <InputContainer>
          <InputText
            type="text"
            placeholder="Task... "
            name="task"
            value={task}
            onChange={HandleChange}
          />
          <InputNumber
            type="number"
            placeholder="Deadline (in days) "
            name="deadline"
            value={deadline}
            onChange={HandleChange1}
          />
          <Button onClick={addTask}>Add Task </Button>
        </InputContainer>
        {todo.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask} />;
        })}
      </TodoList>
      <BoyImg src={Boy1} alt="" />
    </FullDiv>
  );
};

export default App;

const InputText = styled.input`
  border: none;
  height: 30px;
  width: 100%;
  padding: 5px;

  border-bottom: 2px solid black;
`;
const InputNumber = styled.input`
  border: none;
  height: 30px;
  width: 100%;
  padding: 5px;
  border-bottom: 2px solid black;
  && {
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    input[type="number"] {
      -moz-appearance: textfield;
    }
  }
`;

const FullDiv = styled.div`
  display: flex;
  align-items: center;

  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const Header = styled.div``;
const TodoList = styled.div`
  margin-bottom: auto;
  margin-top: 170px;
`;
const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 400px;
  gap: 10px;
`;

const BoyImg = styled.img`
  height: 500px;
  width: 400px;
`;

const Button = styled.button`
  border: none;
  border-bottom: 2px solid black;
  background-color: transparent;
  margin-top: 20px;
  margin-bottom: 20px;
`;
