import { useContext } from "react";
import { valueObjContext } from "../UseContext";
export const Ccomponent = () => {
  const valueObj = useContext(valueObjContext);

  return (
    <div>
      <label>C Component {valueObj.id + valueObj.name}</label>
    </div>
  );
};
