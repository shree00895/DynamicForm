import React from "react";

const SelectField = ({ field, register, errors }) => {
  return (
    <div className="field-container" key={field.id}>
      <label className="field-label">{field.label}</label>
      <select
        className={`select-field ${errors[field.id] ? "input-error" : ""}`}
        {...register(field.id, {
          required: field.required ? `Please select an option` : false,
          ...field?.validation,
        })}
      >
        <option value="">Select</option>
        {field?.options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {errors[field.id] && (
        <span className="error">{errors[field.id].message}</span>
      )}
    </div>
  );
};

export default SelectField;
