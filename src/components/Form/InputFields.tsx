import React from "react";
import { parseValidationRules } from "../../utils/format.ts";

const InputFields = ({ field, register, errors }) => {
  return (
    <div className="field-container" key={field.id}>
      <label className="field-label">{field.label}</label>
      <input
        className={errors[field.id] ? "input-error" : ""}
        type={field.type}
        placeholder={field?.placeholder}
        {...register(field.id, {
          required: field.required ? `${field.label} is required` : false,
          ...parseValidationRules(field?.validation),
        })}
      />
      <div className="error-wrapper">
        {errors[field.id] && (
          <span className="error">{errors[field.id].message}</span>
        )}
      </div>
    </div>
  );
};

export default InputFields;
