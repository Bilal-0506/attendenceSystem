import { RedSnackbar } from '..';

export const emailFormat =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const passwordFormat =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/;

export const isLoginValid = (email, password) => {
  if (!emailFormat.test(email)) {
    RedSnackbar('Enter valid email address');
    return false;
  }
  if (!passwordFormat.test(password)) {
    RedSnackbar(
      '8 Characters required, One Uppercase, One Lowercase, One Number and one special case Character',
    );
    return false;
  }
  return true;
};

export const isForgotValid = email => {
  if (!emailFormat.test(email)) {
    RedSnackbar('Enter valid email address');
    return false;
  }
  return true;
};

export const isSignupValid = (email, password, confirmPassword) => {
  if (!emailFormat.test(email)) {
    RedSnackbar('Enter valid email address');
    return false;
  }
  if (!passwordFormat.test(password)) {
    RedSnackbar(
      '8 Characters required, One Uppercase, One Lowercase, One Number and one special case Character',
    );
    return false;
  }
  if (!passwordFormat.test(confirmPassword)) {
    RedSnackbar(
      '8 Characters required, One Uppercase, One Lowercase, One Number and one special case Character',
    );
    return false;
  }
  if (password != confirmPassword) {
    RedSnackbar("Password didn't match");
    return false;
  }
  return true;
};

export const isChangePasswordValid = (password, newPassword) => {
  if (!passwordFormat.test(password)) {
    RedSnackbar(
      '8 Characters required, One Uppercase, One Lowercase, One Number and one special case Character',
    );
    return false;
  }
  if (!passwordFormat.test(newPassword)) {
    RedSnackbar(
      '8 Characters required, One Uppercase, One Lowercase, One Number and one special case Character',
    );
    return false;
  }
  if (password != newPassword) {
    RedSnackbar('Password not matched');
    return false;
  }
  return true;
};

export const isEditValid = (image, firstName, lastName, phoneNumber, address) => {
  if (image == null) {
    RedSnackbar('Image required');
    return false;
  }
  if (firstName == '') {
    RedSnackbar('First name required');
    return false;
  }
  if (lastName == '') {
    RedSnackbar('Last name required');
    return false;
  }
  if (phoneNumber == '') {
    RedSnackbar('Phone number required');
    return false;
  }
  if (/^\d+$/.test(phoneNumber)) {
    RedSnackbar('Phone number only contains numbers');
    return false;
  }
  if (address == '') {
    RedSnackbar('Address required');
    return false;
  }
  return true;
};

export const isDeleteValid = password => {
  if (!passwordFormat.test(password)) {
    RedSnackbar(
      '8 Characters required, One Uppercase, One Lowercase, One Number and one special case Character',
    );
    return false;
  }
  return true;
};


