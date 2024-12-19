import { IFormSchema } from "../Interfaces/formSchema.ts";

const initialState: IFormSchema = {
  formTitle: "",
  formDescription: "",
  fields: [],
};

interface IAction {
  type: string;
  payload?: IFormSchema;
}

const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case "save":
      console.log("data ", action.payload);
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default reducer;
