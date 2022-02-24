import { useRouter } from "next/router"
import { useState, useRef } from "react"
import { addProductToOrder, recommendProduct } from "../../data/products"
import Modal from "../modal"
import { Input } from "../form-elements"

export function Detail({ product }) {
  const router = useRouter()
  const usernameEl = useRef()
  const [showModal, setShowModal] = useState(false)
  const [showError, setShowError] = useState(false)


  const addToCart = () => {
    addProductToOrder(product.id).then(() => {
      router.push('/cart')
    })
  }

  const recommendProductEvent = () => {
    recommendProduct(product.id, usernameEl.current.value).then((res) => {
      if (res) {
        setShowError(true)
      } else {
        setShowModal(false)
        setShowError(false)
        usernameEl.current.value = ""
      }
    })
  }

  return (
    <>
      <Modal setShowModal={setShowModal} showModal={showModal} title="Recommend this product to a user">
        <Input id="username" label="Enter a username" refEl={usernameEl}>
          {
            showError ? <p className="help is-danger">This user doesn't exist</p> : <></>
          }
        </Input>
        <>
          <button className="button is-success" onClick={recommendProductEvent}>Complete Order</button>
          <button className="button" onClick={() => setShowModal(false)}>Cancel</button>
        </>
      </Modal>
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <article className="tile is-child">
            <figure className="image is-4by3">
              <img src="https://bulma.io/images/placeholders/640x480.png"></img>
            </figure>
          </article>
        </div>
        <div className="tile is-parent is-vertical is-align-items-center is-justify-content-center">
          <article className="tile is-child">
            <h1 className="title">{product.name} - ${product.price}</h1>
            <p className="subtitle">{product.store?.name}</p>
            <p>{product.description}</p>
            <p>Pick up available in: {product.location}</p>
          </article>
          <article className="tile is-child">
            <div className="buttons">
              <button className="button is-primary" onClick={addToCart}>Add to Cart</button>
              <button className="button is-primary is-outlined" onClick={() => setShowModal(true)}>Recommend this Product</button>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}
