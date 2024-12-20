import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form";
import { useTheme, Button, Box } from "@mui/material";
import RadioField from "./RadioField.tsx";
import SelectField from "./SelectField.tsx";
import InputFields from "./InputFields.tsx";
import CheckboxField from "./CheckboxField.tsx";
import { IField, IFormSchema } from "../../Interfaces/formSchema";

import "./styles.scss";

const DynamicForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<IFormSchema>();
  const [formData, setFormData] = useState<IFormSchema | null>(null);
  const theme = useTheme();
  const formFieldsTemp = useSelector((state) => state);
  const formFields: IFormSchema = formFieldsTemp as IFormSchema;

  const onSubmit: SubmitHandler<IFormSchema> = async (data) => {
    setFormData(data);
  };

  const handleReset = () => {
    reset();
    setFormData(null);
  };

  return (
    <div className={`dynamic-form ${theme.palette.mode}`}>
      <div className="dn-form">
        <div className="form-container">
          <h1>{formFields.formTitle}</h1>
          <h3>{formFields.formDescription}</h3>
          <Box
            component="form"
            // sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
          >
            {formFields.fields.map((field: IField) => {
              // To modularize the code created separate component to get the checkbox or radio button inputs
              if (field.type === "radio") {
                return (
                  <RadioField
                    field={field}
                    register={register}
                    errors={errors}
                  />
                );
              }

              if (field.type === "checkbox") {
                return (
                  <CheckboxField
                    field={field}
                    register={register}
                    errors={errors}
                  />
                );
              }

              // To modularize the code created separate component to get the dropdown inputs
              if (field.type === "select") {
                return (
                  <SelectField
                    field={field}
                    register={register}
                    errors={errors}
                  />
                );
              }

              // To modularize the code created separate component to get the all inputs which are not mentioned above
              return (
                <InputFields
                  field={field}
                  register={register}
                  errors={errors}
                />
              );
            })}

            <br />
            <div className="btn-container">
              <Button
                sx={{ width: "200px" }}
                variant="contained"
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </Button>
              <Button
                sx={{ width: "200px" }}
                variant="outlined"
                onClick={handleReset}
              >
                Reset
              </Button>
            </div>
          </Box>
        </div>
      </div>
      {formData ? (
        <pre className={theme.palette.mode}>
          {JSON.stringify(formData, null, 2)}
        </pre>
      ) : null}
    </div>
  );
};

export default DynamicForm;
