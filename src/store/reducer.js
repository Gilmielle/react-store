export const initialState = {
  cartProducts: [],
  userAccessKey: null,
  cartProductsData: [],
  orderInfo: null,
};

const actions = {
  updateUserAccessKey: "updateUserAccessKey",
};

export const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.updateUserAccessKey:
      return {
        ...state,
        userAccessKey: payload.userAccessKey,
      };
    default:
      return state;
  }
};
