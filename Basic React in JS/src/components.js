import { useState } from "react";
export const PropsExample = (props) => {
  return (
    <div>
      <p>
        Hello {4 + 4} {props.thisWillBecomeProps}
        <br></br>
        {props.children}
      </p>
    </div>
  );
};
// -----------------------------------------------------
export const UseStateExample = (props) => {
  var [counter, incrementCounter] = useState(0);
  //SYNTAX
  //var/const [variableName,functionTosetNewValue] = useState(DefaultValue);
  return (
    <div>
      <p>Hello {counter}</p>
      <button onClick={() => incrementCounter(Number(counter) + 1)}>
        Increment
      </button>
    </div>
  );
};
// -----------------------------------------------------
export const UseStateExampleWithFunctionCall = () => {
  var [counter, incrementCounter] = useState(0);
  const functionToIncrement = () => {
    incrementCounter(Number(counter) + 1);
  };
  return (
    <div>
      <p>Hello {counter}</p>
      <button onClick={functionToIncrement}>Increment</button>
    </div>
  );
};
// -----------------------------------------------------
export const EventExample = () => {
  const logger = (event, stringtobelogged) => {
    console.log(event);
    console.log(event.type);
    console.log(stringtobelogged);
  };
  // const functionName = (functionarguments)=>{function};
  return (
    <div>
      <button
        onClick={
          (event /*Will pass event itself to arrow function*/) => {
            logger(event, "Hari");
          }
          //We can send additional parameters like above
        }
      >
        Console Logger
      </button>
    </div>
  );
};
// -----------------------------------------------------
export const ParentChildCommunication = (props) => {
  return (
    <div>
      <button
        onClick={() => {
          props.functionToBeCalled("I am the Child Speaking");
        }}
      >
        Call Parent Function
      </button>
    </div>
  );
};
// -----------------------------------------------------
// value ? op if value==true : op if value==false
export const ConditionalRenderingWithTernary = () => {
  var [is_even, updateIsEven] = useState(true);
  var [value, updateValue] = useState(2);
  const functionToIncrement = () => {
    updateValue(Number(value) + 1);
    if (value % 2 === 0) {
      updateIsEven(true);
    } else {
      updateIsEven(false);
    }
  };
  return (
    <div>
      <p>Conditional Rendering With Ternary Operator</p>
      <button onClick={functionToIncrement}>Increment</button>
      <p>Value is {is_even ? "Even" : "ODD"}</p>
      {/* THE ABOVE LINE WILL RENDER EVEN IF is_even is
          True or ELSE it will render odd
      */}
    </div>
  );
};
// -----------------------------------------------------
export const ConditionalRenderingWithShortCircuit = () => {
  var [is_even, updateIsEven] = useState(true);
  var [value, updateValue] = useState(2);
  const functionToIncrement = () => {
    updateValue(Number(value) + 1);
    if (value % 2 === 0) {
      updateIsEven(true);
    } else {
      updateIsEven(false);
    }
  };
  return (
    <div>
      <p>Conditional Rendering With Short Ciruit</p>
      <button onClick={functionToIncrement}>Increment</button>
      <p>Value is {is_even && "Even"}</p>
      {/* THE ABOVE LINE WILL RENDER EVEN IF is_even is
          True or Lelse nothing
          && = > evaluates  left hand side and does right hand side
          only if lhs is true
      */}
    </div>
  );
};
// -----------------------------------------------------
//LIST RENDERING
export const ListRendrer = () => {
  var [list, updateList] = useState(["SHIVA", "GANESHA", "SHASTHA"]);

  return (
    <div>
      {list.map((name) => {
        return (
          <div>
            <p key={name}>{name}</p>
            {/*KEY IS SUPPOSED TO BE UNIQUE */}
            <br></br>
          </div>
        );
      })}
      <button
        onClick={() => updateList([["HELLO", "SHIVA", "GANESHA", "SHASTHA"]])}
      >
        CHANGE VALUE
      </button>
    </div>
  );
};
// -----------------------------------------------------
const Trial = () => {
  return <h1>Hello</h1>;
};
export default Trial;
