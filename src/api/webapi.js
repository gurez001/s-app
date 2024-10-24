import axiosInstance from "../lib/AxiosInstance";
import { getSiteURL } from "../lib/get-site-url";
import { get_method } from "../lib/headers";
import {
  FETCH_WEB_FAILURE,
  FETCH_WEB_REFRESH,
  FETCH_WEB_REQUEST,
  FETCH_WEB_SUCCESS,
  RESET_WEB,
} from "../store/redux/constants/web_actionTypes";
const baseusel = getSiteURL();
export const get_all_website =
  (page = 1, isRefresh) =>
  async (dispatch) => {
    try {
      if (isRefresh) {
        dispatch({ type: RESET_WEB }); // Reset state before fetching new data
      }
      dispatch({ type: FETCH_WEB_REQUEST });
      const { data } = await axiosInstance.get(
        `${baseusel}/api/v1/app-websites?status=Active&page=${page}`,
        get_method()
      );

      if (isRefresh) {
        dispatch({ type: FETCH_WEB_REFRESH, payload: data });
      } else {
        dispatch({ type: FETCH_WEB_SUCCESS, payload: data });
      }
      return data;
    } catch (error) {
      dispatch({
        type: FETCH_WEB_FAILURE,
        payload: error.response.data.message,
      });
    }
  };

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: FETCH_WEB_FAILURE });
};
