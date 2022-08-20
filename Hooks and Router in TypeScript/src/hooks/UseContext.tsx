//Arch=appp->main(use variable)->A,B->C(use variable)
//will intialise in main
// will insert in A
//will use B to Set C and use in C
import { createContext } from "react";
import { Acomponent } from "./UseContextComponents/A";
import { Bcomponent } from "./UseContextComponents/B";
type valueObjType = {
  name?: string;
  id?: number | string;
};
export const valueObjContext = createContext({} as valueObjType);
export const MainComponent = () => {
  return (
    <valueObjContext.Provider value={{} as valueObjType}>
      <Acomponent />
      <Bcomponent />
    </valueObjContext.Provider>
  );
};
