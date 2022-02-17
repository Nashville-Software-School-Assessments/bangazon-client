import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import CartDetail from '../components/order/detail'
import CompleteFormModal from '../components/order/form-modal'
import { completeCurrentOrder, getCart } from '../data/orders'
import { getPaymentTypes } from '../data/payment-types'

export default function Cart() {
  const [cart, setCart] = useState({})
  const [paymentTypes, setPaymentTypes] = useState([])
  const [showCompleteForm, setShowCompleteForm] = useState(false)
  const router = useRouter()

  useEffect(() => {
    getCart().then(cartData => setCart(cartData))
    getPaymentTypes().then(paymentData => setPaymentTypes(paymentData))
  }, [])

  const completeOrder = (paymentTypeId) => {
    completeCurrentOrder(cart.id, paymentTypeId).then(() => router.push('/my-orders'))
  }

  return (
    <>
      <CompleteFormModal
        showModal={showCompleteForm}
        setShowModal={setShowCompleteForm}
        paymentTypes={paymentTypes}
        completeOrder={completeOrder}
      />
      <div className="columns is-centered is-vcentered">
        <div className="column is-6">
          <div className="card">
            <header className="card-header">
              <h3 className="card-header-title">
                Your Current Order
              </h3>
            </header>
            <div className="card-content">
              <div className="content">
                <CartDetail cart={cart} />
              </div>
            </div>
            <footer className="card-footer">
              <a className="card-footer-item" onClick={() => setShowCompleteForm(true)}>Complete Order</a>
              <a className="card-footer-item">Delete Order</a>
            </footer>
          </div>
        </div>
      </div>
    </>
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
