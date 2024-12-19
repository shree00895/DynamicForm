import React from "react";

const RadioCheckboxField = ({ field, errors, register }) => {
  return (
    <div className="field-container" key={field.id}>
      <label className="field-label">{field.label}</label>
      {field.options.map((option, i) => (
        <label key={i} className="radio-checkbox-label">
          <input
            type={field.type}
            value={option.value}
            {...register(field.id, {
              required: field.required
                ? `${field.id} is required field`
                : field.required,
            })}
          />
          {option.label}
        </label>
      ))}
      {errors[field.id] && (
        <span className="error">{errors[field.id].message}</span>
      )}
    </div>
  );
};

export default RadioCheckboxField;
