import React from "react";
import { IOption } from "../../Interfaces/formSchema";

const RadioCheckboxField = ({ field, errors, register }) => {
  return (
    <div className="field-container" key={field.id}>
      <label className="field-label">{field.label}</label>
      {field.options.map((option: IOption) => (
        <label key={option.value} className="radio-checkbox-label">
          <input
            type={field.type}
            value={option.value}
            {...register(field.id, {
              required: field.required
                ? `${field.id} is required field`
                : false,
            })}
          />
          {option.label}
        </label>
      ))}
      <div className="error-wrapper">
        {errors[field.id] && (
          <span className="error">{errors[field.id].message}</span>
        )}
      </div>
    </div>
  );
};

export default RadioCheckboxField;
