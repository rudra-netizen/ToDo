import React from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";
import { useContext } from "react";
import { todocontext } from "../Wrapper";
const Create = () => {
  const [todos, settodos] = useContext(todocontext);
  const {
    register, // twp way binding ke liye
    handleSubmit, //submit ke liye
    reset, //form ko reset karne k liye
    formState: { errors }, // errord ko find karne ke liyeS
  } = useForm();
  const SubmitHandler = (data) => {
    console.log(data);
    data.isCompleted = false;
    data.id = nanoid();
    //const newtodo = {
    //id: nanoid(),
    //title: title,
    //isCompleted: false,
    //};
    //console.log(newtodo);
    const copytodos = [...todos]; //here we copied the original data
    //copytodos.push(newtodo); //original data ki copy me we have pushed new data
    copytodos.push(data);
    settodos(copytodos); // replacement step
    //settitle("");
    console.log(data);
    toast.success("Todo Created!");
    reset();
  };

  return (
    <div className=" w-[60%] p-10 mx-auto">
      <h1 className="mb-10 text-5xl text-white font-thin">
        Set <span className="text-red-400">Reminder</span> for <br /> task
      </h1>
      <form onSubmit={handleSubmit(SubmitHandler)}>
        <input
          {...register("title", { required: "title cannot be empty" })}
          className="p-2 border-b w-full text-2xl font-thin outline-0"
          type="text"
          placeholder="title"
        />

        <small className="font-thin text-red-400">
          {errors?.title?.message}
        </small>
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
