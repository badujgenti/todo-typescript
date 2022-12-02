import React from "react";
import styled from "styled-components";
import { ITask } from "../interfaces";

interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <TaskAndDeadline>
      <Task>Task :{task.taskName}</Task>
      <Deadline>Deadline:{task.deadLine}</Deadline>
      <Delete onClick={() => completeTask(task.taskName)}>X</Delete>
    </TaskAndDeadline>
  );
};

export default TodoTask;

const TaskAndDeadline = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 2px solid black;
`;

const Task = styled.span`
  color: black;
`;
const Deadline = styled.span`
  color: black;
  margin-left: auto;
`;

const Delete = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
  color: red;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  cursor: pointer;
  margin-left: 10px;
`;
