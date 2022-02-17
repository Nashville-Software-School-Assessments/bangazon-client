import { useState } from "react"

export default function CompleteFormModal({ showModal, setShowModal, paymentTypes, completeOrder }) {
  const [selectedPayment, setSelectedPayment] = useState(0)
  return (
    <div className={showModal ? "modal is-active" : "modal"}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Complete Order</p>
          <button className="delete" aria-label="close" onClick={() => setShowModal(false)}></button>
        </header>

        <section className="modal-card-body">
          <div className="select">
            <select value={selectedPayment} onChange={(event) => setSelectedPayment(event.target.value)}>
              <option>Select a payment type to complete your order</option>
              {
                paymentTypes.map(pt => <option key={pt.id} value={pt.id}>{pt.merchant_name} {pt.obscured_num}</option>)
              }
            </select>
          </div>
        </section>

        <footer className="modal-card-foot">
          <button className="button is-success" onClick={() => completeOrder(selectedPayment)}>Complete Order</button>
          <button className="button" onClick={() => setShowModal(false)}>Cancel</button>
        </footer>
      </div>
    </div>
  )
}
