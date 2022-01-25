const initialState = {
  loader: false,
};

export const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loaderReducer: action.payload,
      };
    default:
      return state;
  }
};
