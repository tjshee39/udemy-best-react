// import { createStore } from 'redux'
import { createSlice, configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter'
import authReducer from './auth'

// @reduxjs/toolkit 사용
const store = configureStore({
  // 단일리듀서
  // reducer: counterSlice.reducer,

  // slice가 여러개일 때 => reducer map 생성
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
})

export default store
