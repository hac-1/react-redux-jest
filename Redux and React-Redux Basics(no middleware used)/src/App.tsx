import { Provider } from "react-redux";
import "./styles.css";
import store from "./Store/ToDoStore";
import ToDoComponent from "./Components/ToDoComponent";
import { ToDoWithHooks } from "./Components/ToDoUsingHooks";
export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ToDoComponent />
        <ToDoWithHooks />
      </div>
    </Provider>
  );
}
