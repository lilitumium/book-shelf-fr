import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

const { VITE_API_URL } = import.meta.env;

enum QUERYKEY {
  AUTH = "auth",
  BOOKS = "books",
  FavoriteBooks = "favoriteBooks",
  BOOKBYID = "bookById",
  COLLECTIONS = "collections",
  CollectionById = "collectionById",
  TAGS = "tags",
  USERME = "userMe",
  USERS = "users",
}

const apiClient = axios.create({
  baseURL: VITE_API_URL,
});

const request = async (options: AxiosRequestConfig) => {
  const onSuccess = (response: AxiosResponse) => {
    console.debug("Request Successful!", response);

    return response.data;
  };

  const onError = (error: AxiosError) => {
    console.error("Request Failed:", error.config);

    if (error.response) {
      // Request was made but server responded with something
      // other than 2xx
      console.error("Status:", error.response.status);
      console.error("Data:", error.response.data);
      console.error("Headers:", error.response.headers);
    } else {
      // Something else happened while setting up the request
      // triggered the error
      console.error("Error Message:", error.message);
    }

    return Promise.reject(error.response || error.message);
  };

  try {
    const response = await apiClient(options);

    return onSuccess(response);
  } catch (error) {
    return onError(error as AxiosError);
  }
};

export { request, QUERYKEY };
