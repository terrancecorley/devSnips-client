// Must contain a value
export const required = (value) =>
  !value ? 'Field must not be blank' : null;

// The value is non-empty
export const checkEmpty = (value) =>
  value.trim() === '' ? 'Field must not be empty' : null;

export const noSpaces = (value) =>
  value.trim().length === value.length ? null : 'May not lead or end with spaces';

// Value must be at least 10 chars
export const minLength = (value) =>
  value.length >= 10 ? null : 'Must be at least 10 characters long';

// Value can't exceed 72 chars
export const maxLength = (value) =>
  value.length <= 72 ? null : 'May not be greater than 72 characters';
