import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addNewToDo, removeToDo } from "../Actions/ToDoActions";
export const ToDoWithHooks = (props) => {
  const [val, changeVal] = useState("");
  const values_in_state = useSelector((state) => state.r2.values);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Hello TO DO LIST USING HOOKS</h1>
      <input
        type="text"
        value={val}
        onChange={(e) => changeVal(e.target.value)}
      ></input>
      <button onClick={() => dispatch(addNewToDo({ work: val }))}>
        Add Task
      </button>
      <ul>
        {
          //console.log(props)
          values_in_state.map((obj) => {
            return (
              <div>
                <label>{obj.work}</label>
                <button
                  onClick={() => dispatch(removeToDo({ work: obj.work }))}
                >
                  Remove
                </button>
              </div>
            );
          })
        }
      </ul>
    </div>
  );
};
