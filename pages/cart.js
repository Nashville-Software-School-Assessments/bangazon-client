import { useEffect, useState } from 'react'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import CartDetail from '../components/order/detail'
import { getCart } from '../data/orders'

export default function Cart() {
  const [cart, setCart] = useState({})
  useEffect(() => {
    getCart().then(cartData => setCart(cartData))
  }, [])
  return (
    <div className="columns is-centered is-vcentered">
      <div className="column is-6">
        <div className="card">
          <header class="card-header">
            <h3 class="card-header-title">
              Your Current Order
            </h3>
          </header>
          <div class="card-content">
            <div class="content">
              <CartDetail cart={cart} />
            </div>
          </div>
          <footer class="card-footer">
            <a href="#" class="card-footer-item">Complete Order</a>
            <a href="#" class="card-footer-item">Delete Order</a>
          </footer>
        </div>
      </div>

    </div>

  )
}

Cart.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      <section className="container">{page}</section>
    </Layout>
  )
}
