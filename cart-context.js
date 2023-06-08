import React from 'react';

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  // isLogin: false,
  addItem: (item) => {},
  // removeItem: (id) => {},
  // setLogin : {},
  resetCart: {}
});

export default CartContext;