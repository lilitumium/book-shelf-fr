import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { useFormik } from "formik";
import {
  Avatar,
  Button,
  TextField,
  Typography,
  Container,
  Stack,
} from "@mui/material";

import { Alert } from "@components";
import { login } from "@api";
import { loginValidationSchema, LoginValues } from "@models";

import { LoginProps } from "./Login.props";

const Login: React.FC<LoginProps> = () => {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const { mutate } = useMutation(login, {
    onSuccess: () => {
      window.location.href = "/";
    },
    onError: (error: { data: { message: string } }) => {
      setShowAlert(true);
      setAlertMessage(error?.data?.message);
    },
  });

  const {
    handleSubmit,
    handleChange,
    errors: { email: emailError, password: passwordError },
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    } as LoginValues,
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
            <Avatar sx={{ mb: 1, bgcolor: "primary.main" }} />
            <Typography component="h1" variant="h5">
              Enter your e-mail
            </Typography>
          </Stack>
          <Stack component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              id="email"
              type="email"
              margin="normal"
              required
              fullWidth
              label="E-mail"
              name="email"
              autoComplete="email"
              helperText={emailError}
              error={!!emailError}
              autoFocus
              onChange={handleChange}
            />
            <TextField
              id="password"
              type="password"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              helperText={passwordError}
              error={!!passwordError}
              autoComplete="current-password"
              onChange={handleChange}
            />
            <Button
              type="submit"
              fullWidth
              size="large"
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: "primary" }}
            >
              Log In
            </Button>
            <Link to="/registration">Don't have an account?</Link>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export { Login };
