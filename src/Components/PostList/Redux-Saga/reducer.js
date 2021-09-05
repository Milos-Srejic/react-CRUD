import produce from "immer";
import { SET_POSTS_SUCCESS, SET_POSTS_FAILURE } from "./constants";

// In initial state default state must be of the same type like it will become after the state changes
const initialState = {
	isLoading: false,
	posts: [],
	error: "",
};

/* eslint-disable default-case */
const postReducer = (state = initialState, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			case SET_POSTS_SUCCESS:
				draft.isLoading = false;
				draft.posts = action.payload;
				draft.error = "";

			case SET_POSTS_FAILURE:
				draft.isLoading = false;
				draft.posts = [];
				draft.error = action.payload;
		}
	});

export default postReducer;
