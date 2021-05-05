const USERNAME_ERROR_STATUS =
  "Username is required and must be atleast 3 characters long";
const PASSWORD_ERROR_STATUS =
  "Password is required, must have atleast 1 Upper case character, 1 Lower case character, and atleast 1 number";
const EMAIL_ERROR_STATUS = "Email is required and must be valid";
const ADDRESS_ERROR_STATUS = "Address is required";
const CITY_ERROR_STATUS = "City is required";

export default {
  username: USERNAME_ERROR_STATUS,
  password: PASSWORD_ERROR_STATUS,
  confirmpassword: PASSWORD_ERROR_STATUS,
  email: EMAIL_ERROR_STATUS,
  address: ADDRESS_ERROR_STATUS,
  city: CITY_ERROR_STATUS,
};
