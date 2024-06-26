import { createContext, useReducer } from 'react'

import {DUMMY_PRODUCTS} from "../dummy-products.js";

export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  updateItemQuantity: () => {}
})

// 재생성 방지
// 직접적인 액세스 X
/*
  state: 가장 최근의 상태
  action: shoppingCartDispatch를 통해 받은 action
*/
const shoppingCartReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const updatedItems = [...state.items];

    const existingCartItemIndex = updatedItems.findIndex(
      (cartItem) => cartItem.id === action.payload
    )

    const existingCartItem = updatedItems[existingCartItemIndex];

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      const product = DUMMY_PRODUCTS.find(product => product.id === action.payload);
      updatedItems.push({
        id: action.payload,
        name: product.title,
        price: product.price,
        quantity: 1,
      });
    }

    return {
      ...state,  // not needed here because we have only one value
      items: updatedItems,
    }
  }

  if (action.type === 'UPDATE_ITEM') {
    const updatedItems = [...state.items];
    const updatedItemIndex = updatedItems.findIndex(
      (item) => item.id === action.payload.productId
    );

    const updatedItem = {
      ...updatedItems[updatedItemIndex],
    };

    updatedItem.quantity += action.payload.amount;

    if (updatedItem.quantity <= 0) {
      updatedItems.splice(updatedItemIndex, 1);
    } else {
      updatedItems[updatedItemIndex] = updatedItem;
    }

    return {
      ...state,  // 데이터 손실 방지
      items: updatedItems,
    }
  }

  return state
}

const CartContextProvider = ({ children }) => {
  const [shoppingCartState, shoppingCartDispatch] = useReducer(shoppingCartReducer, {items: []})

  const handleAddItemToCart = (id) => {
    shoppingCartDispatch({
      type: 'ADD_ITEM',
      payload: id
    })
  }

  const handleUpdateCartItemQuantity = (productId, amount) => {
    shoppingCartDispatch({
      type: 'UPDATE_ITEM',
      payload: {
        productId,
        amount
      }
    })
  }

  const ctxValue = {
    items: shoppingCartState.items,
    addItemToCart: handleAddItemToCart,
    updateItemQuantity: handleUpdateCartItemQuantity,
  }

  return <CartContext.Provider value={ctxValue}> {children} </CartContext.Provider>
}

export default CartContextProvider
