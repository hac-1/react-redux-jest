//Example for useReducer

import React, { useReducer } from "react";

type actionObjectType = {
  actionToBeDone: "increment" | "decrement" | "reset";
};

type countStateType = {
  count: number;
  resetCount?: number; //tells resetCount is optional
};

//FOR GETTING PROPS AND CHILDREN
type PropsType = {
  value?: string;
  objectValue?: {
    name: string;
  };
  children?: React.ReactNode;
};

function reducer( //(VARIABLES:TYPE):RETURN TYPE
  state: countStateType,
  actionObject: actionObjectType
): countStateType {
  switch (actionObject.actionToBeDone) {
    case "increment":
      return { ...state, count: state.count + 1 };

    case "decrement":
      return { ...state, count: state.count - 1 };
    case "reset":
      if (state.resetCount) {
        return {
          ...state,
          resetCount: state.resetCount + 1,
          count: 0
        };
      } else {
        return {
          ...state,
          resetCount: 1,
          count: 0
        };
      }
    default:
      return { ...state };
  }
}

export const CountComponent = (completeProps: PropsType) => {
  const [counterValue, reducerCaller] = useReducer(reducer, {
    count: 0,
    resetCount: 0
  } as countStateType);
  console.table(completeProps);
  console.log("Hello" + completeProps.children);
  //INTIALISING const[value,reducerCaller]=useReducer(reducerFunction,intialvalue)

  return (
    <div>
      <label>COUNT={counterValue.count}</label>
      <br></br>
      <label>RESET COUNT={counterValue.resetCount}</label>
      <br />
      <button onClick={() => reducerCaller({ actionToBeDone: "increment" })}>
        Increase
      </button>
      <br />
      <button onClick={() => reducerCaller({ actionToBeDone: "decrement" })}>
        Decrease
      </button>
      <br />
      <button onClick={() => reducerCaller({ actionToBeDone: "reset" })}>
        Reset
      </button>
    </div>
  );
};

export default CountComponent;
