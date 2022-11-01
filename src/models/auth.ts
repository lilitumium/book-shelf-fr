import { object, SchemaOf, string } from "yup";

export type LoginValues = {
  email: string;
  password: string;
};

const loginValidationSchema: SchemaOf<LoginValues> = object().shape({
  email: string().email("Must be a valid Email").required("Email is required"),
  password: string()
    .min(6, "Must be 6 charachters min")
    .required("Password is required"),
});

export type RegisterValues = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
};

const registerValidationSchema: SchemaOf<RegisterValues> = object().shape({
  email: string().email("Must be a valid Email").required("Email is required"),
  firstName: string().required("First name is required"),
  lastName: string().required("Last name is required"),
  password: string()
    .min(6, "Must be 6 charachters min")
    .required("Password is required"),
});

export { loginValidationSchema, registerValidationSchema };
