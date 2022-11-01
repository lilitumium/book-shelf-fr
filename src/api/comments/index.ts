import { AddCommentValues } from "@models";
import { request } from "../api-client";

const commentsPath = "/comments";

/**
 * Comments API
 */
const addComment = async (data: AddCommentValues): Promise<void> => {
  await request({
    url: commentsPath,
    method: "POST",
    data,
  });
};

export { addComment };
