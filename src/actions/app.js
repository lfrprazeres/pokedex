const standardStart = "APP::";

export const CLOSE_SNACKBAR = `${standardStart}CLOSE_SNACKBAR`;

export const closeSnackbar = () => {
  return {
    type: CLOSE_SNACKBAR,
  };
};

export const SHOW_SNACKBAR = `${standardStart}SHOW_SNACKBAR`;

export const showSnackbar = (type, message) => {
  return {
    type: SHOW_SNACKBAR,
    payload: { type, message },
  };
};
