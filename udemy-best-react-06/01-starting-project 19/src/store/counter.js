import { createSlice } from '@reduxjs/toolkit'

const initialCounterState = { counter: 0, showCounter: true }

// @reduxjs/toolkit 사용
const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    increase(state, action) {
      state.counter += action.payload
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter
    },
  },
})

/*
// react-redux 및 redux 사용
const counterReducer = (state = initialState, action) => {
  // state 원본 수정하지 않기
  // 반드시 새로운 객체 return

  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    }
  }

  if (action.type === 'increase') {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    }
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    }
  }

  if (action.type === 'toggle') {
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
    }
  }

  return state
}

const store = createStore(counterReducer)
*/

export const counterActions = counterSlice.actions
export default counterSlice.reducer
