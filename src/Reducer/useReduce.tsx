import { useReducer } from "react";
import { State } from "../types/ReducerState";

export type Action = {
  type: FormAction;
  payload: any;
};
export const initialState: State = {
  currentStep: 0,
  name: "",
  birthDate: "",
  city: "",
  CPF: "",
  district: "",
  email: "",
  houseNumber: 0,
  password: "",
  state: "",
  street: "",
  zipCode: "",
};
export enum FormAction {
  currentStep,
  name,
  birthDate,
  city,
  CPF,
  district,
  email,
  houseNumber,
  password,
  state,
  street,
  zipCode,
}
export const formReduce = (state: State, action: Action) => {
  switch (action.type) {
    case FormAction.currentStep:
      return { ...state, currentStep: action.payload };
    case FormAction.name:
      return { ...state, name: action.payload };
    case FormAction.birthDate:
      return { ...state, birthDate: action.payload };
    case FormAction.city:
      return { ...state, city: action.payload };
    case FormAction.CPF:
      return { ...state, CPF: action.payload };
    case FormAction.district:
      return { ...state, district: action.payload };
    case FormAction.email:
      return { ...state, email: action.payload };
    case FormAction.houseNumber:
      return { ...state, houseNumber: action.payload };
    case FormAction.password:
      return { ...state, password: action.payload };
    case FormAction.state:
      return { ...state, state: action.payload };
    case FormAction.street:
      return { ...state, street: action.payload };
    case FormAction.zipCode:
      return { ...state, zipCode: action.payload };
    default:
      return state;
  }
};
export const ReduceData = () => {
  return useReducer(formReduce, initialState);
};
