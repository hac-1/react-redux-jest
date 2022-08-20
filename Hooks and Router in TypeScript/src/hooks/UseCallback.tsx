/*

The React useCallback Hook returns a memoized callback function.

Think of memoization as caching a value so that it does not need to be recalculated.

This allows us to isolate resource intensive functions so that they will not automatically run on every render.

The useCallback Hook only runs when one of its dependencies update.

This can improve performance.
*/

//useCallback( ()=>function(),[dependencies])
export const CallBackComponent = () => {
  return (
    <label>
      note use export memo(Component) to ensure proper usage of Callback
    </label>
  );
};
