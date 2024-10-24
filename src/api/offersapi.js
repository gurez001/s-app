import axiosInstance from "../lib/AxiosInstance";
import { getSiteURL } from "../lib/get-site-url";
import { get_method } from "../lib/headers";
import {
  FETCH_OFFER_ERROR,
  FETCH_OFFER_REFRESH,
  FETCH_OFFER_SLIDER_FAILURE,
  FETCH_OFFER_SLIDER_REQUEST,
  FETCH_OFFER_SLIDER_SUCCESS,
  FETCH_OFFERS_FAILURE,
  FETCH_OFFERS_REQUEST,
  FETCH_OFFERS_SUCCESS,
} from "../store/redux/constants/offer_actionTypes";
const baseusel = getSiteURL();

export const get_all_offer_slider = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_OFFER_SLIDER_REQUEST });
    const { data } = await axiosInstance.get(
      `${baseusel}/api/v1/offer_slider?status=Active`,
      get_method()
    );

    dispatch({ type: FETCH_OFFER_SLIDER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: FETCH_OFFER_SLIDER_FAILURE,
      payload: error.response.data.message,
    });
  }
};

export const get_all_offer =
  (page = 1, isRefresh) =>
  async (dispatch) => {
    console.log(page = 1, isRefresh)
    try {
      dispatch({ type: FETCH_OFFERS_REQUEST });
      const { data } = await axiosInstance.get(
        `${baseusel}/api/v1/all-app-offer?status=Active&page=${page}`,
        get_method()
      );

      if (isRefresh) {
        dispatch({ type: FETCH_OFFER_REFRESH, payload: data.offer_data });
   
      } else {
        dispatch({ type: FETCH_OFFERS_SUCCESS, payload: data.offer_data });
      }
      return data.offer_data;
    } catch (error) {
      dispatch({
        type: FETCH_OFFERS_FAILURE,
        payload: error.response.data.message,
      });
    }
  };

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: FETCH_OFFER_ERROR });
};
