import { ItemActionTypes } from './type';

const INIT_STATE = {
  originItems: [],
  items: [],
};

const itemReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ItemActionTypes.ALL_ITEM:
      return { ...state, originItems: action.payload, items: action.payload };
    case ItemActionTypes.FILTER_ITEM:
      return { ...state, items: action.payload };

    default:
      return state;
  }
};

export default itemReducer;
