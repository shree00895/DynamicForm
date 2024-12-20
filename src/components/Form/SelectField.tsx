import React, { useState } from "react";
import { Select, MenuItem, FormLabel } from "@mui/material";
import { IOption } from "../../Interfaces/formSchema";

const SelectField = ({ field, register, errors }) => {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className="field-container" key={field.id}>
      <FormLabel id="select-field-label">{field.label}</FormLabel>
      <Select
        labelId="select-field-label"
        id="select"
        value={selectedOption}
        fullWidth
        name={field.id}
        error={errors[field.id]}
        {...register(field.id, {
          required: field.required ? `Please select an option` : false,
          ...field?.validation,
        })}
        onChange={(e) => setSelectedOption(e.target.value as string)}
      >
        {field.options.map((option: IOption) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {errors[field.id] && (
        <span className="error">{errors[field.id].message}</span>
      )}
    </div>
  );
};

export default SelectField;
