import "./styles.css";
import { CountComponent } from "./hooks/UseReducer";
import { MainComponent } from "./hooks/UseContext";
import { MemoComponent } from "./hooks/UseMemo";
import { CallBackComponent } from "./hooks/UseCallback";
import { NavLink, Outlet, Route, Routes } from "react-router-dom";
import Home from "./Home";
var sampleProps = {
  name: "Voldermort"
};
export default function App() {
  return (
    <div className="App">
      <ul>
        <NavLink to="/UseReducer">UseReducer</NavLink>
        <br />
        <NavLink to="/UseContext">UseContext</NavLink> <br />
        <NavLink to="/UseMemo">UseMemo</NavLink> <br />
        <NavLink to="/UseCallback">UseCallback</NavLink>
        <br />
      </ul>

      {/* --------------------------------------------- */}
      <Routes>
        <Route path="/" element={<Home />}>
          <Route
            path="UseReducer"
            element={
              <CountComponent value="hello" objectValue={sampleProps}>
                I am Child
              </CountComponent>
            }
          />
        </Route>
        <Route path="UseContext" element={<MainComponent />} />
        <Route path="UseMemo" element={<MemoComponent />} />
        <Route path="UseCallback" element={<CallBackComponent />} />
      </Routes>

      {/* --------------------------------------------- */}
      {/* ALL COMPONENTS
      <CountComponent value="hello" objectValue={sampleProps}>
        I am Child
      </CountComponent>
      <MainComponent />
      <MemoComponent />
      <CallBackComponent /> */}
    </div>
  );
}
