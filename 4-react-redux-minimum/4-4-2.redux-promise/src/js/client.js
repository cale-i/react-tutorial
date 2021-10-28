import { applyMiddleware, createStore } from "redux";
import axios from "axios";
import { createLogger } from "redux-logger";
import { createPromise } from "redux-promise-middleware";
const promise = createPromise({ type: { fulfilled: "success" } });

const initialState = {
	fetching: false,
	fetched: false,
	users: [],
	error: null,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "FETCH_USERS_PENDING":
			return { ...state, fetchin: true };
		case "FETCH_USERS_REFECTED":
			return { ...state, fetching: false, error: action.payload };
		case "RECEIVE_USERS_FULFILLED":
			return {
				...state,
				fetching: false,
				fetched: true,
				users: action.payload,
			};
	}
	return state;
};

const middleware = applyMiddleware(promise, createLogger());
const store = createStore(reducer, middleware);

store.dispatch({
	type: "FETCH_USERS", // prefix
	payload: axios.get("http://localhost:18080"),
});
