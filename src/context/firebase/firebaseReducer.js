import { GET_PRODUCTS } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      const v = {
        ...state,
        menu: action.payload
      };
      return v;
    default:
      return state;
  }
}
