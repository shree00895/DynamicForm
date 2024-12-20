import React from "react";
import { parseValidationRules } from "../../utils/format.ts";

const TextAreaField = ({ field, register, errors }) => {
  return (
    <div className="field-container" key={field.id}>
      <label className="field-label">{field.label}</label>
      <textarea
        className={`text-area-field ${errors[field.id] ? "input-error" : ""}`}
        placeholder={field.placeholder}
        rows={4}
        {...register(field.id, {
          required: field.required ? `${field.id} is required field` : false,
          ...parseValidationRules(field?.validation),
        })}
      ></textarea>
      <div className="error-wrapper">
        {errors[field.id] && (
          <span className="error">{errors[field.id].message}</span>
        )}
      </div>
    </div>
  );
};

export default TextAreaField;
