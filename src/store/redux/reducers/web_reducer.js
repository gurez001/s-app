import {
  FETCH_WEB_ERROR,
  FETCH_WEB_FAILURE,
  FETCH_WEB_REQUEST,
  FETCH_WEB_SUCCESS,
  FETCH_WEB_REFRESH,
  RESET_WEB,
} from "../constants/web_actionTypes";

const initialState = {
  loading: false,
  web: [],
  error: null,
  resultPerpage: 0, // Add this if not defined
};
export const web_reducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_WEB:
      return initialState;
    case FETCH_WEB_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_WEB_SUCCESS:
      return {
        ...state,
        loading: false,
        web: [...state.web, ...action.payload.web_data],
        resultPerpage: action.payload.resultPerpage,
      };
    case FETCH_WEB_REFRESH: // Handle refreshing
      return {
        ...state,
        loading: false,
        web: action.payload.web_data, // Replace data for refresh
        resultPerpage: action.payload.resultPerpage,
      };
    case FETCH_WEB_FAILURE:
      return {
        ...state,
        loading: false,
        web: null,
        error: action.payload,
      };
    case FETCH_WEB_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
