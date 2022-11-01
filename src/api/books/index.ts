import { Book } from "@models";
import { request } from "../api-client";

const booksPath = "/books";

/**
 * Books API
 */
const fetchLatestBooks = async (): Promise<Array<Book>> => {
  const response = await request({
    url: `${booksPath}/latest`,
    method: "get",
  });

  return response.data;
};

const fetchBookById = async (id: string): Promise<Book> => {
  const response = await request({
    url: `${booksPath}/${id}`,
    method: "get",
  });

  return response.data;
};

const fetchFavoriteBooks = async (userId: number): Promise<Array<Book>> => {
  const response = await request({
    url: `${booksPath}/favorites/${userId}`,
    method: "get",
  });

  return response.data;
};

export { fetchLatestBooks, fetchBookById, fetchFavoriteBooks };
