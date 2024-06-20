import { useEffect, useState, useCallback } from 'react'

/* api 호출(공통) */
const sendHttpRequest = async (url, config) => {
  const response = await fetch(url, config)

  const resData = await response.json()

  if (!response.ok) {
    throw new Error(resData.message || '뭔가 단단히 잘못됐다.')
  }

  return resData
}

/* api hook */
// 해당 hook을 사용하는 컴포넌트가 로딩될 때마다 요청
const useHttp = (url, config, initData) => {
  const [data, setData] = useState(initData)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()

  const clearData = () => {
    setData(initData)
  }

  const sendRequest = useCallback(async (data) => {
    setIsLoading(true)

    try {
      const resData = await sendHttpRequest(url, {...config, body: data})
      setData(resData)
    } catch (error) {
      setError(error.message || '뭔가 단단히 잘못됐다.')
    }

    setIsLoading(false)
  }, [url, config])

  useEffect(() => {
    // get방식일때만 sendRequest 호출
    if ((config && (config.method === 'GET' || !config.method)) || !config) {
      sendRequest()
    }
  }, [sendRequest, config])

  return {
    data,
    isLoading,
    error,
    sendRequest,
    clearData
  }
}

export default useHttp