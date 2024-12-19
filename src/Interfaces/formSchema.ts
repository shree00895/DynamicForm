export interface IOption {
  value: string;
  label: string;
}

export interface IField {
  id: string;
  type: string;
  label: string;
  required: boolean;
  placeholder?: string;
  validation?: object;
  options?: IOption[];
}

export interface IFormSchema {
  formTitle: string;
  formDescription: string;
  fields: IField[];
}
