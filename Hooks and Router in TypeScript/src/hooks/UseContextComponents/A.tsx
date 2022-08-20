import { useContext } from "react";
import { valueObjContext } from "../UseContext";
export const Acomponent = () => {
  const valueObj = useContext(valueObjContext);
  valueObj.id = 1;
  valueObj.name = "hello";

  return (
    <div>
      <h1>USERCONTEXT A COMPONENT DONE</h1>
    </div>
  );
};
