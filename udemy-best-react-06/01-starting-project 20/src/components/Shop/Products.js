import ProductItem from './ProductItem'
import classes from '../../css/Products.module.css'

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    title: '첫 번째 상품',
    description: '상품 설명',
  },
  {
    id: 'p2',
    price: 5,
    title: '두 번째 상품',
    description: '두 번째 상품입니다.',
  },
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>갖고싶은거 다 사라</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  )
}

export default Products
