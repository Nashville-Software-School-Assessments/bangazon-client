import { useEffect, useState } from 'react'
import Layout from '../../components/layout'
import Navbar from '../../components/navbar'
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
  if (isLoading) return <p>Loading...</p>
  return (
    <section>
      <h1>Products</h1>
      <div className="columns is-multiline">
        {products.map(product => (
          <div className="column is-one-quarter">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"></img>
                </figure>
              </div>
              <header className="card-header">
                <p className="card-header-title">
                  {product.name} - ${product.price}
                </p>
              </header>
              <div className="card-content">
                <div className="content">
                  {product.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
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
