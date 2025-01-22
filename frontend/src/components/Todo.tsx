import { RiDeleteBack2Line } from "react-icons/ri";
import { useState } from "react";
import { update_todo } from "../api";

export const Todo = ({
  todo_name,
  id,
  completed,
  deleteTodo,
}: {
  todo_name: string;
  id: number;
  completed: boolean;
  deleteTodo: (id: number) => void;
}) => {
  const [isCompleted, setIsCompleted] = useState(completed);
  const handleDelete = () => {
    deleteTodo(id);
  };

  const handleCompleted = async () => {
    update_todo(id, !isCompleted);
    setIsCompleted(!isCompleted);
    
  }

  return (
    <div className="border-solid border-black border-1 min-h-[100px] rounded-lg shadow-lg border-[1px]">
      <div className="inline-flex flex-row justify-between w-11/12 h-[100%] pt-7">
        <input type="checkbox"  checked={isCompleted} onClick={handleCompleted} />
        <h3 className="font-bold text-lg">{todo_name}</h3>
        <RiDeleteBack2Line size={"20px"} color="red" onClick={handleDelete} />
      </div>
    </div>
  );
};
