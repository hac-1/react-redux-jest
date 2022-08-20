import { useState } from "react";
import { connect } from "react-redux";
import { addNewToDo, removeToDo } from "../Actions/ToDoActions";
function ToDoComponent(props) {
  const [val, changeVal] = useState("");
  return (
    <div>
      <h1>Hello TO DO LIST</h1>
      <input
        type="text"
        value={val}
        onChange={(e) => changeVal(e.target.value)}
      ></input>
      <button onClick={() => props.add(val)}>Add Task</button>
      <ul>
        {
          //console.log(props)
          //props.values_in_state.map((obj) => {
          //ABOVE LINE IS FOR SINGLE DEMONSTRATION
          props.values_in_state.map((obj) => {
            return (
              <div>
                <label>{obj.work}</label>
                <button onClick={() => props.del(obj.work)}>Remove</button>
              </div>
            );
          })
        }
      </ul>
    </div>
  );
}
//RETURNS onject key to be used to call state variables
const selector = (state) => {
  return {
    values_in_state: state.r1.values
    //values_in_state: state.values//=>for single demonstration
  };
};

//RETURN FUNCTIONS TO BE CALLED AS PROPS
const mapDispatchtoProps = (dispatch) => {
  return {
    add: (task: String) => {
      //console.log(task);
      dispatch(addNewToDo({ work: task }));
    },

    del: (task: String) => {
      dispatch(removeToDo({ work: task }));
    }
  };
};

export default connect(selector, mapDispatchtoProps)(ToDoComponent);
