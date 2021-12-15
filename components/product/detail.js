export function Detail({ product }) {
  return (
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
          <button className="button is-primary">Add to Cart</button>
        </article>
      </div>
    </div>
  )
}
