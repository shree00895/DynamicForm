import React from "react";
import { RadioGroup, FormControlLabel, Radio, FormLabel } from "@mui/material";
import { IOption } from "../../Interfaces/formSchema";

const RadioField = ({ field, errors, register }) => {
  return (
    <div className="field-container" key={field.id}>
      <FormLabel id="radio-field-label">{field.label}</FormLabel>
      <RadioGroup
        aria-labelledby="radio-field-label"
        defaultValue={undefined}
        name={field.id}
      >
        {field.options.map((option: IOption) => (
          <FormControlLabel
            name={field.id}
            control={
              <Radio
                value={option.value}
                {...register(field.id, {
                  required: field.required
                    ? `${field.id} is required field`
                    : false,
                })}
              />
            }
            label={option.label}
          />
        ))}
      </RadioGroup>
      {errors[field.id] && (
        <span className="error">{errors[field.id].message}</span>
      )}
    </div>
  );
};

export default RadioField;
