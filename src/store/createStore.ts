import { createStore } from "redux";
import reducer from "../reducers/formSchema.ts";

const store = createStore(reducer);

export default store;
