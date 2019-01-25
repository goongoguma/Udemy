import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => {
  return async (dispatch, getState) => {
    const res = await jsonPlaceholder.get("/posts");

    dispatch({ type: "FETCH_POSTS", payload: res.data });
  };
};

export const fetchUser = id => {
  return async (dispatch, getState) => {
    const res = await jsonPlaceholder.get(`/user/${id}`);

    dispatch({ stype: "FETCH_USER", payload: res.data });
  };
};
