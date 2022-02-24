import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import CardLayout from '../components/card-layout'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import OrdersDetail from '../components/order/detail'
import CompleteFormModal from '../components/order/form-modal'
import Table from '../components/table'
import { completeCurrentOrder, getOrders } from '../data/orders'
import { getPaymentTypes } from '../data/payment-types'
import { removeProductFromOrder } from '../data/products'

export default function Orders() {
  const [orders, setOrders] = useState([])
  const headers = ['Order Date', 'Total', 'Payment Method']

  useEffect(() => {
    getOrders().then(ordersData => setOrders(ordersData))
  }, [])

  return (
    <>
      <CardLayout title="Your Orders">
        <Table headers={headers}>
          {
            orders.map((order) => (
              <tr key={order.id}>
                <td>{order.completed_on}</td>
                <td>${order.total}</td>
                <td>{order.payment_type?.obscured_num}</td>
              </tr>
            ))
          }
        </Table>
        <></>
      </CardLayout>
    </>
  )
}

Orders.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      <section className="container">{page}</section>
    </Layout>
  )
}
