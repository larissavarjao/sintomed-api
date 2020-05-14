import { isValidEmail } from '../utils/email';

export const isNewUserValid = (newUser) => {
  if (!newUser.firstName) {
    return false;
  }

  if (!newUser.email || !isValidEmail(newUser.email)) {
    return false;
  }

  if (newUser.password && newUser.password.length < 7) {
    return false;
  }

  return true;
};

export const isUserLoginValid = (email, password) => {
  if (!email) {
    return false;
  }
  if (!password) {
    return false;
  }

  return true;
};
