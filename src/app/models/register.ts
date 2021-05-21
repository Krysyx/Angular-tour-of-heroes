export interface Register {
  age: number;
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  confirmpassword: string;
  address: string;
  city: string;
  phone: number;
  username: string;
}

export interface ValidatedAccount {
  user: Register;
  message: string;
}

export interface ValidatedToken {
  userId: string;
  isValid: boolean;
}
