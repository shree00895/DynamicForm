import React from "react";

const OtherFields = ({ field, register, errors }) => {
  return (
    <div className="field-container" key={field.id}>
      <label className="field-label">{field.label}</label>
      <input
        className={errors[field.id] ? "input-error" : ""}
        type={field.type}
        placeholder={field?.placeholder}
        {...register(field.id, {
          required: field.required,
          ...field?.validation,
        })}
      />
      {errors[field.id] && (
        <span className="error">{errors[field.id].message}</span>
      )}
    </div>
  );
};

export default OtherFields;
