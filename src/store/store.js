import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { otpReducer, userReducer } from "./redux/reducers/user_reducer";
import { web_reducer } from "./redux/reducers/web_reducer";
import { branch_reducer } from "./redux/reducers/branch_reducer";
import { offer_reducer, offer_slider_reducer } from "./redux/reducers/offer_reduer";

const reducer = combineReducers({
  user: userReducer,
  otp:otpReducer,
  web:web_reducer,
  branch:branch_reducer,
  offer_slider: offer_slider_reducer,
  offers: offer_reducer,
});

let inialState = {};

const middleware = [thunk];

export const store = createStore(
  reducer,
  inialState,
  applyMiddleware(...middleware)
);
