import { createContext, useReducer } from 'react'

/* 장바구니 Context */
const CartContext = createContext({
  items: [],              // 장바구니 항목(음식 아이템)
  addItem: (item) => {},  // 장바구니 항목 추가
  removeItem: (id) => {}, // 장바구니 항목 삭제
  clearCart: () => {}     // 장바구니 비우기
})

/*
 * 장바구니 Reducer
 * 업데이트 상태 반환 
 * state: 상태(장바구니 데이터)
 * action: 속성명(동작)
**/
const cartReducer = (state, action) => {
  /* 장바구니 항목 추가 */
  if (action.type === 'ADD_ITEM') {
    // 1. 장바구니에 해당 항목이 있는지 확인
    const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id)

    const updatedItems = [...state.items]  // 현재 장바구니 항목들
    
    if (existingCartItemIndex > -1) {
      // 2. 항목이 이미 존재
      const existingItem = state.items[existingCartItemIndex]

      // 2-1. 기존 장바구니 항목에 수량 + 1
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1
      }

      // 2-2. 현재 장바구니 목록 중 해당 항목 데이터 수정 
      updatedItems[existingCartItemIndex] = updatedItem
    } else {
      // 3. 항목 없음
      // 3-1. 항목 추가
      updatedItems.push({...action.item, quantity: 1})
    }

    return {...state, items: updatedItems}
  }

  /* 장바구니 항목 삭제 */
  if (action.type === 'REMOVE_ITEM') {
    // 1. 장바구니에 해당 항목이 있는지 확인
    const existingCartItemIndex = state.items.findIndex(item => item.id === action.id)

    const existingCartItem = state.items[existingCartItemIndex]  // 해당 항목

    const updatedItems = [...state.items]  // 현재 장바구니 항목들

    if (existingCartItem.quantity === 1) {
      // 2. 해당 항목의 수량이 1일 경우
      // 2-1. 현재 장바구니 항목에서 해당 항목의 index부터 데이터 하나를 삭제함
      updatedItems.splice(existingCartItemIndex, 1)

      return {...state, items: updatedItems}
    } else {
      // 3. 해당 항목의 수량이 1보다 클 경우
      // 3-1. 기존 장바구니 항목에 수량 - 1
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1
      }

      // 3-2. 현재 장바구니 목록 중 해당 항목 데이터 수정 
      updatedItems[existingCartItemIndex] = updatedItem

      return {...state, items: updatedItems}
    }
  }

  if (action.type === 'CLEAR_CART') {
    return {...state, items: []}
  }

  return state
}

/* 장바구니 상태관리 */
export const CartContextProvider = ({children}) => {
  const [cart, dispatchCartAction] = useReducer(cartReducer, {items: []})

  /* 장바구니 항목 추가 */
  const addItem = (item) => {
    dispatchCartAction({type: 'ADD_ITEM', item})
  }

  /* 장바구니 항목 삭제 */
  const removeItem = (id) => {
    dispatchCartAction({type: 'REMOVE_ITEM', id})
  }

  /* 장바구니 비우기 */
  const clearCart = () => {
    dispatchCartAction({type: 'CLEAR_CART'})
  }

  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
    clearCart
  }

  return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
}

export default CartContext