import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";
const Create = (props) => {
  const todos = props.todos;
  const settodos = props.settodos;
  const [title, settitle] = useState("");
  const SubmitHandler = (e) => {
    e.preventDefault();

    const newtodo = {
      id: nanoid(),
      title: title,
      isCompleted: false,
    };
    console.log(newtodo);
    let copytodos = [...todos]; //here we copied the original data
    copytodos.push(newtodo); //original data ki copy me we have pushed new data
    settodos(copytodos); // replacement step
    settitle("");
  };

  return (
    <div className=" w-[60%] p-10 mx-auto">
      <h1 className="mb-10 text-5xl text-white font-thin">
        Set <span className="text-red-400">Reminder</span> for <br /> task
      </h1>
      <form onSubmit={SubmitHandler}>
        <input
          className="p-2 border-b w-full text-2xl font-thin outline-0"
          onChange={(e) => settitle(e.target.value)}
          type="text"
          value={title}
          placeholder="title"
        />
        <br />
        <br />
        <button className="mt-5 text-xl px-10 py-2 border rounded">
          Create Todo
        </button>
      </form>
    </div>
  );
};
export default Create;
