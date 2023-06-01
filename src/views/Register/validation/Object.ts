import { User } from "../types";
import { TObjectErrors } from "./types";

const ObjectValidation = (obj: User) => {
  const errors: TObjectErrors = {} as TObjectErrors;

  if (!!!obj?.firstName) {
    errors.firstName = { message: "First name is required" };
  } else {
    if (obj.firstName.length < 2) {
      errors.firstName = {
        message: "First name must be at least 2 characters",
      };
    } else {
      if (errors.firstName) {
        delete errors.firstName;
      }
    }
  }

  if (!!!obj?.middleName) {
    errors.middleName = { message: "Middle name is required" };
  } else {
    if (obj.middleName.length < 2) {
      errors.middleName = {
        message: "Middle name must be at least 2 characters",
      };
    } else {
      if (errors.middleName) {
        delete errors.middleName;
      }
    }
  }

  if (!!!obj?.lastName) {
    errors.lastName = { message: "Last name is required" };
  } else {
    if (obj.lastName.length < 2) {
      errors.lastName = {
        message: "Last name must be at least 2 characters",
      };
    } else {
      if (errors.lastName) {
        delete errors.lastName;
      }
    }
  }

  if (!!!obj?.email) {
    errors.email = { message: "E-mail is required" };
  } else {
    if (obj.email.length < 2) {
      errors.email = {
        message: "E-mail must be at least 2 characters",
      };
    } else {
      if (errors.email) {
        delete errors.email;
      }
    }
  }

  if (!!!obj?.password) {
    errors.password = { message: "Password is required" };
  } else {
    if (obj.password.length < 6) {
      errors.password = {
        message: "Password must be at least 6 characters",
      };
    } else {
      if (errors.password) {
        delete errors.password;
      }
    }
  }

  if (!!!obj?.confirmPassword) {
    errors.confirmPassword = { message: "Confirm password is required" };
  } else {
    if (obj.confirmPassword.length < 6) {
      errors.confirmPassword = {
        message: "Password must be at least 6 characters",
      };
    } else if (obj.confirmPassword !== obj.password) {
      errors.confirmPassword = {
        message: "Password and confirm password must be the same",
      };
    } else {
      if (errors.confirmPassword) {
        delete errors.confirmPassword;
      }
    }
  }

  if (!!!obj?.role) {
    errors.role = { message: "Role is required" };
  } else {
    if (errors.role) {
      delete errors.role;
    }
  }

  return errors;
};

export default ObjectValidation;
