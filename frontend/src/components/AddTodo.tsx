import { useState } from "react";
export const AddTodo = ({
  addTodo,
}: {
  addTodo: (todo_name: string) => void;
}) => {

    const [todo_name, setTodo_name] = useState('');
    const handleAddTodo = () => {
        // validate the todo name
        if (todo_name.trim() === '') {
          alert('Todo name cannot be empty');
          return;
        }
        addTodo(todo_name);
        setTodo_name('');
    }
  return (
    <div>
      <div className="inline-flex flex-row items-center justify-center w-[100%] ">
        <input
          type="text"
          name=""
          id=""
          className="w-[80%] border-solid border-black border-[1px] h-[30px] rounded-md p-1"
          placeholder="Enter Todo name"
          onChange={(e) => setTodo_name(e.target.value)}
        />
        <button className=" w-[20%] h-[30px] border-solid border-black  ml-1 rounded-lg text-yellow-100 bg-blue-500   p-1 font-bold text-center hover:bg-blue-700" onClick={handleAddTodo}>
          Add Todo
        </button>
      </div>
    </div>
  );
};
