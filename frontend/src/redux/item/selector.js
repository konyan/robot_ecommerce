import { createSelector } from 'reselect';

const selectItem = (state) => state.item;

export const selectorItems = createSelector([selectItem], (item) => item.items);
