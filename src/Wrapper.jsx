/*const Wrapper = (props) => {
  return props.App;
};

export default Wrapper;
*/
import { useState } from "react";
import { createContext } from "react";
export const todocontext = createContext(null);
const Wrapper = (props) => {
  const [todos, settodos] = useState([
    { id: 1, title: "Kaam Karle Bhai", isCompleted: false },
  ]);
  //console.log(props);
  return (
    <todocontext.Provider value={[todos, settodos]}>
      {props.children}
    </todocontext.Provider>
  );
};
export default Wrapper;
