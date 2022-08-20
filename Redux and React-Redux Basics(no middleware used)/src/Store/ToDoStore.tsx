import { createStore } from "redux";

//import { toDoReducer } from "../Reducers/ToDoReducers";
//const store = createStore(toDoReducer);
//ABOVE LINES IS FOR SINGLE DEMONSTRATION
import RootReducer from "../Reducers/RootReducer";
const store = createStore(RootReducer);
//FOR COMBINE REDUCERS each state.xyz=> state.r1.xyz
//in Components(SELECTORS(mapStateotProps) or useSelector)
//CREATING STORE BASED ON REDUCER

export default store;
