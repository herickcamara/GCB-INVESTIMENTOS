import { useReducer } from "react";
import { State } from "../types/ReducerState";

export type Action = {
  type: FormAction;
  payload: any;
};
export const initialState: State = {
  setCurrentStep: 0,
  setName: "",
  setLastName: "",
  dateNacimento: "",
  city: "",
  cpf: "",
  district: "",
  email: "",
  numberHouse: 0,
  password: "",
  uf: "",
  street: "",
  zipCode: "",
};
export enum FormAction {
  setCurrentStep,
  setName,
  setLastName,
  dateNacimento,
  city,
  cpf,
  district,
  email,
  numberHouse,
  password,
  uf,
  street,
  zipCode,
}
export const formReduce = (state: State, action: Action) => {
  switch (action.type) {
    case FormAction.setCurrentStep:
      return { ...state, currentStep: action.payload };
    case FormAction.setName:
      return { ...state, setName: action.payload };
    case FormAction.setLastName:
      return { ...state, setLastName: action.payload };
    case FormAction.dateNacimento:
      return { ...state, dateNacimento: action.payload };
    case FormAction.city:
      return { ...state, city: action.payload };
    case FormAction.cpf:
      return { ...state, cpf: action.payload };
    case FormAction.district:
      return { ...state, district: action.payload };
    case FormAction.email:
      return { ...state, email: action.payload };
    case FormAction.numberHouse:
      return { ...state, numberHouse: action.payload };
    case FormAction.password:
      return { ...state, password: action.payload };
    case FormAction.uf:
      return { ...state, uf: action.payload };
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
