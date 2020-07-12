import { CLOSE_SNACKBAR, SHOW_SNACKBAR } from "../actions/app";
export const SNACKBAR_TYPES = {
  warning: "warning",
  error: "error",
  info: "info",
  success: "success",
};

const initialState = {
  snackbar: {
    visible: false,
    type: SNACKBAR_TYPES.error,
    message: "this is an error",
  },
};

export const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CLOSE_SNACKBAR: {
      return {
        ...state,
        snackbar: {
          ...state.snackbar,
          visible: false,
        },
      };
    }
    case SHOW_SNACKBAR: {
      return {
        ...state,
        snackbar: {
          ...state.snackbar,
          type: payload.type,
          message: payload.message,
          visible: true,
        },
      };
    }
    default:
      return state;
  }
};
