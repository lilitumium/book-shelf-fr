import React, { useContext } from "react";
import { useFormik } from "formik";
import { useMutation, useQuery } from "react-query";
import {
  Modal,
  Stack,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { createCollection, fetchLatestBooks, QUERYKEY } from "@api";
import {
  createCollectionValidationSchema,
  CreateCollectionValues,
} from "@models";

import { CreateCollectionProps } from "./Create-Collection.props";
import { AppContext } from "@context";

const books = [
  { id: 1, title: "Book 1" },
  { id: 2, title: "Book 2" },
];

const CreateCollection: React.FC<CreateCollectionProps> = ({
  open,
  onClose,
  ...rest
}) => {
  const { user } = useContext(AppContext);
  const { mutate } = useMutation(createCollection, {
    onSuccess: () => {
      console.log("success");
    },
    onError: (error) => {
      // setShowAlert(true);
      // setAlertMessage(error?.data?.message);
    },
  });
  const { isLoading: isBooksLoading, data: latestBooks } = useQuery(
    [QUERYKEY.BOOKS],
    fetchLatestBooks
  );

  const { handleSubmit, handleChange, errors, values, resetForm } = useFormik({
    initialValues: {
      title: "",
      bookIds: [],
      thumbnail: "",
      creatorId: 0,
    } as CreateCollectionValues,
    validationSchema: createCollectionValidationSchema,
    onSubmit: (values) => {
      mutate({
        ...values,
        creatorId: user?.id,
      });
      resetForm();
    },
  });
  return (
    <Modal open={open} onClose={onClose} {...rest}>
      <Stack
        spacing={1}
        sx={{
          position: "absolute",
          width: "100%",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          maxWidth: "sm",
          backgroundColor: "white",
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={2}
          p={2}
        >
          <Typography variant="h5" textAlign="center">
            Create your collection
          </Typography>
          <Stack
            justifyContent="flex-end"
            onClick={onClose as any}
            sx={{ cursor: "pointer" }}
          >
            <CloseIcon />
          </Stack>
        </Stack>
        <Stack spacing={2} p={2} component="form" onSubmit={handleSubmit}>
          <TextField
            id="title"
            name="title"
            label="Title"
            required
            helperText={errors.title}
            error={!!errors.title}
            onChange={handleChange}
          />
          <FormControl fullWidth>
            <InputLabel id="books-select-label">Add books</InputLabel>
            <Select
              id="bookIds"
              name="bookIds"
              labelId="books-select-label"
              label="Add books"
              multiple
              value={values.bookIds}
              onChange={handleChange}
              error={!!errors.bookIds}
              required
            >
              {latestBooks?.map((book) => (
                <MenuItem key={book.id} value={book.id}>
                  {book.title}
                </MenuItem>
              ))}
            </Select>
            {errors.bookIds && (
              <Typography variant="caption" color="error">
                {errors.bookIds}
              </Typography>
            )}
          </FormControl>
          <TextField
            id="thumbnail"
            name="thumbnail"
            label="Image link"
            onChange={handleChange}
          />
          <Button variant="contained" color="secondary" type="submit">
            Create
          </Button>
        </Stack>
      </Stack>
    </Modal>
  );
};

export { CreateCollection };
