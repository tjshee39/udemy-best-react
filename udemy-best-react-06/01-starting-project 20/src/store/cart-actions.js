import { uiActions } from './ui-slice'
import { cartActions } from './cart-slice'

const dbUrl = process.env.REACT_APP_FIREBASE_URL

/* 장바구니 불러오기 */
export const fetchCartData = () => {
  return async (dispatch) => {
    /* 장바구니 불러오기 */
    const fetchData = async () => {
      // 장바구니 데이터 불러옴
      const response = await fetch(dbUrl + '/cart.json')

      // 오류
      if (!response.ok) {
        throw new Error('장바구니를 불러오는 중에 오류가 발생하였습니다.')
      }

      const data = await response.json()

      return data
    }

    try {
      // 장바구니 데이터 불러오는 함수 호출해서 return 저장
      const cartData = await fetchData()

      // fetchData가 정상실행
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      )
    } catch (error) {
      // fetchData에서 오류
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: '데이터 로드 실패',
          message: '장바구니를 불러오는 중에 오류가 발생하였습니다.',
        })
      )
    }
  }
}

/* 장바구니 담기 */
export const sendCartData = (cart) => {
  // 비동기함수 즉시 반환
  return async (dispatch) => {
    // notification 띄움
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: '데이터 전송중...',
        message: '장바구니에 담고있어요!',
      })
    )

    /* 장바구니 데이터 업데이트 */
    const sendRequest = async () => {
      // 장바구니 데이터 업데이트
      const response = await fetch(dbUrl + '/cart.json', {
        method: 'PUT',
        body: JSON.stringify({
          items: cart.items,
          totalQuantity: cart.totalQuantity,
        }),
      })

      // 오류
      if (!response.ok) {
        dispatch(
          uiActions.showNotification({
            status: 'error',
            title: '데이터 전송 실패',
            message: '장바구니 담기 중 오류가 발생하였습니다.',
          })
        )
      }
    }

    try {
      // 장바구니 데이터 업데이트 함수 호출
      await sendRequest()

      // sendRequest 정상실행
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: '데이터 전송 완료',
          message: '장바구니에 담기 완료!',
        })
      )
    } catch (error) {
      // sendRequest 오류
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: '데이터 전송 실패',
          message: '장바구니 담기 중 오류가 발생하였습니다.',
        })
      )
    }
  }
}
