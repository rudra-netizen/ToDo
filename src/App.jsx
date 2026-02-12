import Create from "./components/Create";
import Read from "./components/Read";
import React from "react";
import { useState } from "react";
const App = () => {
  const [todos, settodos] = useState([
    { id: 1, title: "Kaam Karle Bhai", isCompleted: false },
  ]);

  return (
    <div className=" text-white flex w-screen h-screen bg-gray-800 p-10">
      <Create todos={todos} settodos={settodos} />
      <Read todos={todos} settodos={settodos} />
    </div>
  );
};
export default App;
