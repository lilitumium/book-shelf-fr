import axios from "axios";
import { request } from "../api-client";

const { VITE_API_URL } = import.meta.env;
const tagsPath = "/tags";

/**
 * Tags API
 */
const fetchLatestTags = async () => {
  const response = await request({
    url: `${tagsPath}/latest`,
    method: "get",
  });

  return response.data;
};

/**
 * Fetch Tag by id
 */
const fetchTagById = async (id: string) => {
  const response = await axios.get(`${VITE_API_URL}${tagsPath}/${id}`);

  return response.data;
};

export { fetchLatestTags, fetchTagById };
