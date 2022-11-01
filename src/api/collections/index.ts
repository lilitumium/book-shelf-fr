import axios from "axios";
import { Collection, CollectionGroup, CreateCollectionValues } from "@models";
import { request } from "../api-client";

const { VITE_API_URL } = import.meta.env;
const collectionsPath = "/collections";

/**
 * Collections API
 */
const createCollection = async (collection: CreateCollectionValues) => {
  console.log("createCollection", collection);
  const response = request({
    url: `${collectionsPath}`,
    method: "post",
    data: collection,
  });

  return response;
};

const fetchCollections = async (): Promise<CollectionGroup> => {
  const response = await axios.get(`${VITE_API_URL}${collectionsPath}`);

  return response.data;
};

const fetchLatestCollections = async () => {
  const response = await request({
    url: `${collectionsPath}/latest`,
    method: "get",
  });

  return response.data;
};

const fetchCollectionById = async (id: string): Promise<Collection> => {
  const response = await request({
    url: `${collectionsPath}/${id}`,
    method: "get",
  });

  return response.data;
};

export {
  createCollection,
  fetchCollections,
  fetchLatestCollections,
  fetchCollectionById,
};
