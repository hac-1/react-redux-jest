import { combineReducers } from "redux";
import { toDoReducer } from "./ToDoReducers";
import { toDoReducerHooks } from "./ToDoReducersForHooks";

//USED TO COMBINE THESE 2 REDUCERS TO FORM THE STORE
const RootReducer = combineReducers({
  r1: toDoReducer,
  r2: toDoReducerHooks
});

export default RootReducer;
