import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPostsAndUsers = () => {
  return async dispatch => {
    console.log("About to fetched posts!");
    await dispatch(fetchPosts());
    console.log("fetched posts!");
  };
};

export const fetchPosts = () => {
  return async (dispatch, getState) => {
    const res = await jsonPlaceholder.get("/posts");

    dispatch({ type: "FETCH_POSTS", payload: res.data });
  };
};

export const fetchUser = id => {
  return async (dispatch, getState) => {
    const res = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: "FETCH_USER", payload: res.data });
  };
};

// export const fetchUser = id => {
//   return async (dispatch, getState) => {
//     const res = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({ type: "FETCH_USER", payload: res.data });
//   };
// };
