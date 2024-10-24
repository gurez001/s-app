import { getSiteURL } from "../lib/get-site-url";
import { others_method } from "../lib/headers";
import {
  FETCH_USER_ERROR,
  FETCH_USER_FAILURE,
  FETCH_USER_OTP_DETAILS_FAILURE,
  FETCH_USER_OTP_DETAILS_REQUEST,
  FETCH_USER_OTP_DETAILS_SUCCESS,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "../store/redux/constants/user_actionTypes";
import axios from "axios";
const baseusel = getSiteURL();

import axiosInstance from "../lib/AxiosInstance";
import { saveToken, setToken } from "../lib/AsyncStorage/asyncStorage";

export const user_auth = (phone_number, uuid) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_USER_REQUEST });

    const { data } = await axiosInstance.post(
      `${baseusel}/api/v1/auth/authenticate`,
      {
        phone_number,
        uuid,
      },
      others_method()
    );

    dispatch({ type: FETCH_USER_SUCCESS, payload: data.user_data });
  } catch (error) {
    dispatch({
      type: FETCH_USER_FAILURE,
      payload: error.response.data.message,
    });
  }
};



export const LoadUser = () => async (dispatch) => {
  try {
    dispatch({ type: GET_USER_REQUEST });

    const { data } = await axios.get(
      `${baseusel}/api/v1/auth/profie`,
      get_method()
    );
    console.log(data)
    dispatch({ type: GET_USER_SUCCESS, payload: data.User });
  } catch (error) {
    dispatch({ type: GET_USER_FAILURE, payload: error.response.data.message });
  }
};

//______________________________________________________________________________________
export const Otp_auth = (otp, user_id, uuid) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_USER_OTP_DETAILS_REQUEST });
    const { data } = await axiosInstance.put(
      `${baseusel}/api/v1/auth/otp`,
      {
        otp,
        user_id,
        uuid,
      },
      others_method()
    );
    const token = data.token;
   
    if (token) {
      saveToken('token',token)
    }
    dispatch({ type: FETCH_USER_OTP_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: FETCH_USER_OTP_DETAILS_FAILURE,
      payload: error.response.data.message,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: FETCH_USER_ERROR });
};
