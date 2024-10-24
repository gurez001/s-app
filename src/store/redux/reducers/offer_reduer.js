import {
  FETCH_OFFER_ERROR,
  FETCH_OFFER_REFRESH,
  FETCH_OFFER_SLIDER_FAILURE,
  FETCH_OFFER_SLIDER_REQUEST,
  FETCH_OFFER_SLIDER_SUCCESS,
  FETCH_OFFERS_FAILURE,
  FETCH_OFFERS_REQUEST,
  FETCH_OFFERS_SUCCESS,
  RESET_OFFER,
} from "../constants/offer_actionTypes";

const initialState = {
  loading: false,
  offer_slider: [],
  offer_data: [],
  error: null,
  resultPerpage: 0,
};

export const offer_slider_reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_OFFER_SLIDER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_OFFER_SLIDER_SUCCESS:
      return {
        ...state,
        loading: false,
        offer_slider: action.payload.slide_data,
      };
    case FETCH_OFFER_SLIDER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case FETCH_OFFER_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const offer_reducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_OFFER:
      return initialState;
    case FETCH_OFFERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_OFFERS_SUCCESS:
      return {
        ...state,
        loading: false,
        offer_data: [...state.offer_data, ...action.payload],
      };
    case FETCH_OFFER_REFRESH:
      return {
        ...state,
        loading: false,
        offer_data: action.payload,
      };
    case FETCH_OFFERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case FETCH_OFFER_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
