import { applyMiddleware, createStore } from "redux";

const reducer = (state = 0, action) => {
	switch (action.type) {
		case "INC":
			return state + action.payload;
		case "DEC":
			return state - action.payload;
		case "ERR":
			throw new Error("It's error!!!!");
	}
	return state;
};

const logger = (store) => (next) => (action) => {
	console.log("action fired", action);
	next(action);
};
const error = (store) => (next) => (action) => {
	try {
		next(action);
	} catch (e) {
		console.log("Error was occured", e);
	}
};

const middleware = applyMiddleware(logger, error);

// register
const store = createStore(reducer, 1, middleware);

store.subscribe(() => {
	console.log("store changed", store.getState());
});

store.dispatch({ type: "INC", payload: 1 });
store.dispatch({ type: "INC", payload: 2 });
store.dispatch({ type: "INC", payload: 22 });
store.dispatch({ type: "INC", payload: 222 });
store.dispatch({ type: "DEC", payload: 1000 });
store.dispatch({ type: "ERR" });
