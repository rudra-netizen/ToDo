import React from "react";
import { toast } from "react-toastify";
import { todocontext } from "../Wrapper";
import { useContext } from "react";
const Read = () => {
  const [todos, settodos] = useContext(todocontext);

  //const todos = props.todos;
  //const settodos = props.settodos;
  const DeleteHandler = (id) => {
    const filteredtodo = todos.filter((todo) => todo.id != id);
    settodos(filteredtodo);
    toast.error("Todo deleted!");
  };
  const rendertodos = todos.map((todo) => {
    return (
      <li
        key={todo.id}
        className="mb-2 flex justify-between items-center p-4 bg-gray-900 rounded"
      >
        <span className="text-xl font-thin">{todo.title}</span>
        <button
          className=" text-sm font-thin text-red-400"
          onClick={() => DeleteHandler(todo.id)}
        >
          {" "}
          Delete
        </button>
      </li>
    );
  });

  return (
    <div className="w-[40%] p-10">
      <h1 className="mb-10 text-5xl text-white font-thin">
        <span className="text-orange-400">Pending</span> Todos
      </h1>
      <ol>{rendertodos}</ol>
    </div>
  );
};

export default Read;
