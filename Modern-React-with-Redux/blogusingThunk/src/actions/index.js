import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => {
  return function() {
    const promise = jsonPlaceholder.get("/posts");
    return {
      type: "FETCH-POSTS",
      payload: promise
    };
  };
};
