import { useEffect, useState } from 'react'
import Filter from '../../components/filter'
import Layout from '../../components/layout'
import Navbar from '../../components/navbar'
import { ProductCard } from '../../components/product-card'
import { getProducts } from '../../data/products'

export default function Products() {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getProducts().then(data => {
      setProducts(data)
      setIsLoading(false)
    })
  }, [])

  const searchProducts = (event) => {
    getProducts(event).then(productsData => setProducts(productsData))
  }

  if (isLoading) return <p>Loading...</p>
  return (
    <>
      <Filter productCount={products.length} onSearch={searchProducts} />

      <div className="columns is-multiline">
        {products.map(product => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </>
  )
}
Products.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      {page}
    </Layout>
  )
}
