import * as validator from 'validator';

export const isValidEmail = (email) => {
  return validator.isEmail(email);
};
