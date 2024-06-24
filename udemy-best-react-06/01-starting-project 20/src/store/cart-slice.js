import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    // totalAmount: 0,
    changed: false,
  },
  reducers: {
    /* 장바구니 불러오기 */
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity
      state.items = action.payload.items
    },
    /* 장바구니 추가 */
    addItemToCart(state, action) {
      // reduxjs/toolkit의 기본 변수: payload
      const newItem = action.payload
      const existingItem = state.items.find((item) => item.id === newItem.id)
      state.totalQuantity++
      state.changed = true

      // reduxjs/toolkit 사용했기 때문에
      // state 값 수정 가능(reducer 내부에서만)
      // redux만 사용할 경우에는 반드시 새로운 객체 return

      if (!existingItem) {
        // 해당 아이템이 장바구니에 없을 경우
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        })
      } else {
        // 해당 아이템이 이미 있을 경우
        existingItem.quantity++
        existingItem.totalPrice += newItem.price
      }
    },
    /* 장바구니 삭제 */
    removeItemFromCart(state, action) {
      const id = action.payload
      const existingItem = state.items.find((item) => item.id === id)
      state.totalQuantity--
      state.changed = true

      if (existingItem.quantity === 1) {
        // 해당 아이템의 수량이 1일 경우
        // 해당 아이템의 id를 제외한 모든 아이템 반환(해당 id의 아이템만 삭제)
        state.items = state.items.filter((item) => item.id !== id)
      } else {
        existingItem.quantity--
        existingItem.totalPrice -= existingItem.price
      }
    },
  },
})

export const cartActions = cartSlice.actions
export default cartSlice
