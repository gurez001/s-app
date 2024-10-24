import {
  ADD_USER_FAILURE,
  ADD_USER_REQUEST,
  ADD_USER_RESET,
  ADD_USER_SUCCESS,
  FETCH_USER_DETAILS_FAILURE,
  FETCH_USER_DETAILS_REQUEST,
  FETCH_USER_DETAILS_SUCCESS,
  FETCH_USER_ERROR,
  FETCH_USER_FAILURE,
  FETCH_USER_OTP_DETAILS_FAILURE,
  FETCH_USER_OTP_DETAILS_REQUEST,
  FETCH_USER_OTP_DETAILS_RESET,
  FETCH_USER_OTP_DETAILS_SUCCESS,
  FETCH_USER_REQUEST,
  FETCH_USER_RESET,
  FETCH_USER_SUCCESS,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  UPDATE_USER_DETAILS_FAILURE,
  UPDATE_USER_DETAILS_REQUEST,
  UPDATE_USER_DETAILS_RESET,
  UPDATE_USER_DETAILS_SUCCESS,
  USER_PASSWORD_RESET_FAILURE,
  USER_PASSWORD_RESET_REQUEST,
  USER_PASSWORD_RESET_RESET,
  USER_PASSWORD_RESET_SUCCESS,
} from "../constants/user_actionTypes";

export const userReducer = (state = { user: [], user_details: {} }, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
    case GET_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_USER_SUCCESS:
    case GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user_details: action.payload,
        success: true,
      };

    case FETCH_USER_RESET:
      return {
        ...state,
        loading: false,
        user_details: action.payload,
        success: null,
      };
    case FETCH_USER_FAILURE:
    case GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user_details: null,
        success: null,
        error: action.payload,
      };
    case FETCH_USER_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const otpReducer = (state = { user_details: {} }, action) => {
  switch (action.type) {
    case FETCH_USER_OTP_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_USER_OTP_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        user_details: action.payload,
        success: true,
      };

    case FETCH_USER_OTP_DETAILS_RESET:
      return {
        ...state,
        loading: false,
        success: null,
      };

    case FETCH_USER_OTP_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_USER_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
