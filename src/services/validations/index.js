import {RedSnackbar} from '..';

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

export const isEditValid = (image, name, address) => {
  if (image == null) {
    RedSnackbar('Image required');
    return false;
  }
  if (name == '') {
    RedSnackbar('Name required');
    return false;
  }
  if (address == '') {
    RedSnackbar('Address required');
    return false;
  }
  return true;
};

export const isDisputeValid = (email, description) => {
  if (!emailFormat.test(email)) {
    RedSnackbar('Enter valid email address');
    return false;
  }
  if (description == '') {
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

export const isInfotmationValid = (
  companyName,
  workerName,
  phoneNumber,
  email,
  date,
) => {
  if (companyName == '') {
    RedSnackbar('Enter valid company name');
    return false;
  }
  if (workerName == '') {
    RedSnackbar('Enter valid worker name');
    return false;
  }
  if (isNaN(phoneNumber)) {
    RedSnackbar('Phone number only numbers');
    return false;
  }
  if (!emailFormat.test(email)) {
    RedSnackbar('Enter valid email address');
    return false;
  }
  if (date == '') {
    RedSnackbar('Select the valid date');
    return false;
  }
  return true;
};

export const isScheduleValid = (date, time, note) => {
  if (date == '' && time == '' && note == '') {
    RedSnackbar('Required');
    return false;
  }
  if (date == '') {
    RedSnackbar('Select the valid date');
    return false;
  }
  if (time == '') {
    RedSnackbar('Select the valid time');
    return false;
  }
  if (note == '') {
    RedSnackbar('Notes require');
    return false;
  }
  return true;
};
