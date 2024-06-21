const redux = require('redux')

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
    }
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
    }
  }

  return state
}

const store = redux.createStore(counterReducer)

/* 구독 함수 */
// state가 변경될 때마다 작용할 트리거
const counterSubscriber = () => {
  // create로 생성된 저장소에서 사용
  // 최신 상태의 스냅샷 제공
  const latestState = store.getState()
  console.log('latestState::', latestState)
}

store.subscribe(counterSubscriber)

// dispatch: action 발송
store.dispatch({ type: 'increment' })
store.dispatch({ type: 'decrement' })
