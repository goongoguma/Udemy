import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => {
  return async (dispatch, getState) => {
    const res = await jsonPlaceholder.get("/posts");

    dispatch({ type: "FETCH_POST", payload: res });
  };
};
