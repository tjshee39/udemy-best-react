import { useParams, Link } from 'react-router-dom'

const ProductDetail = () => {
  const params = useParams()

  return (
    <>
      <h1>상품 상세정보</h1>
      <p>{params.productId}</p>
      <p><Link to=".." relative="path">뒤로</Link></p>
    </>
  )
}

export default ProductDetail