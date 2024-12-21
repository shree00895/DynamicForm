import React from "react";
import { TextField, FormLabel } from "@mui/material";

const InputFields = ({ field, register, errors, control }) => {
  return (
    <div
      className="field-container"
      key={field.id}
      style={{ marginBottom: "10px" }}
    >
      {["file", "date"].includes(field.type) ? (
        <FormLabel id="input-field-label">{field.label}</FormLabel>
      ) : null}

      <TextField
        fullWidth
        type={field.type}
        label={["file", "date"].includes(field.type) ? null : field.label}
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
