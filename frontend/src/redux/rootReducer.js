import { combineReducers } from 'redux';
import cartReducer from './cart/reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import itemReducer from './item/reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  cart: cartReducer,
  item: itemReducer,
});

export default persistReducer(persistConfig, rootReducer);
