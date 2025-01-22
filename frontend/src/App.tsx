import './App.css'
import { TodoList } from './components/TodoList'
import { useState, useEffect } from 'react'
import { get_todos, create_todo, delate_todo } from './api'
import { Todo } from './types';
import { AddTodo } from './components/AddTodo';

function App() {
  
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const todos = await get_todos();
        setTodos(todos);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    }

    fetchTodos();
  }, []);

  const addTodo = async (todo_name: string) => {
    try {
      const newTodo = await create_todo(todo_name);
      setTodos([newTodo, ...todos]);
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  }

  const deleteTodo = async (id: number) => {
    try {
      await delate_todo(id);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  }

  return (
   <>
    <div className="flex justify-center text-center items-start w-screen min-h-screen bg-[#FCFCFC] pt-12">
      <div className="inline-flex flex-col w-11/12 max-w-[600px]">
        <h1 className="text-3xl font-bold pb-2 font-sans text-blue-600">Todo App</h1>
        <AddTodo addTodo={addTodo}/>
        {todos.length > 0 && <TodoList todo_list={todos} deleteTodo={deleteTodo}/>}
        {todos.length === 0 && <h2 className="text-lg  text-gray-600">No todos found</h2>}
      </div>
    </div>
   </>
  )
}

export default App
