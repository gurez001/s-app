import axiosInstance from "../lib/AxiosInstance";
import { getSiteURL } from "../lib/get-site-url";
import { get_method } from "../lib/headers";
import {
  BRANCH_RESET,
  FETCH_BRANCH_DETAILS_FAILURE,
  FETCH_BRANCH_DETAILS_REQUEST,
  FETCH_BRANCH_DETAILS_SUCCESS,
  FETCH_BRANCH_ERROR,
  FETCH_BRANCH_REFRESH,
} from "../store/redux/constants/branch_actionTypes";
const baseusel = getSiteURL();
export const get_branch_details =
  (page = 1, isRefresh) =>
  async (dispatch) => {
    try {
      if (isRefresh) {
        dispatch({ type: BRANCH_RESET }); // Reset state before fetching new data
      }
      dispatch({ type: FETCH_BRANCH_DETAILS_REQUEST });
      const { data } = await axiosInstance.get(
        `${baseusel}/api/v1/branchs?status=Active&page=${page}`,
        get_method()
      );
      if (isRefresh) {
        dispatch({ type: FETCH_BRANCH_REFRESH, payload: data });
      } else {
        dispatch({ type: FETCH_BRANCH_DETAILS_SUCCESS, payload: data });
      }
    } catch (error) {
      dispatch({
        type: FETCH_BRANCH_DETAILS_FAILURE,
        payload: error.response.data.message,
      });
    }
  };

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: FETCH_BRANCH_ERROR });
};
