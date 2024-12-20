// Function to dynamically handle JSON validations
export const parseValidationRules = (validation: any) => {
  if (!validation) return {};
  const rules: any = { ...validation };
  if (
    validation?.pattern?.value &&
    typeof validation?.pattern?.value === "string"
  ) {
    rules.pattern.value = new RegExp(validation.pattern.value.slice(1, -1));
  }
  return rules;
};
