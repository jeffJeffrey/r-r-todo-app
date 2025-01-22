import { Todo } from "../types";
import { Todo as T } from "./Todo";
export const TodoList = ({
  todo_list,
  deleteTodo,
}: {
  todo_list: Todo[];
  deleteTodo: (id: number) => void;
}) => {
  return (
    <div>
      <div className="container inline-flex flex-col justify-between gap-5 mt-7">
        {todo_list.map((todo) => (
          <T
            key={todo.id}
            todo_name={todo.todo_name}
            completed={todo.completed}
            id={todo.id}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
};
