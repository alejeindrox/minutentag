import { useCallback, useState } from "react";

export const useCounter = (initialState = 0, increment = 1) => {
  const [state, setState] = useState(initialState);

  const counter = useCallback(() => setState((state) => state + increment), [increment]);

  return [state, counter];
};
