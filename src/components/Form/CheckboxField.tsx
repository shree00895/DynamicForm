import React from "react";
import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormLabel,
} from "@mui/material";
import { IOption } from "../../Interfaces/formSchema";

const CheckboxField = ({ field, errors, register }) => {
  return (
    <div className="field-container" key={field.id}>
      <FormLabel id="checkbox-field-label">{field.label}</FormLabel>
      <FormGroup>
        {field.options.map((option: IOption) => (
          <FormControlLabel
            key={option.value}
            control={
              <Checkbox
                sx={{ height: "30px" }}
                {...register(field.id, {
                  required: field.required
                    ? `${field.id} is required field`
                    : false,
                })}
                value={option.value}
                name={field.id}
                placeholder="Select"
              />
            }
            label={option.label}
          />
        ))}
      </FormGroup>

      {errors[field.id] && (
        <span className="error">{errors[field.id].message}</span>
      )}
    </div>
  );
};

export default CheckboxField;
