import React from "react";
import { TextField, FormLabel } from "@mui/material";

const InputFields = ({ field, register, errors }) => {
  return (
    <div
      className="field-container"
      key={field.id}
      style={{ marginBottom: "10px" }}
    >
      <FormLabel id="input-field-label">{field.label}</FormLabel>
      <TextField
        fullWidth
        type={field.type}
        multiline={field.type === "textarea" ? true : false}
        rows={field.type === "textarea" ? 4 : 1}
        variant="outlined"
        placeholder={field?.placeholder}
        {...register(field.id, {
          required: field.required ? `${field.label} is required` : false,
          ...field?.validation,
        })}
        error={errors[field.id]}
        helperText={errors[field.id]?.message}
      />
    </div>
  );
};

export default InputFields;
