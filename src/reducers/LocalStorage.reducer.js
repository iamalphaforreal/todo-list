import { useReducer, useEffect } from "react";

const UseLocalStorageReducer = (key, defaultVal, reducer) => {
  const [state, dispatch] = useReducer(reducer, defaultVal, () => {
    const storedValue = window.localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultVal;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, dispatch];
};

export default UseLocalStorageReducer;
