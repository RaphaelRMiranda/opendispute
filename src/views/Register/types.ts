export interface User {
  _id?: string;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword?: string;
  role: string;
}
