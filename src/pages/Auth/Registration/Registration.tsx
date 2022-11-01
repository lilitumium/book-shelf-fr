import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { useFormik } from "formik";
import {
  Button,
  TextField,
  Typography,
  Container,
  Avatar,
  Stack,
} from "@mui/material";

import { Alert } from "@components";
import { register } from "@api";
import { loginValidationSchema, RegisterValues } from "@models";

import { RegistrationProps } from "./Registration.props";

const Registration: React.FC<RegistrationProps> = () => {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const { mutate } = useMutation(register, {
    onSuccess: () => {
      navigate("/login");
    },
    onError: (error: { data: { message: string } }) => {
      setShowAlert(true);
      setAlertMessage(error?.data?.message);
    },
  });

  const {
    handleSubmit,
    handleChange,
    errors: {
      email: emailError,
      firstName: firstNameError,
      lastName: lastNameError,
      password: passwordError,
    },
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    } as RegisterValues,
    validationSchema: loginValidationSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values) => {
      mutate(values);
    },
  });

  return (
    <>
      <Alert
        open={showAlert}
        severity="error"
        title="Authorization Error"
        description={alertMessage}
        onClose={() => setShowAlert(false)}
      />
      <Container component="main" maxWidth="xs">
        <Stack sx={{ marginTop: 8 }}>
          <Stack alignItems="center">
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }} />
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
          </Stack>
          <Stack
            flexGrow={1}
            component="form"
            spacing={2}
            mt={2}
            onSubmit={handleSubmit}
          >
            <TextField
              id="email"
              name="email"
              label="Email Address"
              variant="outlined"
              required
              fullWidth
              autoFocus
              helperText={emailError}
              error={!!emailError}
              onChange={handleChange}
            />
            <TextField
              id="firstName"
              name="firstName"
              label="First Name"
              variant="outlined"
              required
              fullWidth
              helperText={firstNameError}
              error={!!firstNameError}
              onChange={handleChange}
            />
            <TextField
              id="lastName"
              name="lastName"
              label="Last Name"
              variant="outlined"
              required
              fullWidth
              helperText={lastNameError}
              error={!!lastNameError}
              onChange={handleChange}
            />
            <TextField
              id="password"
              name="password"
              label="Password"
              type="password"
              variant="outlined"
              required
              fullWidth
              helperText={passwordError}
              error={!!passwordError}
              onChange={handleChange}
            />
            <Button
              type="submit"
              fullWidth
              size="large"
              variant="contained"
              color="primary"
            >
              Sign Up
            </Button>
            <Link to="/login">Already have an account? Log in</Link>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export { Registration };
