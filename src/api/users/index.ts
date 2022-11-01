import axios from "axios";
import { User } from "@models";
import { request } from "../api-client";

const { VITE_API_URL } = import.meta.env;
const usersPath = "/users";

/**
 * Users API
 */
const fetchUsers = async () => {
  const response = await axios.get(`${VITE_API_URL}${usersPath}`);

  return response.data;
};

const fetchUserById = async (id: number): Promise<User> => {
  const response = await request({
    url: `${usersPath}/${id}`,
    method: "GET",
  });

  return response.data;
};

const addToFavorites = async ({
  userId,
  bookId,
}: {
  userId: number;
  bookId: number;
}) => {
  const response = await request({
    url: `${usersPath}/${userId}/favorites`,
    method: "POST",
    data: {
      bookId,
    },
  });

  return response.data;
};

export { fetchUsers, fetchUserById, addToFavorites };
