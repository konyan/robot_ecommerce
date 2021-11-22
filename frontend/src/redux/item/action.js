import { ItemActionTypes } from './type';

export const getAllItem = () => async (dispatch) => {
  const data = await fetch('/api/robots');
  const response = await data.json();
  return dispatch({
    type: ItemActionTypes.ALL_ITEM,
    payload: response.data,
  });
};

export const getFilterItem = (value) => async (dispatch, getState) => {
  const items = getState().item.originItems;
  const data = items.filter(
    (item) =>
      item.name.toLowerCase().includes(value) ||
      item.material.toLowerCase().includes(value)
  );
  return dispatch({
    type: ItemActionTypes.FILTER_ITEM,
    payload: data,
  });
};
