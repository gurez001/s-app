import {
  FETCH_BRANCH_DETAILS_FAILURE,
  FETCH_BRANCH_DETAILS_REQUEST,
  FETCH_BRANCH_DETAILS_SUCCESS,
  FETCH_BRANCH_ERROR,
  FETCH_BRANCH_FAILURE,
  FETCH_BRANCH_REQUEST,
  FETCH_BRANCH_SUCCESS,
  UPDATE_BRANCH_DETAILS_FAILURE,
  UPDATE_BRANCH_DETAILS_REQUEST,
  UPDATE_BRANCH_DETAILS_RESET,
  UPDATE_BRANCH_DETAILS_SUCCESS,
  ADD_BRANCH_DETAILS_FAILURE,
  ADD_BRANCH_DETAILS_REQUEST,
  ADD_BRANCH_DETAILS_RESET,
  ADD_BRANCH_DETAILS_SUCCESS,
  BRANCH_RESET,
  FETCH_BRANCH_REFRESH,
} from "../constants/branch_actionTypes";

const initialState = {
  loading: false,
  branch: [],
  error: null,
  resultPerpage: 0, // Add this if not defined
};

export const branch_reducer = (state = initialState, action) => {
  switch (action.type) {
    case BRANCH_RESET:
      return initialState;
    case FETCH_BRANCH_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_BRANCH_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        branch: [...state.branch, ...action.payload.branch],
        resultPerpage: action.payload.resultPerpage,
      };
    case FETCH_BRANCH_REFRESH:
      return {
        ...state,
        loading: false,
        branch: action.payload.branch,
        resultPerpage: action.payload.resultPerpage,
      };

    case FETCH_BRANCH_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        branch: null,
        error: action.payload,
      };

    case FETCH_BRANCH_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
