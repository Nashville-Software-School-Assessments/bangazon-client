import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Layout from '../../components/layout'
import Navbar from '../../components/navbar'
import { Detail } from '../../components/product/detail'
import { Ratings } from '../../components/rating/detail'
import { getProductById } from '../../data/products'

export default function ProductDetail() {
  const router = useRouter()
  const { id } = router.query
  const [product, setProduct] = useState({})

  useEffect(() => {
    if (id) {
      getProductById(id).then(productData => setProduct(productData))
    }
  }, [id])

  return (
    <div className="columns is-centered">
      <div className="column">
        <Detail product={product} />
        <Ratings
          number_purchased={product.number_purchased}
          ratings={product.ratings}
          average_rating={product.average_rating}
          likes={product.likes}
        />
      </div>
    </div>
  )
}

ProductDetail.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      {page}
    </Layout>
  )
}
