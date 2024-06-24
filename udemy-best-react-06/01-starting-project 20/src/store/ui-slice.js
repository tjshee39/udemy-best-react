import { createSlice } from '@reduxjs/toolkit'

const uiSlice = createSlice({
  name: 'ui',
  initialState: { cartIsVisible: false, notification: null },
  reducers: {
    /* 장바구니 노출 토글 */
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible
    },
    /* 알림 노출 */
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      }
    },
  },
})

export const uiActions = uiSlice.actions
export default uiSlice
