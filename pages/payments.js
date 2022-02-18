import Link from 'next/link'
import { useState, useEffect } from 'react'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import Table from '../components/table'
import { getPaymentTypes } from '../data/payment-types'

export default function Payments() {
  const headers = ['Merchant Name', 'Card Number', '']
  const [payments, setPayments] = useState([])

  useEffect(() => {
    getPaymentTypes().then(setPayments)
  }, [])

  return (
    <div className="columns is-centered is-vcentered">
      <div className="column is-6">
        <div className="card">
          <header className="card-header">
            <h3 className="card-header-title">
              Your Payment Methods
            </h3>
          </header>
          <div className="card-content">
            <div className="content">
              <Table headers={headers}>
                {
                  payments.map(payment => (
                    <tr key={payment.id}>
                      <td>{payment.merchant_name}</td>
                      <td>{payment.obscured_num}</td>
                      <td>
                        <span className="icon is-clickable" onClick={() => removePayment(payment.id)}>
                          <i className="fas fa-trash"></i>
                        </span>
                      </td>
                    </tr>
                  ))
                }
              </Table>
            </div>
          </div>
          <footer className="card-footer">
            <a className="card-footer-item" onClick={() => {}}>Add new Payment Method</a>
          </footer>
        </div>
      </div>
    </div>

  )

}

Payments.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      {page}
    </Layout>
  )
}
