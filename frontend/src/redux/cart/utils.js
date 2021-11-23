import { toast } from 'react-toastify';

export const addItemToCart = (cartItems, cartItem) => {
  const existingCartItem = cartItems.find(
    (item) => item.name === cartItem.name
  );

  if (existingCartItem) {
    if (existingCartItem.quantity < existingCartItem.stock) {
      return cartItems.map((item) =>
        item.name === cartItem.name
          ? { ...item, quantity: parseInt(item.quantity) + 1 }
          : item
      );
    } else {
      toast.error('Over the current stock!');
      return cartItems;
    }
  } else {
    if (cartItems.length <= 4) {
      return [...cartItems, { ...cartItem, quantity: 1 }];
    } else {
      toast.error('Only 5 robots can add');
      return [...cartItems];
    }
  }
};

export const removeItemFromCart = (cartItems, cartItem) => {
  return cartItems.filter((item) => item.name !== cartItem.name);
};

export const removeItem = (cartItems, cartItem) => {
  const existingCartItem = cartItems.find(
    (item) => item.name === cartItem.name
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((item) => item.name !== cartItem.name);
  }

  return cartItems.map((item) =>
    item.name === cartItem.name
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};
