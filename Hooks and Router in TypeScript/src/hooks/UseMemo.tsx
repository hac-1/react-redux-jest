/*
The React useMemo Hook returns a memoized value.

Think of memoization as caching a value so that it does not need to be recalculated.

The useMemo Hook only runs when one of its dependencies update.

This can improve performance.

The useMemo and useCallback Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.
*/

import { useMemo, useState } from "react";

function expensiveFunction(intial: number): number {
  console.log("Calculating...");
  var num = intial;
  for (let i = 0; i < 1001; i++) {
    num += 1;
  }
  return num;
}
//useMemo( ()=>function(),[dependencies])
export const MemoComponent = () => {
  const [switcher, changeSwitch] = useState(0);
  const calulation = useMemo(() => expensiveFunction(switcher), [switcher]);
  //const calulation = expensiveFunction(switcher);
  return (
    <>
      <button
        onClick={() => {
          changeSwitch(switcher + 1);
        }}
      >
        Click to Execute Expensive Function
      </button>
      <label>Value is {calulation}</label>
    </>
  );
};
