import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = async () => {
  // BAD APPROACH!!
  const res = await jsonPlaceholder.get("/posts");
  return {
    type: "FETCH-POSTS",
    payload: res
  };
};
