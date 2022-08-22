import { createContext, ReactNode } from "react";
import { State } from "../types/ReducerState";
import { Action, ReduceData } from "../Reducer/useReduce";

//context
type ContextType = {
  state: State;
  dispatch: (action: Action) => void;
};

export const FormContext = createContext<ContextType | undefined>(undefined);

type ChildreType = {
  children: ReactNode;
};

export const ContexProvider = ({ children }: ChildreType) => {
  const [state, dispatch] = ReduceData();
  const value = { state, dispatch };
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};
